import React, { useState } from "react";
import Book1 from "../assets/do.jpg";
import Book2 from "../assets/get.jpg";
import Book3 from "../assets/make.jpg";
import Bg from "../assets/blue-pattern.png";

function Hero({ handleOrder }) {
  const ImgList = [
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
      title: "Make Epic Money",
      description:
        "Make Epic Shit Money is a book by Ankur Warikoo where he writes about all the failures and successes he had in his life. He also reflects on the lessons he has learned the hard way to help us be aware of those situations. You will find valuable lessons in this book that you can use in your life.",
    },
  ];
  const [imgId, setImgId] = useState(Book1);
  const [title, setTitle] = useState("Do Epic Shit");
  const [description, setDescription] = useState(
    "Do Epic Shit is a book by Ankur Warikoo where he writes about all the failures and successes he had in his life. He also reflects on the lessons he has learned the hard way to help us be aware of those situations. You will find valuable lessons in this book that you can use in your life."
  );
  const bgImg = {
    backgroundImage: `url(${Bg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
  };

  return (
    <div
      className=" min-h-[580px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-100"
      style={bgImg}
    >
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Text content section */}
          <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 ">
            <h1
              data-aos="zoom-out"
              data-aos-duration="500"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold"
            >
              {title}
              <p className="bg-clip-text text-transparent bg-gradient-to-b from-primary text-right text-sm to-secondary">
                By Ankur Warikoo
              </p>
            </h1>

            <p
              data-aos="slid-up"
              data-aos-duration="500"
              data-aos-delay="100"
              className="text-sm"
            >
              {description}
            </p>
            <button
              onClick={handleOrder}
              data-aos="zoom-in"
              className="h-10 w-[120px] bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200"
            >
              Order now
            </button>
          </div>
          {/* Image Section */}
          <div className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
            <div className="h-[400px] w-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
              <img
                data-aos="zoom-in"
                data-aos-once="true"
                src={imgId}
                className="w-[400px] h-[400px] sm:w-[450px] sm:h-[450px] sm:scale-125 object-contain mx-auto"
                alt=""
              />
            </div>
            {/* Other image */}
            <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1  rounded-full ">
              {ImgList.map((img) => (
                <img
                  data-aos="zoom-in"
                  data-aos-once="true"
                  key={img.id}
                  src={img.img}
                  className="max-w-[100px] h-[100px] hover:scale-110 object-contain inline-block duration-200"
                  alt=""
                  onClick={() => {
                    setImgId(
                      img.id === 1
                        ? Book1
                        : img.id === 2
                        ? Book2
                        : img.id === 3
                        ? Book3
                        : Book1
                    );

                    setTitle(img.title);
                    setDescription(img.description);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
