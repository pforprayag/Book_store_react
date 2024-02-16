import React from "react";
import Book1 from "../assets/do.jpg";
import Book2 from "../assets/get.jpg";
import Book3 from "../assets/make.jpg";
import { FaStar } from "react-icons/fa";

const BooksData = [
  {
    id: 1,
    img: Book1,
    title: "Do Epic Shit",
    description:
      "Do Epic Shit is a book by Ankur Warikoo where he writes about all the failures and successes he had in his life. He also reflects on the lessons he has learned the hard way to help us be aware of those situations. You will find valuable lessons in this book that you can use in your life.",
  },

  {
    id: 2,
    img: Book2,
    title: "Get Epic Shit Done",
    description:
      "Get Epic Shit Done is a book by Ankur Warikoo where he writes about all the failures and successes he had in his life. He also reflects on the lessons he has learned the hard way to help us be aware of those situations. You will find valuable lessons in this book that you can use in your life.",
  },

  {
    id: 3,
    img: Book3,
    title: "Make Epic Shit Money",
    description:
      "Make Epic Shit Money is a book by Ankur Warikoo where he writes about all the failures and successes he had in his life. He also reflects on the lessons he has learned the hard way to help us be aware of those situations. You will find valuable lessons in this book that you can use in your life.",
  },
];

function OtherBooks({ handleOrder }) {
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* Header section */}
          <div
            data-aos="slide-up"
            className="text-center mb-20 max-w-[480px] mx-auto "
          >
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Trending Books
            </p>
            <h1 className="text-3xl font-bold">Best Books</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
              dolore qui temporibus autem recusandae molestiae repellendus
              reiciendis aut, doloribus ab!
            </p>
          </div>
          {/* Card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center p-4 ">
            {BooksData.map((data) => (
              <div
                data-aos="zoom-in"
                className="m-12 rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="flex items-center justify-center h-[100px]">
                  <img
                    className="max-w-[100px] block mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 shadow-md"
                    src={data.img}
                    alt=""
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full flex items-center justify-center">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h1 className="text-xl font-bold flex items-center justify-center">
                    {data.title}
                  </h1>
                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 ">
                    {data.description}
                  </p>

                  <button
                    onClick={handleOrder}
                    className="bg-primary to-secondary text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200 flex items-center justify-center hover:text-primary hover:bg-white"
                  >
                    Order now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default OtherBooks;
