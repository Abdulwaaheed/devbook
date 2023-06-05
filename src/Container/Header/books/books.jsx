import axios from "axios";
import { useEffect, useState } from "react";
import BooksCard from "../../../components/bookscard/bookscard";

const Books = () => {
  const [dt, setDt] = useState({
    isFatched: false,
    data: {},
    err: false,
  });
  useEffect(() => {
    axios
      .get("http://13.48.147.57/book/book/")
      .then((res) => {
        setDt({
          isFatched: true,
          data: res.data,
          err: false,
        });
      })
      .catch((err) => {
        setDt({
          isFatched: true,
          data: {},
          err: err,
        });
      });
  }, []);
  return (
    <div>
      {dt.isFatched && dt.data ? (
        <div>
          {dt.data.map((val, i) => [
            <BooksCard
              key={i}
              title={val.title}
              autor={val.description}
              image={val.image}
            />,
          ])}
        </div>
      ) : (
        <h1>Loading....</h1>
      )}
    </div>
  );
};

export default Books;
