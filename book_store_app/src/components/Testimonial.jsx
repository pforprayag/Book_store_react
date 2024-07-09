/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React from "react";
import Slider from "react-slick";
// import Img from "../assets/images.jpg";

const TestData = [
  {
    id: 1,
    name: "Prayag",
    text: "lorem ipsum dolor sit amet lorem in ",
    img: "https://picsum.photos/id/870/200/300?grayscale&blur=2",
  },

  {
    id: 2,
    name: "Mital",
    text: "lorem ipsum dolor sit amet lorem in ",
    img: "https://picsum.photos/200/300.jpg",
  },

  {
    id: 3,
    name: "Angel",
    text: "lorem ipsum dolor sit amet lorem in ",
    img: "https://picsum.photos/200/300.webp",
  },

  {
    id: 4,
    name: "Vivaan",
    text: "lorem ipsum dolor sit amet lorem in ",
    img: "https://picsum.photos/200/300?grayscale",
  },
];
function Testimonial() {
  var setting = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlides: 2,
        },
      },

      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pb-10">
      <div className="container">
        {/* Header */}
        <div
          data-aos="slide-up"
          className="text-center mb-20 max-w-[480px] mx-auto "
        >
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            What our customer says
          </p>
          <h1 className="text-3xl font-bold">Testinomials</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad dolore
            qui temporibus autem recusandae molestiae repellendus reiciendis
            aut, doloribus ab!
          </p>
        </div>

        {/* Card section */}
        <div data-aos="zoom-in">
          <Slider {...setting}>
            {TestData.map((data) => (
              <div className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative ">
                  <div>
                    <img
                      className="rounded-full w-20 h-20 object-cover"
                      src={data.img}
                      alt=""
                    />
                  </div>
                  <div>
                    <div>
                      <p className="text-gray-500 text-sm">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-white ">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="absolute text-black/20 z-10  top-0 right-0 font-serif text-9xl ">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
