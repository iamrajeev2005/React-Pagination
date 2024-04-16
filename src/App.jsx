import React, { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const getData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setProducts(data.products);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleClick = (selectedPage) => {
    if(selectedPage >= 1 && selectedPage <=products.length / 10 && selectedPage !== page)
    setPage(selectedPage);
  }
  return (
    <div className="p-4 ">
      <div className="flex items-start flex-wrap">
        {products.slice(page * 12 - 12, page * 12).map((item, index) => {
          return (
            <div key={index} className="m-4">
              <Card data={item} />;
            </div>
          );
        })}
      </div>
      {products.length > 0 && (
        <div className="text-center text-2xl">
          <span
            onClick={() => handleClick(page - 1)}
            className="text-4xl cursor-pointer"
          >
            ◀
          </span>
          {[...Array(products.length / 10)].map((_, i) => {
            return (
              <span
                onClick={() => handleClick(i + 1)}
                className={`${
                  page === i + 1 ? "bg-blue-200" : ""
                } border cursor-pointer border-zinc-600 px-4 py-2`}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            onClick={() => handleClick(page + 1)}
            className="text-4xl cursor-pointer"
          >
            ▶
          </span>
        </div>
      )}
    </div>
  );
}

export default App;
