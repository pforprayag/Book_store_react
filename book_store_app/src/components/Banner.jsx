import React from "react";
import Library from "../assets/library.jpg";
import { GrSecure } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePayments } from "react-icons/md";
import { MdOutlineLocalOffer } from "react-icons/md";

function Banner() {
  return (
    <div className="">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
          {/* Image section */}
          <div className="pb-10 pl-12 pr-12">
            <img
              data-aos="zoom-in"
              className="w-[450px] h-[450px] block mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
              src={Library}
              alt=""
            />
          </div>
          {/* text content */}
          <div
            data-aos="slide-up"
            className="flex flex-col justify-center gap-4 sm:pt-0 p-6"
          >
            <h1 className="text-3xl sm:text-4xl font-bold">
              Library at your Finger
            </h1>
            <p className="text-sm text-gray-500 tracking-wild leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              totam omnis quibusdam repellat veritatis incidunt nobis autem
              officiis sed nam?
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <GrSecure className="text-4xl text-black h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-green-300 " />
                <p>Quality Books📚</p>
              </div>
              <div className="flex items-center gap-4">
                <TbTruckDelivery className="text-4xl text-black h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-orange-300 " />
                <p>Fast Delivery🚚</p>
              </div>
              <div className="flex items-center gap-4">
                <MdOutlinePayments className="text-4xl text-black h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-yellow-300 " />
                <p>Easy Payments💰</p>
              </div>
              <div className="flex items-center gap-4">
                <MdOutlineLocalOffer className="text-4xl text-black h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-pink-300 " />
                <p>Get offers on books🈹</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
