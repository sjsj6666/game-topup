/**
 * GameTopUp - 多语言词典
 * ======================
 * 所有翻译都放在这里
 * 添加新语言只需扩展这个对象
 */

const TRANSLATIONS = {
  // 🔹 中文（默认）
  'zh-CN': {
    // 通用
    'app.name': 'GameTopUp',
    'app.tagline': '安全快捷的游戏充值平台',
    'common.loading': '加载中...',
    'common.error': '加载失败，请重试',
    'common.retry': '重试',
    'common.back': '返回',
    'common.confirm': '确认',
    'common.cancel': '取消',
    'common.save': '保存',
    'common.delete': '删除',
    'common.edit': '编辑',
    'common.search': '搜索...',
    'common.cart': '购物车',
    'common.orders': '我的订单',
    'common.profile': '个人中心',
    'common.login': '登录',
    'common.logout': '退出登录',
    'common.language': '语言',
    
    // 导航
    'nav.home': '首页',
    'nav.categories': '分类',
    'nav.activities': '活动',
    'nav.profile': '我的',
    
    // 首页
    'home.search.placeholder': '搜索游戏...',
    'home.category.all': '全部',
    'home.category.hot': '🔥 热门',
    'home.category.openworld': '开放世界',
    'home.category.moba': 'MOBA',
    'home.category.rpg': '角色扮演',
    'home.category.action': '动作竞技',
    'home.empty': '暂无匹配的游戏',
    'home.install.title': '安装 GameTopUp',
    'home.install.desc': '添加到桌面，快速访问',
    'home.install.btn': '安装',
    
    // 游戏详情
    'detail.loading': '加载游戏信息...',
    'detail.packages.title': '💰 充值套餐',
    'detail.quantity.label': '购买数量',
    'detail.quantity.note': '注：部分套餐有购买数量限制',
    'detail.total.label': '应付总额',
    'detail.payment.title': '支付方式',
    'detail.payment.alipay': '支付宝',
    'detail.payment.wechat': '微信支付',
    'detail.payment.paypal': 'PayPal',
    'detail.reviews.title': '⭐ 用户评价',
    'detail.btn.cart': '加入购物车',
    'detail.btn.buy': '立即购买',
    'detail.feature.official': '官方渠道 安全靠谱',
    'detail.feature.fast': '秒速到账 无需等待',
    'detail.feature.support': '7×24 小时 客服支持',
    
    // 购物车
    'cart.title': '购物车',
    'cart.empty.title': '购物车是空的',
    'cart.empty.desc': '快去挑选喜欢的游戏充值吧～',
    'cart.empty.btn': '去逛逛',
    'cart.clear': '清空',
    'cart.checkout': '去结算',
    'cart.total.label': '应付总额',
    
    // 支付
    'payment.title': '确认支付',
    'payment.order.title': '📦 订单信息',
    'payment.order.id': '订单编号',
    'payment.order.item': '商品名称',
    'payment.order.package': '套餐内容',
    'payment.order.quantity': '购买数量',
    'payment.order.original': '原价',
    'payment.order.discount': '优惠折扣',
    'payment.coupon.title': '🎫 优惠券',
    'payment.coupon.placeholder': '输入优惠码',
    'payment.coupon.apply': '使用',
    'payment.coupon.hint': '💡 可用优惠码：NEW2026 (9 折) | VIP50 (减¥50) | FIRST (减¥10)',
    'payment.account.title': '👤 充值账号',
    'payment.account.label': '游戏账号 / UID',
    'payment.account.placeholder': '请输入您的游戏账号',
    'payment.account.confirm': '确认账号',
    'payment.account.hint': '⚠️ 请仔细核对，充值后无法修改',
    'payment.security': '🔐 安全支付保障：您的支付信息已加密，本平台不会存储您的支付密码',
    'payment.btn': '立即支付',
    'payment.success.title': '支付成功！',
    'payment.success.desc': '预计 1-5 分钟到账',
    'payment.success.btn': '查看订单',
    
    // 订单
    'orders.title': '我的订单',
    'orders.filter.all': '全部',
    'orders.filter.completed': '已完成',
    'orders.filter.pending': '待支付',
    'orders.filter.cancelled': '已取消',
    'orders.empty.title': '暂无订单',
    'orders.empty.desc': '去选购喜欢的游戏充值吧～',
    'orders.empty.btn': '去逛逛',
    'orders.status.completed': '已完成',
    'orders.status.pending': '待支付',
    'orders.status.cancelled': '已取消',
    'orders.detail.title': '订单详情',
    'orders.detail.id': '订单编号',
    'orders.detail.status': '订单状态',
    'orders.detail.time': '下单时间',
    'orders.detail.account': '充值账号',
    'orders.detail.payment': '支付方式',
    'orders.detail.coupon': '优惠券',
    'orders.detail.discount': '优惠金额',
    'orders.detail.total': '订单总额',
    'orders.detail.items': '商品明细',
    'orders.btn.cancel': '取消订单',
    'orders.btn.pay': '去支付',
    
    // 个人中心
    'profile.title': '个人中心',
    'profile.notLoggedIn': '未登录',
    'profile.loggedIn.desc': '登录后享受专属服务',
    'profile.login.btn': '立即登录',
    'profile.logout.btn': '退出登录',
    'profile.stats.orders': '总订单',
    'profile.stats.spent': '累计充值',
    'profile.stats.saved': '节省金额',
    'profile.menu.orders': '我的订单',
    'profile.menu.support': '客服支持',
    'profile.menu.settings': '设置',
    'profile.login.email': '请输入邮箱',
    'profile.login.password': '请输入密码',
    'profile.login.forgot': '忘记密码？',
    
    // 客服
    'chat.title': '客服支持',
    'chat.online.title': '7×24 小时为您服务',
    'chat.online.desc': '平均响应时间 < 1 分钟',
    'chat.btn.chat': '开始聊天',
    'chat.btn.copy': '复制联系方式',
    'chat.faq.title': '❓ 常见问题',
    'chat.faq.q1': '充值多久到账？',
    'chat.faq.a1': '正常情况下，充值后 1-5 分钟内到账。如遇延迟，请联系客服查询订单状态。',
    'chat.faq.q2': '充值失败怎么办？',
    'chat.faq.a2': '如充值失败，款项会在 24 小时内原路退回。您也可以联系客服重新下单或申请退款。',
    'chat.faq.q3': '如何申请退款？',
    'chat.faq.a3': '未使用的充值订单可在 7 天内申请退款。请在订单页面点击"取消订单"或联系客服处理。',
    'chat.faq.q4': '优惠券如何使用？',
    'chat.faq.a4': '在支付页面输入优惠码，点击"使用"即可。注意查看优惠券的使用条件和有效期。',
    'chat.faq.q5': '账号安全吗？',
    'chat.faq.a5': '我们采用官方正规渠道充值，不会索要您的账号密码。只需提供游戏 UID/账号即可。',
    'chat.contact.title': '📞 联系方式',
    'chat.contact.qq': 'QQ 客服',
    'chat.contact.wechat': '微信客服',
    'chat.contact.email': '电子邮箱',
    
    // 后台管理
    'admin.title': 'GameTopUp 云端后台',
    'admin.login.title': '🔐 后台管理系统',
    'admin.login.email': '邮箱',
    'admin.login.password': '密码',
    'admin.login.btn': '登录',
    'admin.login.hint': '默认：admin@gametopup.com / admin123',
    'admin.logout': '退出',
    'admin.tab.games': '🎮 游戏管理',
    'admin.tab.seo': '🔍 SEO 管理',
    'admin.tab.orders': '📋 订单管理',
    'admin.stats.games': '总游戏数',
    'admin.stats.orders': '总订单数',
    'admin.stats.seo': 'SEO 页面数',
    'admin.games.title': '游戏列表',
    'admin.games.add': '+ 添加游戏',
    'admin.games.id': 'ID',
    'admin.games.name': '游戏名称',
    'admin.games.price': '价格',
    'admin.games.seoTitle': 'SEO 标题',
    'admin.games.status': '状态',
    'admin.games.action': '操作',
    'admin.games.active': '启用',
    'admin.games.inactive': '禁用',
    'admin.seo.title': '页面 SEO 管理',
    'admin.seo.desc': '编辑每个页面的标题、描述和关键词，优化搜索引擎排名',
    'admin.seo.path': '页面路径',
    'admin.seo.pageTitle': '标题',
    'admin.seo.pageDesc': '描述',
    'admin.seo.edit': '编辑',
    'admin.seo.modal.title': '🔍 编辑 SEO 信息',
    'admin.seo.modal.path': '页面路径',
    'admin.seo.modal.title': '页面标题 (Title)',
    'admin.seo.modal.title.hint': '(建议 50-60 字符)',
    'admin.seo.modal.desc': '页面描述 (Description)',
    'admin.seo.modal.desc.hint': '(建议 150-160 字符)',
    'admin.seo.modal.keywords': '关键词 (Keywords)',
    'admin.seo.modal.keywords.hint': '用逗号分隔，如：游戏充值，原神，王者荣耀',
    'admin.seo.modal.ogTitle': 'Open Graph 标题',
    'admin.seo.modal.ogDesc': 'Open Graph 描述',
    'admin.seo.modal.preview': '🔍 Google 搜索结果预览',
    'admin.seo.modal.previewTitle': '标题',
    'admin.seo.modal.previewDesc': '描述',
    'admin.seo.modal.save': '💾 保存 SEO 设置',
    'admin.orders.title': '订单列表',
    'admin.orders.id': '订单号',
    'admin.orders.game': '游戏',
    'admin.orders.amount': '金额',
    'admin.orders.status': '状态',
    'admin.orders.action': '操作',
    'admin.orders.complete': '完成',
    'admin.orders.cancel': '取消',
    
    // 通知
    'notify.cart.added': '✅ 已添加到购物车',
    'notify.cart.select': '⚠️ 请先选择充值套餐',
    'notify.payment.success': '🎉 支付成功！',
    'notify.payment.failed': '❌ 支付失败',
    'notify.seo.saved': '✅ SEO 设置已保存',
    'notify.login.success': '✅ 登录成功！',
    'notify.login.failed': '❌ 登录失败',
    'notify.logout': '👋 已退出登录',
    
    // SEO 默认值
    'seo.home.title': 'GameTopUp - 安全快捷的游戏充值平台',
    'seo.home.desc': 'GameTopUp 提供原神、王者荣耀、崩坏星穹铁道等热门游戏充值服务，安全快捷，优惠多多！支持支付宝、微信支付，秒速到账。',
    'seo.home.keywords': '游戏充值，原神充值，王者荣耀充值，星穹铁道充值，便宜充值，安全充值',
    'seo.detail.title': '游戏详情 - GameTopUp',
    'seo.detail.desc': '查看游戏详情和充值套餐，选择最适合你的充值方案。',
    'seo.cart.title': '购物车 - GameTopUp',
    'seo.cart.desc': '查看你的购物车，管理已选择的游戏充值套餐。',
    'seo.payment.title': '支付确认 - GameTopUp',
    'seo.payment.desc': '安全支付，支持多种支付方式。',
    'seo.orders.title': '我的订单 - GameTopUp',
    'seo.orders.desc': '查看你的订单历史和状态。',
    'seo.profile.title': '个人中心 - GameTopUp',
    'seo.profile.desc': '管理你的账户信息和设置。'
  },
  
  // 🔹 英文
  'en-US': {
    // General
    'app.name': 'GameTopUp',
    'app.tagline': 'Safe & Fast Game Top-Up Platform',
    'common.loading': 'Loading...',
    'common.error': 'Failed to load, please retry',
    'common.retry': 'Retry',
    'common.back': 'Back',
    'common.confirm': 'Confirm',
    'common.cancel': 'Cancel',
    'common.save': 'Save',
    'common.delete': 'Delete',
    'common.edit': 'Edit',
    'common.search': 'Search...',
    'common.cart': 'Cart',
    'common.orders': 'My Orders',
    'common.profile': 'Profile',
    'common.login': 'Login',
    'common.logout': 'Logout',
    'common.language': 'Language',
    
    // Navigation
    'nav.home': 'Home',
    'nav.categories': 'Categories',
    'nav.activities': 'Events',
    'nav.profile': 'Profile',
    
    // Home
    'home.search.placeholder': 'Search games...',
    'home.category.all': 'All',
    'home.category.hot': '🔥 Hot',
    'home.category.openworld': 'Open World',
    'home.category.moba': 'MOBA',
    'home.category.rpg': 'RPG',
    'home.category.action': 'Action',
    'home.empty': 'No games found',
    'home.install.title': 'Install GameTopUp',
    'home.install.desc': 'Add to home screen for quick access',
    'home.install.btn': 'Install',
    
    // Game Detail
    'detail.loading': 'Loading game info...',
    'detail.packages.title': '💰 Top-Up Packages',
    'detail.quantity.label': 'Quantity',
    'detail.quantity.note': 'Note: Some packages have purchase limits',
    'detail.total.label': 'Total',
    'detail.payment.title': 'Payment Method',
    'detail.payment.alipay': 'Alipay',
    'detail.payment.wechat': 'WeChat Pay',
    'detail.payment.paypal': 'PayPal',
    'detail.reviews.title': '⭐ Reviews',
    'detail.btn.cart': 'Add to Cart',
    'detail.btn.buy': 'Buy Now',
    'detail.feature.official': 'Official Channel, Safe & Reliable',
    'detail.feature.fast': 'Instant Delivery, No Waiting',
    'detail.feature.support': '24/7 Customer Support',
    
    // Cart
    'cart.title': 'Shopping Cart',
    'cart.empty.title': 'Your cart is empty',
    'cart.empty.desc': 'Start adding game top-ups!',
    'cart.empty.btn': 'Browse Games',
    'cart.clear': 'Clear',
    'cart.checkout': 'Checkout',
    'cart.total.label': 'Total',
    
    // Payment
    'payment.title': 'Confirm Payment',
    'payment.order.title': '📦 Order Info',
    'payment.order.id': 'Order ID',
    'payment.order.item': 'Item',
    'payment.order.package': 'Package',
    'payment.order.quantity': 'Quantity',
    'payment.order.original': 'Original Price',
    'payment.order.discount': 'Discount',
    'payment.coupon.title': '🎫 Coupon',
    'payment.coupon.placeholder': 'Enter coupon code',
    'payment.coupon.apply': 'Apply',
    'payment.coupon.hint': '💡 Available: NEW2026 (10% off) | VIP50 ($50 off) | FIRST ($10 off)',
    'payment.account.title': '👤 Game Account',
    'payment.account.label': 'Game Account / UID',
    'payment.account.placeholder': 'Enter your game account',
    'payment.account.confirm': 'Confirm Account',
    'payment.account.hint': '⚠️ Please verify carefully, cannot be changed after top-up',
    'payment.security': '🔐 Secure Payment: Your payment info is encrypted. We never store your payment password.',
    'payment.btn': 'Pay Now',
    'payment.success.title': 'Payment Successful!',
    'payment.success.desc': 'Credits will be delivered within 1-5 minutes',
    'payment.success.btn': 'View Order',
    
    // Orders
    'orders.title': 'My Orders',
    'orders.filter.all': 'All',
    'orders.filter.completed': 'Completed',
    'orders.filter.pending': 'Pending',
    'orders.filter.cancelled': 'Cancelled',
    'orders.empty.title': 'No orders yet',
    'orders.empty.desc': 'Start top-up your favorite games!',
    'orders.empty.btn': 'Browse Games',
    'orders.status.completed': 'Completed',
    'orders.status.pending': 'Pending',
    'orders.status.cancelled': 'Cancelled',
    'orders.detail.title': 'Order Details',
    'orders.detail.id': 'Order ID',
    'orders.detail.status': 'Status',
    'orders.detail.time': 'Order Time',
    'orders.detail.account': 'Game Account',
    'orders.detail.payment': 'Payment Method',
    'orders.detail.coupon': 'Coupon',
    'orders.detail.discount': 'Discount',
    'orders.detail.total': 'Total',
    'orders.detail.items': 'Items',
    'orders.btn.cancel': 'Cancel Order',
    'orders.btn.pay': 'Pay Now',
    
    // Profile
    'profile.title': 'My Profile',
    'profile.notLoggedIn': 'Not logged in',
    'profile.loggedIn.desc': 'Login to enjoy exclusive features',
    'profile.login.btn': 'Login Now',
    'profile.logout.btn': 'Logout',
    'profile.stats.orders': 'Total Orders',
    'profile.stats.spent': 'Total Spent',
    'profile.stats.saved': 'Total Saved',
    'profile.menu.orders': 'My Orders',
    'profile.menu.support': 'Support',
    'profile.menu.settings': 'Settings',
    'profile.login.email': 'Enter email',
    'profile.login.password': 'Enter password',
    'profile.login.forgot': 'Forgot password?',
    
    // Chat/Support
    'chat.title': 'Customer Support',
    'chat.online.title': '24/7 Support Available',
    'chat.online.desc': 'Average response time < 1 minute',
    'chat.btn.chat': 'Start Chat',
    'chat.btn.copy': 'Copy Contact',
    'chat.faq.title': '❓ FAQ',
    'chat.faq.q1': 'How long does top-up take?',
    'chat.faq.a1': 'Normally, credits are delivered within 1-5 minutes. If delayed, contact support to check your order.',
    'chat.faq.q2': 'What if payment fails?',
    'chat.faq.a2': 'If payment fails, funds will be refunded within 24 hours. You can also contact support to reorder or request refund.',
    'chat.faq.q3': 'How to request a refund?',
    'chat.faq.a3': 'Unused orders can be refunded within 7 days. Click "Cancel Order" on the order page or contact support.',
    'chat.faq.q4': 'How to use coupons?',
    'chat.faq.a4': 'Enter coupon code on the payment page and click "Apply". Check coupon terms and expiry date.',
    'chat.faq.q5': 'Is my account safe?',
    'chat.faq.a5': 'We use official channels for top-ups. We never ask for your account password. Only game UID/account is needed.',
    'chat.contact.title': '📞 Contact Us',
    'chat.contact.qq': 'QQ Support',
    'chat.contact.wechat': 'WeChat Support',
    'chat.contact.email': 'Email',
    
    // Admin
    'admin.title': 'GameTopUp Admin Panel',
    'admin.login.title': '🔐 Admin Login',
    'admin.login.email': 'Email',
    'admin.login.password': 'Password',
    'admin.login.btn': 'Login',
    'admin.login.hint': 'Default: admin@gametopup.com / admin123',
    'admin.logout': 'Logout',
    'admin.tab.games': '🎮 Games',
    'admin.tab.seo': '🔍 SEO',
    'admin.tab.orders': '📋 Orders',
    'admin.stats.games': 'Total Games',
    'admin.stats.orders': 'Total Orders',
    'admin.stats.seo': 'SEO Pages',
    'admin.games.title': 'Games List',
    'admin.games.add': '+ Add Game',
    'admin.games.id': 'ID',
    'admin.games.name': 'Game Name',
    'admin.games.price': 'Price',
    'admin.games.seoTitle': 'SEO Title',
    'admin.games.status': 'Status',
    'admin.games.action': 'Actions',
    'admin.games.active': 'Active',
    'admin.games.inactive': 'Inactive',
    'admin.seo.title': 'Page SEO Management',
    'admin.seo.desc': 'Edit title, description and keywords for each page to optimize search rankings',
    'admin.seo.path': 'Page Path',
    'admin.seo.pageTitle': 'Title',
    'admin.seo.pageDesc': 'Description',
    'admin.seo.edit': 'Edit',
    'admin.seo.modal.title': '🔍 Edit SEO Info',
    'admin.seo.modal.path': 'Page Path',
    'admin.seo.modal.title': 'Page Title',
    'admin.seo.modal.title.hint': '(Recommended 50-60 characters)',
    'admin.seo.modal.desc': 'Page Description',
    'admin.seo.modal.desc.hint': '(Recommended 150-160 characters)',
    'admin.seo.modal.keywords': 'Keywords',
    'admin.seo.modal.keywords.hint': 'Comma separated, e.g., game top-up, genshin, honor of kings',
    'admin.seo.modal.ogTitle': 'Open Graph Title',
    'admin.seo.modal.ogDesc': 'Open Graph Description',
    'admin.seo.modal.preview': '🔍 Google Search Preview',
    'admin.seo.modal.previewTitle': 'Title',
    'admin.seo.modal.previewDesc': 'Description',
    'admin.seo.modal.save': '💾 Save SEO Settings',
    'admin.orders.title': 'Orders List',
    'admin.orders.id': 'Order ID',
    'admin.orders.game': 'Game',
    'admin.orders.amount': 'Amount',
    'admin.orders.status': 'Status',
    'admin.orders.action': 'Actions',
    'admin.orders.complete': 'Complete',
    'admin.orders.cancel': 'Cancel',
    
    // Notifications
    'notify.cart.added': '✅ Added to cart',
    'notify.cart.select': '⚠️ Please select a package first',
    'notify.payment.success': '🎉 Payment successful!',
    'notify.payment.failed': '❌ Payment failed',
    'notify.seo.saved': '✅ SEO settings saved',
    'notify.login.success': '✅ Login successful!',
    'notify.login.failed': '❌ Login failed',
    'notify.logout': '👋 Logged out',
    
    // SEO Defaults
    'seo.home.title': 'GameTopUp - Safe & Fast Game Top-Up Platform',
    'seo.home.desc': 'GameTopUp offers top-up services for Genshin Impact, Honor of Kings, Honkai Star Rail and more. Safe, fast, with great deals! Support Alipay, WeChat Pay, instant delivery.',
    'seo.home.keywords': 'game top-up, genshin impact top-up, honor of kings top-up, cheap game credits, safe top-up',
    'seo.detail.title': 'Game Details - GameTopUp',
    'seo.detail.desc': 'View game details and top-up packages, choose the best option for you.',
    'seo.cart.title': 'Shopping Cart - GameTopUp',
    'seo.cart.desc': 'View your cart and manage selected game top-up packages.',
    'seo.payment.title': 'Confirm Payment - GameTopUp',
    'seo.payment.desc': 'Secure payment with multiple payment methods supported.',
    'seo.orders.title': 'My Orders - GameTopUp',
    'seo.orders.desc': 'View your order history and status.',
    'seo.profile.title': 'My Profile - GameTopUp',
    'seo.profile.desc': 'Manage your account info and settings.'
  }
};

// 导出翻译对象
window.TRANSLATIONS = TRANSLATIONS;

// 获取当前语言（从 localStorage 或浏览器设置）
function getCurrentLang() {
  const saved = localStorage.getItem('language');
  if (saved && TRANSLATIONS[saved]) return saved;
  
  const browserLang = navigator.language || navigator.userLanguage;
  if (TRANSLATIONS[browserLang]) return browserLang;
  if (browserLang.startsWith('zh')) return 'zh-CN';
  if (browserLang.startsWith('en')) return 'en-US';
  
  return 'zh-CN'; // 默认中文
}

// 获取翻译文本
function t(key, lang = null) {
  const language = lang || getCurrentLang();
  const value = TRANSLATIONS[language]?.[key];
  if (value === undefined) {
    // 回退到中文
    return TRANSLATIONS['zh-CN']?.[key] || key;
  }
  return value;
}

// 导出函数
window.getCurrentLang = getCurrentLang;
window.t = t;

// 自动应用当前语言到页面
function applyLanguage(lang = null) {
  const language = lang || getCurrentLang();
  
  // 更新 <html> 标签的 lang 属性（SEO 友好）
  document.documentElement.lang = language;
  
  // 更新所有带 data-i18n 属性的元素
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const value = t(key, language);
    
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = value;
    } else {
      el.textContent = value;
    }
  });
  
  // 更新 title
  const titleKey = document.querySelector('title')?.dataset.i18n;
  if (titleKey) {
    document.title = t(titleKey, language);
  }
  
  // 更新 meta description（SEO）
  const metaDesc = document.querySelector('meta[name="description"]');
  const descKey = metaDesc?.dataset.i18n;
  if (descKey && metaDesc) {
    metaDesc.content = t(descKey, language);
  }
  
  console.log(`🌍 Language applied: ${language}`);
}

// 切换语言
function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) {
    console.warn(`Language "${lang}" not supported`);
    return;
  }
  
  localStorage.setItem('language', lang);
  applyLanguage(lang);
  
  // 触发语言切换事件（供其他组件监听）
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

// 导出
window.applyLanguage = applyLanguage;
window.setLanguage = setLanguage;

// 页面加载时自动应用语言
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => applyLanguage());
} else {
  applyLanguage();
}