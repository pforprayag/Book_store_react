import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ order, handleOrder }) => {
  return (
    <>
      {order && (
        <div
          onClick={handleOrder}
          className="fixed top-0 left-0 w-screen h-screen backdrop-blur-sm z-20 background-blur-sm bg-black/50 "
        >
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 dark:text-white duration-200 p-4 rounded-md shadow-md w-[300px] ">
            {/* header */}
            <div className="flex items-center justify-between">
              <h1>Order book name</h1>
              <div>
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={() => handleOrder(false)}
                />
              </div>
            </div>
            {/* Form body */}
            <div className="mt-4">
              <input
                type="text"
                placeholder="Book name"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4 "
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4 "
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4 "
              />
              <div className="flex justify-center ">
                <button className="h-10 w-[120px] bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full mt-2 hover:scale-105 duration-200">
                  Order now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
