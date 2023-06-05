import HomebagImg from "../assets/img/home__bagImg.png";
import HomeImg from "../assets/img/home__img.png";
import HomeImgTwo from "../assets/img/home__img2.svg";
import Books from "../Container/Header/books/books";

const Home = () => {
  return (
    <div>
      <div className="mt-5">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div className="carousel-item active">
              <img src={HomebagImg} class="d-block w-100" alt="" />
            </div>
            <div class="carousel-item">
              <img src={HomebagImg} class="d-block w-100" alt="" />
            </div>
            <div className="carousel-item">
              <img src={HomebagImg} class="d-block w-100" alt="" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="home__block">
        <img className="home__img" src={HomeImg} alt="" />
        <div className="home__wrapper">
          <form>
            <input
              type="search"
              placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
            />
            <button>Izlash</button>
          </form>
        </div>
      </div>
      <div className="home__wrap">
        <img src={HomeImgTwo} alt="" />
        <div className="home__content">
          <p>Temuriylar davri </p>
          <p>Jadid adabiyoti </p>
          <p>Sovet davri </p>
          <p>Mustaqillik davri</p>
        </div>
        <div className="book__block">
          <Books/>
        </div>
      </div>
    </div>
  );
};

export default Home;
