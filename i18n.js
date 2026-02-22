/**
 * GameTopUp - 语言切换器组件
 * ======================
 * 在页面中添加语言切换按钮
 * 
 * 功能：
 * - 自动检测页面中的 .nav-icons 容器
 * - 动态注入语言切换下拉菜单
 * - 支持中文/English 切换
 * - 防止重复初始化
 * 
 * 使用方法：
 * 1. 在 HTML 页面中添加：
 *    <script src="translations.js"></script>
 *    <script src="i18n.js"></script>
 * 
 * 2. 确保页面中有 .nav-icons 元素（语言切换器会自动注入）
 * 
 * 版本：1.1.0
 * 作者：GameTopUp Team
 */

(function() {
  'use strict';

  // ==================== 全局标记：防止重复初始化 ====================
  if (typeof window.languageSwitcherInitialized === 'undefined') {
    window.languageSwitcherInitialized = false;
  }

  // ==================== 支持的语言列表 ====================
  const SUPPORTED_LANGS = [
    { code: 'zh-CN', name: '中文', flag: '🇨🇳' },
    { code: 'en-US', name: 'English', flag: '🇺🇸' }
    // 添加新语言只需在这里扩展，例如：
    // { code: 'ja-JP', name: '日本語', flag: '🇯🇵' },
    // { code: 'ko-KR', name: '한국어', flag: '🇰🇷' }
  ];

  // ==================== 创建语言切换器 HTML ====================
  function createLanguageSwitcher() {
    const currentLang = getCurrentLang();
    
    const switcher = document.createElement('div');
    switcher.className = 'language-switcher';
    switcher.style.cssText = `
      position: relative;
      display: inline-block;
    `;
    
    // 获取当前语言数据
    const currentLangData = SUPPORTED_LANGS.find(l => l.code === currentLang) || SUPPORTED_LANGS[0];
    
    // 构建 HTML
    switcher.innerHTML = `
      <button id="langToggle" style="
        background: none;
        border: 1px solid #ddd;
        border-radius: 20px;
        padding: 6px 12px;
        font-size: 0.85rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 6px;
        transition: all 0.3s;
        color: var(--text-dark, #333);
      " title="${t('common.language') || 'Language'}">
        <span>${currentLangData.flag}</span>
        <span>${currentLangData.name}</span>
        <i class="fas fa-chevron-down" style="font-size: 0.7rem;"></i>
      </button>
      <div id="langDropdown" style="
        display: none;
        position: absolute;
        top: 100%;
        right: 0;
        background: white;
        border: 1px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        min-width: 150px;
        z-index: 1000;
        margin-top: 5px;
      ">
        ${SUPPORTED_LANGS.map(lang => `
          <button class="lang-option" data-lang="${lang.code}" style="
            display: flex;
            align-items: center;
            gap: 10px;
            width: 100%;
            padding: 10px 15px;
            background: none;
            border: none;
            text-align: left;
            cursor: pointer;
            font-size: 0.9rem;
            transition: background 0.2s;
            color: var(--text-dark, #333);
          ">
            <span>${lang.flag}</span>
            <span>${lang.name}</span>
            ${lang.code === currentLang ? '<i class="fas fa-check" style="margin-left: auto; color: #6C63FF;"></i>' : ''}
          </button>
        `).join('')}
      </div>
    `;
    
    return switcher;
  }

  // ==================== 初始化语言切换器 ====================
  function initLanguageSwitcher(container) {
    // 🔧 防止重复初始化
    if (container.querySelector('#langToggle')) {
      console.log('[i18n] 语言切换器已存在，跳过初始化');
      return;
    }
    
    const switcher = createLanguageSwitcher();
    container.appendChild(switcher);
    
    const toggleBtn = document.getElementById('langToggle');
    const dropdown = document.getElementById('langDropdown');
    
    if (!toggleBtn || !dropdown) {
      console.warn('[i18n] 创建切换器失败');
      return;
    }
    
    // 🔽 切换下拉菜单显示/隐藏
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isVisible = dropdown.style.display === 'block';
      dropdown.style.display = isVisible ? 'none' : 'block';
    });
    
    // 🌐 点击语言选项切换语言
    dropdown.querySelectorAll('.lang-option').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const newLang = btn.dataset.lang;
        
        if (newLang && TRANSLATIONS[newLang]) {
          // 保存语言设置
          localStorage.setItem('language', newLang);
          
          // 应用新语言
          applyLanguage(newLang);
          
          // 隐藏下拉菜单
          dropdown.style.display = 'none';
          
          // 重新渲染切换器（更新选中状态）
          if (switcher.parentNode) {
            switcher.replaceWith(createLanguageSwitcher());
            // 重新绑定事件（因为替换了元素）
            initLanguageSwitcher(container);
          }
          
          // 触发语言切换事件
          window.dispatchEvent(new CustomEvent('languageChanged', { 
            detail: { lang: newLang } 
          }));
          
          console.log(`🌍 语言已切换: ${newLang}`);
        }
      });
    });
    
    // 👆 点击页面其他地方关闭下拉菜单
    document.addEventListener('click', () => {
      dropdown.style.display = 'none';
    });
    
    // 🔄 监听语言切换事件，自动更新切换器
    window.addEventListener('languageChanged', () => {
      if (switcher.parentNode) {
        switcher.replaceWith(createLanguageSwitcher());
        // 重新绑定事件
        initLanguageSwitcher(container);
      }
    });
    
    console.log('[i18n] 语言切换器已初始化');
  }

  // ==================== 自动注入到页面 ====================
  function autoInject() {
    // 🔧 全局检查：只初始化一次
    if (window.languageSwitcherInitialized) {
      console.log('[i18n] 已初始化过，跳过自动注入');
      return;
    }
    
    // 尝试注入到导航栏 (.nav-icons)
    const navIcons = document.querySelector('.nav-icons');
    if (navIcons) {
      // 检查是否已经存在切换器
      if (navIcons.querySelector('#langToggle')) {
        console.log('[i18n] 导航栏已有切换器，跳过');
        window.languageSwitcherInitialized = true;
        return;
      }
      
      initLanguageSwitcher(navIcons);
      window.languageSwitcherInitialized = true;
      console.log('[i18n] 已注入到 .nav-icons');
      return;
    }
    
    // 尝试注入到 header (.header-content)
    const header = document.querySelector('.header-content');
    if (header) {
      // 检查是否已经存在切换器
      if (header.querySelector('#langToggle')) {
        console.log('[i18n] header 已有切换器，跳过');
        window.languageSwitcherInitialized = true;
        return;
      }
      
      const wrapper = document.createElement('div');
      wrapper.style.cssText = 'display: flex; align-items: center; gap: 15px;';
      header.appendChild(wrapper);
      initLanguageSwitcher(wrapper);
      window.languageSwitcherInitialized = true;
      console.log('[i18n] 已注入到 .header-content');
      return;
    }
    
    console.log('[i18n] 未找到合适的注入位置 (.nav-icons 或 .header-content)');
  }

  // ==================== 导出函数供手动调用 ====================
  
  /**
   * 手动创建语言切换器元素
   * @returns {HTMLElement} 切换器 DOM 元素
   */
  window.createLanguageSwitcher = createLanguageSwitcher;
  
  /**
   * 手动初始化语言切换器到指定容器
   * @param {HTMLElement} container - 目标容器元素
   */
  window.initLanguageSwitcher = initLanguageSwitcher;
  
  /**
   * 获取支持的语言列表
   * @returns {Array} 语言配置数组
   */
  window.getSupportedLangs = function() {
    return [...SUPPORTED_LANGS];
  };
  
  /**
   * 手动重新初始化所有切换器（用于 SPA 路由切换后）
   */
  window.reinitLanguageSwitcher = function() {
    window.languageSwitcherInitialized = false;
    autoInject();
  };

  // ==================== 页面加载后自动注入 ====================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoInject);
  } else {
    // DOM 已加载，立即执行
    autoInject();
  }

  // ==================== 清理函数（可选）====================
  /**
   * 移除所有语言切换器（用于页面卸载时清理）
   */
  window.destroyLanguageSwitcher = function() {
    document.querySelectorAll('#langToggle').forEach(btn => {
      const switcher = btn.closest('.language-switcher');
      if (switcher && switcher.parentNode) {
        switcher.parentNode.removeChild(switcher);
      }
    });
    window.languageSwitcherInitialized = false;
    console.log('[i18n] 语言切换器已清理');
  };

  // ==================== 调试信息 ====================
  if (window.isDevelopment) {
    console.log('🌍 i18n.js 已加载');
    console.log('   支持语言:', SUPPORTED_LANGS.map(l => l.code).join(', '));
    console.log('   自动注入: 启用');
  }

})();
