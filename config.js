/**
 * GameTopUp - 云端配置
 * ======================
 * 所有 Supabase 配置都放在这里
 * 修改后所有页面自动生效
 * 
 * ⚠️ 重要：确保 URL 末尾没有空格！
 */

// ==================== Supabase 项目配置 ====================
const SUPABASE_CONFIG = {
  // 🔴 关键：URL 末尾绝对不能有空格！
  url: 'https://jknlpipftzamdlxybgcc.supabase.co',
  
  // 🔴 替换为你的 anon key（从 Supabase Settings → API 复制）
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprbmxwaXBmdHphbWRseHliZ2NjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE2NTUxMjIsImV4cCI6MjA4NzIzMTEyMn0.vIyGtEs9H52S8Hwu7hisyN4WzylVLKLyKljODKLb8_M',
  
  // 🔴 管理员密钥（仅后台使用，不要暴露在前端页面）
  serviceKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprbmxwaXBmdHphbWRseHliZ2NjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTY1NTEyMiwiZXhwIjoyMDg3MjMxMTIyfQ.X7_cVT197HDS0Ycpihu9e8uz2dz5c36KxLIpd8B2i9s'
};

// ==================== 网站配置 ====================
const SITE_CONFIG = {
  name: 'GameTopUp',
  version: '2.0.0',
  currency: '¥',
  defaultLanguage: 'zh-CN',
  baseUrl: window.location.origin
};

// ==================== 功能开关 ====================
const FEATURES = {
  enablePWA: true,              // 启用 PWA 安装
  enableDarkMode: true,         // 启用深色模式
  enableNotifications: true,    // 启用通知
  enableCoupons: true,          // 启用优惠券
  enableMultiLanguage: true,    // 启用多语言
  enableSEO: true               // 启用 SEO 管理
};

// ==================== 🔧 修复：只创建一次 Supabase 客户端 ====================
// 避免 "Multiple GoTrueClient instances detected" 警告
if (typeof window.supabaseClient === 'undefined') {
  // 确保 supabase CDN 已加载
  if (typeof supabase !== 'undefined' && typeof supabase.createClient === 'function') {
    const { createClient } = supabase;
    
    // 创建匿名客户端（用于前端页面）
    window.supabaseClient = createClient(
      SUPABASE_CONFIG.url.trim(),      // 🔴 使用 trim() 确保无空格
      SUPABASE_CONFIG.anonKey.trim()
    );
    
    // 创建管理员客户端（仅用于后台，需要 service role）
    window.supabaseAdmin = createClient(
      SUPABASE_CONFIG.url.trim(),
      SUPABASE_CONFIG.serviceKey.trim()
    );
    
    console.log('✅ Supabase 客户端已初始化');
  } else {
    console.warn('⚠️ Supabase CDN 未加载，请检查 <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2">');
  }
}

// ==================== 导出到全局 ====================
// 所有页面都使用这个单例实例
window.db = window.supabaseClient;
window.adminDb = window.supabaseAdmin;
window.SUPABASE_CONFIG = SUPABASE_CONFIG;
window.SITE_CONFIG = SITE_CONFIG;
window.FEATURES = FEATURES;

// ==================== 开发环境检测 ====================
window.isDevelopment = window.location.hostname === 'localhost' || 
                       window.location.hostname === '127.0.0.1' ||
                       window.location.hostname === '0.0.0.0';

// ==================== 打印配置信息（仅开发环境） ====================
if (window.isDevelopment) {
  console.log('🔧 开发模式 - 配置信息:');
  console.log('  - Supabase URL:', SUPABASE_CONFIG.url);
  console.log('  - 网站版本:', SITE_CONFIG.version);
  console.log('  - 功能开关:', FEATURES);
  console.log('  - 默认语言:', SITE_CONFIG.defaultLanguage);
}

// ==================== 配置检查函数 ====================
function checkConfig() {
  let isValid = true;
  
  // 检查 URL
  if (!SUPABASE_CONFIG.url || SUPABASE_CONFIG.url.includes('YOUR_PROJECT_ID') || SUPABASE_CONFIG.url.trim() === '') {
    console.warn('⚠️ 请配置 config.js 中的 Supabase URL');
    isValid = false;
  }
  
  // 检查 anonKey
  if (!SUPABASE_CONFIG.anonKey || SUPABASE_CONFIG.anonKey === 'YOUR_ANON_KEY' || SUPABASE_CONFIG.anonKey.trim() === '') {
    console.warn('⚠️ 请配置 config.js 中的 Supabase Anon Key');
    isValid = false;
  }
  
  // 检查 URL 末尾空格（常见错误）
  if (SUPABASE_CONFIG.url !== SUPABASE_CONFIG.url.trim()) {
    console.error('❌ Supabase URL 末尾有空格！请删除末尾的空格');
    isValid = false;
  }
  
  // 检查 db 是否可用
  if (typeof window.db === 'undefined') {
    console.warn('⚠️ Supabase 客户端未初始化，请检查 config.js 加载顺序');
    isValid = false;
  }
  
  if (isValid) {
    console.log('✅ 配置检查通过');
  }
  
  return isValid;
}

// ==================== 页面加载时自动检查 ====================
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', checkConfig);
}

// ==================== 导出函数 ====================
window.checkConfig = checkConfig;

// ==================== 辅助函数 ====================

/**
 * 获取当前语言
 * @returns {string} 语言代码，如 'zh-CN' 或 'en-US'
 */
function getCurrentLang() {
  const saved = localStorage.getItem('language');
  if (saved && window.TRANSLATIONS?.[saved]) return saved;
  
  const browserLang = navigator.language || navigator.userLanguage;
  if (window.TRANSLATIONS?.[browserLang]) return browserLang;
  if (browserLang?.startsWith('zh')) return 'zh-CN';
  if (browserLang?.startsWith('en')) return 'en-US';
  
  return SITE_CONFIG.defaultLanguage;
}

/**
 * 获取翻译文本
 * @param {string} key - 翻译键
 * @param {string} lang - 语言代码（可选）
 * @returns {string} 翻译后的文本
 */
function t(key, lang = null) {
  const language = lang || getCurrentLang();
  const value = window.TRANSLATIONS?.[language]?.[key];
  
  if (value === undefined) {
    // 回退到中文
    return window.TRANSLATIONS?.['zh-CN']?.[key] || key;
  }
  return value;
}

// 导出辅助函数
window.getCurrentLang = getCurrentLang;
window.t = t;

// ==================== 控制台信息 ====================
console.log('🎮 GameTopUp - 游戏充值平台');
console.log('☁️ 云端版 - Supabase 驱动');
console.log('🌍 多语言支持 - 中文/English');
console.log('✨ 祝您游戏愉快，十连双金！');