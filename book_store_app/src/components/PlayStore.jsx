import React from "react";
import Board from "../assets/banner.jpg";
import PlaySoreImg from "../assets/play_store.png";

const BannerImg = {
  backgroundImage: `url(${Board})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
};

function PlayStore() {
  return (
    <div
      className="bg-gray-100 dark:bg-gray-800 text-white py-10 mt-10 "
      style={BannerImg}
    >
      <div className="container">
        <div className="space-y-5 max-w-xl mx-auto">
          <h1
            data-aos="slide-up"
            className="text-2xl text-center sm:text-4xl font-semibold"
          >
            Read Books at your Finger👈
          </h1>
          <div
            data-aos="slide-up"
            className="flex flex-wrap justify-center items-center gap-4"
          >
            <a
              href="https://play.google.com/store/games?hl=en_IN&gl=US"
              target="_blank"
            >
              <img
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                src={PlaySoreImg}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayStore;
