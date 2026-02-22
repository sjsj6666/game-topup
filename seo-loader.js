/**
 * ============================================
 * GameTopUp SEO 加载器
 * ============================================
 * 功能：
 * - 从 Supabase 云端加载 SEO 元数据
 * - 动态更新页面 title、meta、Open Graph 等
 * - 支持结构化数据（JSON-LD）
 * - 自动检测当前页面路径
 * - 支持游戏详情页动态 SEO
 * 
 * 使用方法：
 * 1. 在每个 HTML 页面的 <head> 中添加：
 *    <script src="config.js"></script>
 *    <script src="seo-loader.js"></script>
 * 
 * 2. 可选：在页面加载后调用 updateGameSEO(gameData) 更新游戏专属 SEO
 * 
 * 版本：1.0.0
 * 作者：GameTopUp Team
 * ============================================
 */

(function() {
  'use strict';

  // ==================== 配置 ====================
  const SEO_CONFIG = {
    // 是否启用调试日志
    debug: true,
    
    // 默认 SEO 值（当云端数据加载失败时使用）
    defaults: {
      '/': {
        title: 'GameTopUp - 安全快捷的游戏充值平台',
        description: 'GameTopUp 提供原神、王者荣耀、崩坏星穹铁道等热门游戏充值服务，安全快捷，优惠多多！',
        keywords: '游戏充值，原神充值，王者荣耀充值，星穹铁道充值，便宜充值，安全充值'
      },
      '/game-detail': {
        title: '游戏详情 - GameTopUp',
        description: '查看游戏详情和充值套餐，选择最适合你的充值方案。',
        keywords: '游戏详情，充值套餐，优惠'
      },
      '/cart': {
        title: '购物车 - GameTopUp',
        description: '查看你的购物车，管理已选择的游戏充值套餐。',
        keywords: '购物车，充值套餐'
      },
      '/payment': {
        title: '支付确认 - GameTopUp',
        description: '安全支付，支持多种支付方式。',
        keywords: '支付，安全支付'
      },
      '/orders': {
        title: '我的订单 - GameTopUp',
        description: '查看你的订单历史和状态。',
        keywords: '订单，订单历史'
      },
      '/profile': {
        title: '个人中心 - GameTopUp',
        description: '管理你的账户信息和设置。',
        keywords: '个人中心，账户管理'
      },
      '/admin': {
        title: '后台管理 - GameTopUp',
        description: '管理游戏、订单和 SEO 设置。',
        keywords: '后台管理，SEO 管理'
      },
      '/chat': {
        title: '客服支持 - GameTopUp',
        description: '联系在线客服，解决您的问题。',
        keywords: '客服，在线支持'
      }
    },
    
    // 页面路径映射（可根据实际 URL 调整）
    pathMapping: {
      'index.html': '/',
      'game-detail.html': '/game-detail',
      'cart.html': '/cart',
      'payment.html': '/payment',
      'orders.html': '/orders',
      'profile.html': '/profile',
      'admin.html': '/admin',
      'chat.html': '/chat'
    }
  };

  // ==================== 工具函数 ====================
  
  /**
   * 日志输出（调试模式）
   */
  function log(message, type = 'info') {
    if (!SEO_CONFIG.debug) return;
    
    const prefix = '🔍 [SEO Loader]';
    const icon = {
      info: 'ℹ️',
      success: '✅',
      error: '❌',
      warn: '⚠️'
    };
    
    console.log(`${prefix} ${icon[type] || 'ℹ️'} ${message}`);
  }

  /**
   * 获取或创建 meta 标签
   */
  function getOrCreateMeta(selector, attributeName, attributeValue) {
    let element = document.querySelector(selector);
    
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attributeName, attributeValue);
      document.head.appendChild(element);
      log(`创建 meta 标签：${selector}`, 'success');
    }
    
    return element;
  }

  /**
   * 获取或创建 link 标签
   */
  function getOrCreateLink(selector, rel) {
    let element = document.querySelector(selector);
    
    if (!element) {
      element = document.createElement('link');
      element.rel = rel;
      document.head.appendChild(element);
      log(`创建 link 标签：${selector}`, 'success');
    }
    
    return element;
  }

  /**
   * 获取或创建结构化数据脚本
   */
  function getOrCreateSchema() {
    let element = document.querySelector('script[type="application/ld+json"]');
    
    if (!element) {
      element = document.createElement('script');
      element.type = 'application/ld+json';
      document.head.appendChild(element);
      log('创建结构化数据脚本', 'success');
    }
    
    return element;
  }

  // ==================== 核心功能 ====================

  /**
   * 从 Supabase 加载 SEO 数据
   * @param {string} pagePath - 页面路径，如 '/', '/game-detail'
   * @returns {Promise<Object|null>} SEO 数据对象
   */
  async function loadSEOFromCloud(pagePath) {
    try {
      // 检查 db 是否可用
      if (typeof db === 'undefined') {
        log('Supabase db 未初始化，使用默认 SEO 数据', 'warn');
        return null;
      }

      // 从 seo_meta 表查询
      const { data, error } = await db
        .from('seo_meta')
        .select('*')
        .eq('page_path', pagePath)
        .eq('active', true)
        .single();

      if (error) {
        log(`查询 SEO 数据失败：${error.message}`, 'error');
        return null;
      }

      if (!data) {
        log(`未找到页面 ${pagePath} 的 SEO 数据`, 'warn');
        return null;
      }

      log(`成功加载 SEO 数据：${data.title}`, 'success');
      return data;

    } catch (err) {
      log(`加载 SEO 数据异常：${err.message}`, 'error');
      return null;
    }
  }

  /**
   * 更新页面 SEO 元数据
   * @param {Object} seoData - SEO 数据对象
   */
  function updatePageSEO(seoData) {
    if (!seoData) {
      log('SEO 数据为空，跳过更新', 'warn');
      return;
    }

    // 1. 更新页面标题
    if (seoData.title) {
      document.title = seoData.title;
      log(`更新 title: ${seoData.title}`, 'success');
    }

    // 2. 更新 meta description
    if (seoData.description) {
      const metaDesc = getOrCreateMeta(
        'meta[name="description"]',
        'name',
        'description'
      );
      metaDesc.content = seoData.description;
      log(`更新 description: ${seoData.description.substring(0, 50)}...`, 'success');
    }

    // 3. 更新 meta keywords
    if (seoData.keywords) {
      const metaKeywords = getOrCreateMeta(
        'meta[name="keywords"]',
        'name',
        'keywords'
      );
      metaKeywords.content = seoData.keywords;
      log(`更新 keywords: ${seoData.keywords}`, 'success');
    }

    // 4. 更新 Open Graph title
    if (seoData.og_title) {
      const ogTitle = getOrCreateMeta(
        'meta[property="og:title"]',
        'property',
        'og:title'
      );
      ogTitle.content = seoData.og_title;
    }

    // 5. 更新 Open Graph description
    if (seoData.og_description) {
      const ogDesc = getOrCreateMeta(
        'meta[property="og:description"]',
        'property',
        'og:description'
      );
      ogDesc.content = seoData.og_description;
    }

    // 6. 更新 Open Graph image
    if (seoData.og_image) {
      const ogImage = getOrCreateMeta(
        'meta[property="og:image"]',
        'property',
        'og:image'
      );
      ogImage.content = seoData.og_image;
    }

    // 7. 更新 canonical URL
    if (seoData.canonical_url) {
      const canonical = getOrCreateLink(
        'link[rel="canonical"]',
        'canonical'
      );
      canonical.href = seoData.canonical_url;
    }

    // 8. 添加结构化数据（JSON-LD）
    if (seoData.schema_json) {
      try {
        const schemaScript = getOrCreateSchema();
        // 解析并重新序列化，确保格式正确
        const schema = typeof seoData.schema_json === 'string' 
          ? JSON.parse(seoData.schema_json) 
          : seoData.schema_json;
        schemaScript.textContent = JSON.stringify(schema);
        log('添加结构化数据', 'success');
      } catch (err) {
        log(`结构化数据解析失败：${err.message}`, 'error');
      }
    }

    log('🎉 SEO 更新完成！', 'success');
  }

  /**
   * 自动检测当前页面路径
   * @returns {string} 页面路径
   */
  function detectCurrentPagePath() {
    const pathname = window.location.pathname;
    const filename = pathname.split('/').pop() || 'index.html';
    
    // 先尝试从映射表查找
    if (SEO_CONFIG.pathMapping[filename]) {
      log(`检测到页面：${filename} → ${SEO_CONFIG.pathMapping[filename]}`, 'info');
      return SEO_CONFIG.pathMapping[filename];
    }
    
    // 再尝试从路径包含判断
    if (pathname.includes('game-detail')) return '/game-detail';
    if (pathname.includes('cart')) return '/cart';
    if (pathname.includes('payment')) return '/payment';
    if (pathname.includes('orders')) return '/orders';
    if (pathname.includes('profile')) return '/profile';
    if (pathname.includes('admin')) return '/admin';
    if (pathname.includes('chat')) return '/chat';
    
    // 默认首页
    log('使用默认首页路径', 'info');
    return '/';
  }

  /**
   * 获取默认 SEO 数据（当云端加载失败时）
   * @param {string} pagePath - 页面路径
   * @returns {Object} 默认 SEO 数据
   */
  function getDefaultSEO(pagePath) {
    const defaults = SEO_CONFIG.defaults[pagePath] || SEO_CONFIG.defaults['/'];
    log('使用默认 SEO 数据', 'warn');
    return defaults;
  }

  /**
   * 初始化 SEO（页面加载时自动调用）
   */
  async function initSEO() {
    log('========== SEO Loader 初始化 ==========');
    
    const pagePath = detectCurrentPagePath();
    log(`当前页面路径：${pagePath}`);
    
    // 1. 先应用默认 SEO（避免页面闪烁）
    const defaultSEO = getDefaultSEO(pagePath);
    updatePageSEO(defaultSEO);
    
    // 2. 异步加载云端 SEO 数据
    try {
      const cloudSEO = await loadSEOFromCloud(pagePath);
      if (cloudSEO) {
        updatePageSEO(cloudSEO);
      }
    } catch (err) {
      log(`云端 SEO 加载失败，使用默认数据：${err.message}`, 'error');
    }
    
    log('========== SEO Loader 初始化完成 ==========');
  }

  // ==================== 游戏详情页专属 SEO ====================

  /**
   * 更新游戏详情页的 SEO（动态）
   * @param {Object} gameData - 游戏数据对象
   */
  window.updateGameSEO = function(gameData) {
    if (!gameData) {
      log('游戏数据为空，无法更新游戏 SEO', 'error');
      return;
    }

    log(`更新游戏 SEO: ${gameData.name}`, 'info');

    // 1. 动态标题
    const title = `${gameData.name}充值 - GameTopUp`;
    document.title = title;

    // 2. 动态描述
    const description = gameData.seo_description || 
      `${gameData.description || gameData.name}充值服务，安全快捷，优惠多多。立即充值享受超值套餐！`;
    
    const metaDesc = getOrCreateMeta(
      'meta[name="description"]',
      'name',
      'description'
    );
    metaDesc.content = description;

    // 3. 动态关键词
    const keywords = gameData.seo_keywords || 
      `${gameData.name},充值，${(gameData.category || []).join(',')},游戏充值`;
    
    const metaKeywords = getOrCreateMeta(
      'meta[name="keywords"]',
      'name',
      'keywords'
    );
    metaKeywords.content = keywords;

    // 4. Open Graph
    const ogTitle = getOrCreateMeta(
      'meta[property="og:title"]',
      'property',
      'og:title'
    );
    ogTitle.content = title;

    const ogDesc = getOrCreateMeta(
      'meta[property="og:description"]',
      'property',
      'og:description'
    );
    ogDesc.content = description;

    // 5. 结构化数据（Product Schema）
    const schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": `${gameData.name}充值`,
      "description": gameData.description || '',
      "image": gameData.icon ? `https://你的域名.com/icons/${gameData.icon}.png` : '',
      "offers": {
        "@type": "Offer",
        "priceCurrency": "CNY",
        "price": gameData.price || 6,
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "GameTopUp"
        }
      },
      "category": (gameData.category || []).join(', '),
      "brand": {
        "@type": "Brand",
        "name": gameData.name
      }
    };

    const schemaScript = getOrCreateSchema();
    schemaScript.textContent = JSON.stringify(schema);

    log(`✅ 游戏 SEO 更新完成：${gameData.name}`, 'success');
  };

  // ==================== 公开 API ====================

  /**
   * 手动加载指定页面的 SEO
   * @param {string} pagePath - 页面路径
   */
  window.loadPageSEO = async function(pagePath) {
    const cloudSEO = await loadSEOFromCloud(pagePath);
    if (cloudSEO) {
      updatePageSEO(cloudSEO);
    } else {
      updatePageSEO(getDefaultSEO(pagePath));
    }
  };

  /**
   * 手动更新 SEO 数据
   * @param {Object} seoData - SEO 数据对象
   */
  window.updatePageSEO = updatePageSEO;

  /**
   * 重新初始化 SEO
   */
  window.reloadSEO = initSEO;

  /**
   * 获取当前 SEO 配置
   * @returns {Object} 配置对象
   */
  window.getSEOConfig = function() {
    return { ...SEO_CONFIG };
  };

  /**
   * 设置调试模式
   * @param {boolean} enabled - 是否启用调试
   */
  window.setSEODbg = function(enabled) {
    SEO_CONFIG.debug = enabled;
    log(`调试模式已${enabled ? '启用' : '禁用'}`, 'info');
  };

  // ==================== 自动初始化 ====================

  // 页面加载完成后自动执行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSEO);
  } else {
    initSEO();
  }

  log('SEO Loader 已加载，等待页面初始化...', 'info');

})();