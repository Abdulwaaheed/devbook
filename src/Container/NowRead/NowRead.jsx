import "./NowRead.scss";
import NowReadImg from "../../assets/images/icons/now__read.svg";
import NowReadBook from "../../Components/NowReadBook";

function NowRead() {
  return (
    <div className="container">
      <div className="now__read">
        <div className="now__read-title">
          <h2>Hozir o’qilmoqda...</h2>
          <img src={NowReadImg} alt="" />
        </div>
        <NowReadBook progress={80} />
        <NowReadBook progress={26} />
        <NowReadBook progress={75} />
        <NowReadBook progress={46} />
        <button className="see__all">Barchasini ko’rish</button>
      </div>
    </div>
  );
}

export default NowRead;
