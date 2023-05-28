import "./UserCard.scss";
import Profile from "../../assets/images/profile.png";
function UserCard() {
  return (
    <div className="user__card">
      <div className="container">
        <div className="user__card-wrap">
          <div className="user__card-img">
            <img src={Profile} alt="" />
            <h2>Oltin kitobxon</h2>
            <h2 className="user__card-read">186 ta kitob o’qigan</h2>
          </div>
          <div className="user__card-info">
            <h1 className="user__card-name">Farruxbek Abdullayev</h1>
            <h2 className="birth">
              Tavallud: <span>February 08, 1999</span>
            </h2>
            <h2 className="addres">
              Manzili: <span>Jizzax</span>
            </h2>
            <h2 className="bio">
              Bio: <span>Graphic designer and Developer</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
