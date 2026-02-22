// game-data.js - 游戏数据库 + 路由加载函数 + 优惠券系统

const gameDatabase = {
  'genshin': {
    id: 'genshin',
    name: '原神 Genshin Impact',
    description: '在提瓦特大陆的奇幻世界中展开冒险。探索广阔的世界，组建强大的角色队伍，体验史诗级的剧情故事。',
    category: ['开放世界', '角色扮演', '多平台'],
    rating: 4.8,
    downloads: '200 万+',
    heroColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    packages: [
      { id: 1, name: "60 创世结晶", description: "首充双倍，性价比之选", price: 6, originalPrice: 6, discount: 0, recommend: false },
      { id: 2, name: "300 创世结晶", description: "月卡补充，日常必备", price: 30, originalPrice: 30, discount: 0, recommend: false },
      { id: 3, name: "980 创世结晶", description: "角色抽取，心愿单首选", price: 98, originalPrice: 98, discount: 0, recommend: true },
      { id: 4, name: "1980 创世结晶", description: "武器锻造，进阶之选", price: 198, originalPrice: 198, discount: 0, recommend: true },
      { id: 5, name: "3280 创世结晶", description: "大额充值，最受欢迎", price: 328, originalPrice: 328, discount: 0, recommend: true },
      { id: 6, name: "6480 创世结晶", description: "限时特惠，送 1600 原石", price: 648, originalPrice: 864, discount: 216, badge: "25% OFF", recommend: true }
    ],
    reviews: [
      { name: "旅行者 A", date: "2026-02-18", rating: 5, content: "充值秒到账，还有额外原石赠送，太划算了！已经第二次购买了，服务很稳定。" },
      { name: "刻晴真爱党", date: "2026-02-15", rating: 5, content: "为了抽刻晴的专武，买了 6480 套餐，真的比官方充值便宜很多，支持！" },
      { name: "新手玩家 B", date: "2026-02-10", rating: 4, content: "第一次在第三方平台充值，还有点担心，但体验很好，5 分钟就到账了。" },
      { name: "资深玩家 C", date: "2026-02-05", rating: 5, content: "长期在这里充值，比其他平台靠谱，客服回复也及时，推荐给朋友了。" }
    ]
  },
  'honor': {
    id: 'honor',
    name: '王者荣耀 Honor of Kings',
    description: '5V5 团队公平竞技手游，国民级 MOBA 游戏。随时开黑，10 分钟享受极致竞技体验。',
    category: ['MOBA', '5V5', '竞技'],
    rating: 4.7,
    downloads: '500 万+',
    heroColor: 'linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)',
    packages: [
      { id: 1, name: "10 点券", description: "小额试水，新手体验", price: 1, originalPrice: 1, discount: 0 },
      { id: 2, name: "60 点券", description: "购买皮肤碎片", price: 6, originalPrice: 6, discount: 0 },
      { id: 3, name: "300 点券", description: "购买英雄或皮肤", price: 30, originalPrice: 30, discount: 0, recommend: true },
      { id: 4, name: "680 点券", description: "史诗皮肤首选", price: 68, originalPrice: 68, discount: 0, recommend: true },
      { id: 5, name: "1280 点券", description: "传说皮肤购买", price: 128, originalPrice: 128, discount: 0, recommend: true },
      { id: 6, name: "1980 点券", description: "新春特惠礼包", price: 198, originalPrice: 248, discount: 50, badge: "20% OFF", recommend: true }
    ],
    reviews: [
      { name: "打野高手", date: "2026-02-19", rating: 5, content: "充值很快，秒到账，趁着新年活动买了好几个皮肤，太棒了！" },
      { name: "中路法王", date: "2026-02-17", rating: 5, content: "比官方充值便宜，而且到账速度一样快，已经推荐给队友了。" },
      { name: "辅助玩家", date: "2026-02-14", rating: 4, content: "第一次用有点紧张，但客服很耐心，充值成功还有确认短信，很安心。" }
    ]
  },
  'starrail': {
    id: 'starrail',
    name: '崩坏：星穹铁道',
    description: '银河冒险策略游戏，登上星穹列车，穿梭万象世界，开启新的冒险之旅。',
    category: ['策略', '回合制', '科幻'],
    rating: 4.9,
    downloads: '150 万+',
    heroColor: 'linear-gradient(135deg, #834d9b 0%, #d04ed6 100%)',
    packages: [
      { id: 1, name: "60 星琼", description: "小额补充", price: 6, originalPrice: 6 },
      { id: 2, name: "300 星琼", description: "日常抽卡", price: 30, originalPrice: 30 },
      { id: 3, name: "980 星琼", description: "角色保底", price: 98, originalPrice: 98, recommend: true },
      { id: 4, name: "1980 星琼", description: "武器专武", price: 198, originalPrice: 198, recommend: true },
      { id: 5, name: "3280 星琼", description: "大额充值", price: 328, originalPrice: 328, recommend: true },
      { id: 6, name: "6480 星琼", description: "新年特惠", price: 648, originalPrice: 810, discount: 162, badge: "20% OFF", recommend: true }
    ],
    reviews: [
      { name: "开拓者 A", date: "2026-02-18", rating: 5, content: "星穹铁道充值首选平台，到账快，客服专业！" }
    ]
  },
  'naraka': {
    id: 'naraka',
    name: '永劫无间 Naraka: Bladepoint',
    description: '多人动作竞技游戏，武侠大逃杀，拼刀博弈，秀出你的操作！',
    category: ['动作', '大逃杀', 'PC/主机'],
    rating: 4.6,
    downloads: '80 万+',
    heroColor: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    packages: [
      { id: 1, name: "60 金块", price: 6, originalPrice: 6 },
      { id: 2, name: "300 金块", price: 30, originalPrice: 30 },
      { id: 3, name: "980 金块", price: 98, originalPrice: 98, recommend: true },
      { id: 4, name: "1980 金块", price: 198, originalPrice: 198, recommend: true },
      { id: 5, name: "3280 金块", price: 328, originalPrice: 328, recommend: true },
      { id: 6, name: "6480 金块", price: 648, originalPrice: 810, discount: 162, badge: "20% OFF", recommend: true }
    ]
  },
  'mingchao': {
    id: 'mingchao',
    name: '鸣潮 Wuthering Waves',
    description: '开放世界动作 RPG，高自由度战斗，探索后启示录世界。',
    category: ['开放世界', '动作', '多平台'],
    rating: 4.5,
    downloads: '60 万+',
    heroColor: 'linear-gradient(135deg, #0f0c29 0%, #302b63 100%)',
    packages: [
      { id: 1, name: "60 星声", price: 6, originalPrice: 6 },
      { id: 2, name: "300 星声", price: 30, originalPrice: 30 },
      { id: 3, name: "980 星声", price: 98, originalPrice: 98, recommend: true },
      { id: 4, name: "1980 星声", price: 198, originalPrice: 198, recommend: true },
      { id: 5, name: "3280 星声", price: 328, originalPrice: 328, recommend: true },
      { id: 6, name: "6480 星声", price: 648, originalPrice: 810, discount: 162, badge: "20% OFF", recommend: true }
    ]
  }
};

// 优惠券数据库
window.couponDatabase = {
  'NEW2026': { type: 'percent', value: 0.9, desc: '新年 9 折优惠', minOrder: 0 },
  'VIP50': { type: 'fixed', value: 50, desc: '立减¥50', minOrder: 100 },
  'FIRST': { type: 'fixed', value: 10, desc: '首单减¥10', minOrder: 30 },
  'SAVE20': { type: 'percent', value: 0.8, desc: '8 折特惠', minOrder: 200 }
};

function getGameIdFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('game') || 'genshin';
}

function loadGameData(gameId) {
  const gameData = gameDatabase[gameId] || gameDatabase['genshin'];
  document.title = `${gameData.name} - GameTopUp`;
  const hero = document.querySelector('.game-hero');
  if (hero) hero.style.background = gameData.heroColor;
  const titleEl = document.querySelector('.game-hero-title');
  const descEl = document.querySelector('.game-description');
  if (titleEl) titleEl.textContent = gameData.name;
  if (descEl) descEl.textContent = gameData.description;
  const tagsContainer = document.querySelector('.game-tags');
  if (tagsContainer && gameData.category) {
    tagsContainer.innerHTML = '';
    gameData.category.forEach(cat => {
      const tag = document.createElement('span');
      tag.className = 'game-tag';
      tag.textContent = cat;
      tagsContainer.appendChild(tag);
    });
    const hotTag = document.createElement('span');
    hotTag.className = 'game-tag hot';
    hotTag.textContent = '🔥 新年特惠';
    tagsContainer.insertBefore(hotTag, tagsContainer.firstChild);
  }
  window.gamePackages = gameData.packages;
  window.userReviews = gameData.reviews || [
    { name: "默认用户", date: "2026-02-01", rating: 5, content: "很好的充值服务，推荐使用！" }
  ];
  console.log(`🎮 已加载游戏数据：${gameData.name}`);
  return gameData;
}

if (window.location.pathname.includes('game-detail.html')) {
  document.addEventListener('DOMContentLoaded', () => {
    const gameId = getGameIdFromURL();
    loadGameData(gameId);
  });
}

window.gameData = {
  database: gameDatabase,
  getCurrentGame: getGameIdFromURL,
  loadGame: loadGameData
};