import NowReadCardImg from "../assets/images/now-read-card.png";

function NowReadBook({ progress }) {
  console.log({ progress });
  return (
    <div className="now__read-book">
      <img src={NowReadCardImg} alt="" />
      <div className="now__read-content">
        <p>Ikki eshik orasi</p>
        <div className="now__read-progress">
          <div
            className="now__read-progress-inside"
            style={{ width: progress + "%" }}
          ></div>
        </div>
      </div>
      <div className="now__read-update">
        <p>{progress}%</p>
        <button className="update__btn">
          Yangilash <i class="fa-solid fa-rotate-right"></i>
        </button>
      </div>
    </div>
  );
}

export default NowReadBook;
