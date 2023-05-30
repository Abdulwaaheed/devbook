import CardBookImg from "../assets/images/card-book.png";

function UserBookCard() {
  return (
    <div className="user__book-card">
      <div className="user__book-img">
        <img src={CardBookImg} alt="" />
      </div>
      <div className="user__card-content">
        <h1>Dunyoning ishlari</h1>
        <h2>O’tkir Hoshimov</h2>
        <p>
          <i class="fa-solid fa-star"></i> 4.3 • 300 ta fikrlar
        </p>
      </div>
    </div>
  );
}

export default UserBookCard;
