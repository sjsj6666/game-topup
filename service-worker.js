// service-worker.js - PWA 离线缓存

const CACHE_NAME = 'gametopup-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/game-detail.html',
  '/cart.html',
  '/payment.html',
  '/orders.html',
  '/profile.html',
  '/chat.html',
  '/admin.html',
  '/config.js',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// 安装时缓存
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('📦 缓存资源');
      return cache.addAll(ASSETS);
    }).catch(err => console.error('缓存失败:', err))
  );
  self.skipWaiting();
});

// 激活时清理旧缓存
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME)
            .map((key) => {
              console.log('🗑️ 删除旧缓存:', key);
              return caches.delete(key);
            })
      );
    }).then(() => self.clients.claim())
  );
});

// 拦截请求
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request).catch(err => {
        console.error('请求失败:', err);
      });
    })
  );
});

// 后台同步
self.addEventListener('sync', (e) => {
  if (e.tag === 'sync-orders') {
    console.log('🔄 同步订单');
  }
});

// 推送通知
self.addEventListener('push', (e) => {
  const data = e.data ? e.data.json() : {};
  const title = data.title || 'GameTopUp';
  const options = {
    body: data.body || '您有新的消息',
    icon: '/icon-192.png',
    badge: '/icon-192.png'
  };
  e.waitUntil(self.registration.showNotification(title, options));
});