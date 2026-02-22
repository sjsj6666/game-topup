/**
 * GameTopUp - 语言切换器组件
 * ======================
 * 在页面中添加语言切换按钮
 */

(function() {
  'use strict';

  // 支持的语言列表
  const SUPPORTED_LANGS = [
    { code: 'zh-CN', name: '中文', flag: '🇨🇳' },
    { code: 'en-US', name: 'English', flag: '🇺🇸' }
  ];

  // 创建语言切换器 HTML
  function createLanguageSwitcher() {
    const currentLang = getCurrentLang();
    
    const switcher = document.createElement('div');
    switcher.className = 'language-switcher';
    switcher.style.cssText = `
      position: relative;
      display: inline-block;
    `;
    
    // 当前语言按钮
    const currentLangData = SUPPORTED_LANGS.find(l => l.code === currentLang) || SUPPORTED_LANGS[0];
    
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
      ">
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

  // 初始化语言切换器
  function initLanguageSwitcher(container) {
    const switcher = createLanguageSwitcher();
    container.appendChild(switcher);
    
    const toggleBtn = document.getElementById('langToggle');
    const dropdown = document.getElementById('langDropdown');
    
    // 切换下拉菜单
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isVisible = dropdown.style.display === 'block';
      dropdown.style.display = isVisible ? 'none' : 'block';
    });
    
    // 点击选项切换语言
    dropdown.querySelectorAll('.lang-option').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const newLang = btn.dataset.lang;
        setLanguage(newLang);
        dropdown.style.display = 'none';
        
        // 重新渲染切换器（更新选中状态）
        switcher.replaceWith(createLanguageSwitcher());
        initLanguageSwitcher(container);
      });
    });
    
    // 点击外部关闭下拉菜单
    document.addEventListener('click', () => {
      dropdown.style.display = 'none';
    });
    
    // 监听语言切换事件，重新渲染
    window.addEventListener('languageChanged', () => {
      if (switcher.parentNode) {
        switcher.replaceWith(createLanguageSwitcher());
        initLanguageSwitcher(container);
      }
    });
  }

  // 自动注入到页面（如果元素存在）
  function autoInject() {
    // 尝试注入到导航栏
    const navIcons = document.querySelector('.nav-icons');
    if (navIcons) {
      initLanguageSwitcher(navIcons);
      return;
    }
    
    // 尝试注入到 header
    const header = document.querySelector('.header-content');
    if (header) {
      const wrapper = document.createElement('div');
      wrapper.style.cssText = 'display: flex; align-items: center; gap: 15px;';
      header.appendChild(wrapper);
      initLanguageSwitcher(wrapper);
    }
  }

  // 导出函数供手动调用
  window.createLanguageSwitcher = createLanguageSwitcher;
  window.initLanguageSwitcher = initLanguageSwitcher;
  window.SUPPORTED_LANGS = SUPPORTED_LANGS;

  // 页面加载后自动注入
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoInject);
  } else {
    autoInject();
  }

})();