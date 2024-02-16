import React from "react";
import Book1 from "../assets/do.jpg";
import Book2 from "../assets/get.jpg";
import Book3 from "../assets/make.jpg";
import { FaStar } from "react-icons/fa";

const BooksData = [
  {
    id: 1,
    img: Book1,
    rating: "4.5",
    title: "Do Epic Shit",
    description:
      "Do Epic Shit is a book by Ankur Warikoo where he writes about all the failures and successes he had in his life. He also reflects on the lessons he has learned the hard way to help us be aware of those situations. You will find valuable lessons in this book that you can use in your life.",
  },

  {
    id: 2,
    img: Book2,
    rating: "3.5",
    title: "Get Epic Shit Done",
    description:
      "Get Epic Shit Done is a book by Ankur Warikoo where he writes about all the failures and successes he had in his life. He also reflects on the lessons he has learned the hard way to help us be aware of those situations. You will find valuable lessons in this book that you can use in your life.",
  },

  {
    id: 3,
    img: Book3,
    rating: "4.5",
    title: "Make Epic Shit Money",
    description:
      "Make Epic Shit Money is a book by Ankur Warikoo where he writes about all the failures and successes he had in his life. He also reflects on the lessons he has learned the hard way to help us be aware of those situations. You will find valuable lessons in this book that you can use in your life.",
  },

  {
    id: 4,
    img: Book1,
    rating: "4.5",
    title: "Do Epic Shit",
    description:
      "Do Epic Shit is a book by Ankur Warikoo where he writes about all the failures and successes he had in his life. He also reflects on the lessons he has learned the hard way to help us be aware of those situations. You will find valuable lessons in this book that you can use in your life.",
  },

  {
    id: 5,
    img: Book2,
    rating: "3.5",
    title: "Get Epic Shit Done",
    description:
      "Get Epic Shit Done is a book by Ankur Warikoo where he writes about all the failures and successes he had in his life. He also reflects on the lessons he has learned the hard way to help us be aware of those situations. You will find valuable lessons in this book that you can use in your life.",
  },
];
function AllBooks() {
  return (
    <>
      <div className="py-10">
        <div className="container py-10 placeholder-gray-100">
          {/* Header */}
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
          {/* card */}
          <div data-aos="slide-up">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-4">
              {BooksData.map((book) => (
                <div className="space-y-3">
                  <img
                    src={book.img}
                    className="h-[220px] w-[150px] object-cover rounded-md"
                    alt=""
                  />
                  <div>
                    <h2 className="font-semibold">{book.title}</h2>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span>{book.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button className="bg-primary to-secondary text-white px-4 py-2 rounded-full mt-10 hover:scale-105 duration-200 flex items-center justify-center hover:text-primary hover:bg-white">
                View all books
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllBooks;
