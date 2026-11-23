export const categories = [
  { id: 'coffee', label: '커피', icon: '☕' },
  { id: 'drink', label: '음료', icon: '🍹' },
  { id: 'dessert', label: '디저트', icon: '🍰' },
];

export const menus = [
  { id: 1, category: 'coffee', name: '아메리카노', price: 4000, description: '고소한 원두의 깔끔한 여운', icon: '☕' },
  { id: 2, category: 'coffee', name: '바닐라 라테', price: 5500, description: '바닐라 향과 부드러운 우유', icon: '🥛' },
  { id: 3, category: 'coffee', name: '크림 모카', price: 6000, description: '진한 초콜릿 위에 올린 우유 크림', icon: '🍫', isNew: true },
  { id: 4, category: 'drink', name: '레몬 에이드', price: 5200, description: '생레몬과 탄산의 산뜻한 조합', icon: '🍋' },
  { id: 5, category: 'drink', name: '말차 라테', price: 5800, description: '쌉쌀한 말차에 더한 우유', icon: '🍵' },
  { id: 6, category: 'drink', name: '복숭아 아이스티', price: 4800, description: '달콤한 복숭아 향을 담은 홍차', icon: '🍑', soldOut: true },
  { id: 7, category: 'dessert', name: '딸기 쇼트케이크', price: 6900, description: '생딸기와 생크림을 채운 케이크', icon: '🍰', isNew: true },
  { id: 8, category: 'dessert', name: '버터 휘낭시에', price: 3200, description: '겉은 바삭하고 속은 촉촉한 구움과자', icon: '🥮' },
];
