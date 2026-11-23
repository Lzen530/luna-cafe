const won = new Intl.NumberFormat('ko-KR');

export default function MenuCard({
  name, price, description, icon = '☕', isNew = false, soldOut = false,
  likes = 0, onLike, onOrder,
}) {
  return (
    <article className="card">
      <div className="card-top">
        <span className="menu-icon" aria-hidden="true">{icon}</span>
        {isNew && <span className="badge">NEW</span>}
      </div>
      <h4>{name}</h4>
      <p className="description">{description}</p>
      <p className="price">{won.format(price)}원</p>
      <div className="actions">
        <button className="order" type="button" onClick={onOrder} disabled={soldOut}>
          {soldOut ? '품절' : '주문하기'}
        </button>
        <button className="like" type="button" onClick={onLike} aria-label={`${name} 좋아요 ${likes}개, 누르면 1개 추가`}>
          <span aria-hidden="true">{likes > 0 ? '❤️' : '🤍'}</span> {likes}
        </button>
      </div>
    </article>
  );
}
