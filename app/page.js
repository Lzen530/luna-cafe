import MenuBoard from '../components/MenuBoard';
import StampCard from '../components/StampCard';
import { categories, menus } from '../data/menus';

export default function Home() {
  const newMenus = menus.filter((menu) => menu.isNew);

  return (
    <>
      <header className="site-header">
        <div className="wrap header-inner">
          <a className="brand" href="#">☾ LUNA CAFÉ</a>
          <nav aria-label="페이지 메뉴">
            <a href="#menu">메뉴</a>
            <a href="#stamps">스탬프</a>
          </nav>
        </div>
      </header>
      <main className="wrap">
        <section className="hero" aria-labelledby="title">
          <div>
            <p className="hero-label">LUNA CAFÉ</p>
            <h1 id="title">루나 카페</h1>
            <p>향긋한 커피 한 잔과 매일 생각나는 디저트.</p>
          </div>
          <div className="hero-moon" aria-hidden="true">☾</div>
        </section>
        {newMenus.length > 0 && (
          <p className="notice"><strong>신메뉴</strong> {newMenus.map((menu) => menu.name).join(' · ')}</p>
        )}
        <MenuBoard menus={menus} categories={categories} />
        <StampCard />
      </main>
      <footer className="wrap footer">루나 카페 · React 실습 프로젝트</footer>
    </>
  );
}
