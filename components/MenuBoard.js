'use client';

import { useState } from 'react';
import MenuCard from './MenuCard';

export default function MenuBoard({ menus, categories }) {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('all');
  const [likes, setLikes] = useState({});
  const [order, setOrder] = useState(null);

  const results = menus
    .filter((menu) => category === 'all' || menu.category === category)
    .filter((menu) => menu.name.toLowerCase().includes(keyword.trim().toLowerCase()));
  const sections = category === 'all' ? categories : categories.filter((item) => item.id === category);

  function likeMenu(id) {
    setLikes((previous) => ({ ...previous, [id]: (previous[id] ?? 0) + 1 }));
  }

  function orderMenu(menu) {
    setOrder((previous) => ({ name: menu.name, number: (previous?.number ?? 0) + 1 }));
  }

  return (
    <section id="menu" className="menu" aria-labelledby="menu-title">
      <h2 id="menu-title">카페 메뉴</h2>
      <div className="filters">
        <div className="tabs" role="group" aria-label="메뉴 카테고리">
          {[{ id: 'all', label: '전체' }, ...categories].map((item) => (
            <button type="button" key={item.id} aria-pressed={category === item.id}
              onClick={() => setCategory(item.id)}>
              {item.label}
            </button>
          ))}
        </div>
        <label className="search">
          <span>메뉴 검색</span>
          <input type="search" value={keyword} onChange={(event) => setKeyword(event.target.value)}
            placeholder="예: 아메리카노" />
        </label>
      </div>
      <p className="result" role="status">검색 결과 {results.length}개</p>
      <div className="order-feedback" role="status">
        {order && <p>시연 주문 {order.number}번 · {order.name} 주문을 확인했어요.</p>}
      </div>
      {results.length === 0 ? (
        <p className="empty">조건에 맞는 메뉴가 없습니다.</p>
      ) : sections.map(({ id, label, icon }) => {
        const items = results.filter((menu) => menu.category === id);
        return items.length > 0 && (
          <section key={id} className="category">
            <h3>{icon} {label}</h3>
            <div className="grid">
              {items.map((menu) => (
                <MenuCard key={menu.id} {...menu} likes={likes[menu.id]}
                  onLike={() => likeMenu(menu.id)} onOrder={() => orderMenu(menu)} />
              ))}
            </div>
          </section>
        );
      })}
    </section>
  );
}
