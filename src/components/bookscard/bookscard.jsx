const BooksCard = ({ image, title, autor }) => {
  return (
    <div className="book__box">
      <img src={image} alt=""/>
      <p className="book__title">{title}</p>
      <p className="book__autor">{autor}</p>
      <p className="book__result">4.1 • 3400 ta fikrlar</p>
    </div>
  );
};

export default BooksCard;
