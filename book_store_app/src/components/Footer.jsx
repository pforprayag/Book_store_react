import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "#",
  },

  {
    title: "About",
    link: "/about",
  },

  {
    title: "Contact",
    link: "/contact",
  },

  {
    title: "Blog",
    link: "/blog",
  },
];

function Footer() {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 py-5 ">
          {/* company details */}
          <div className="py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 ">
              Books Store
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              molestiae, laudantium sed accusamus at quasi sint reiciendis
              deserunt, et possimus temporibusdolores.
            </p>
            <br />
            {/* social links */}
            <div className="flex items-center gap-3 mt-3 ">
              <FaLocationArrow />
              <p>Sector-27, Gandhinagar, Gujarat</p>
            </div>

            <div className="flex items-center gap-3 mt-3 ">
              <FaMobileAlt />
              <p>+91 8758808843</p>
            </div>
            <div className="flex items-center gap-3 mt-3 ">
              <a
                href="https://www.instagram.com/accounts/login/"
                target="_blank"
              >
                <FaInstagram />
              </a>

              <a href="https://www.facebook.com/" target="_blank">
                <FaFacebook />
              </a>

              <a
                href="https://www.linkedin.com/in/prayag-jadav-75222b246/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          {/* Links Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold sm:text-left text-justify mb-3 ">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold sm:text-left text-justify mb-3 ">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold sm:text-left text-justify mb-3 ">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* copyright section */}
        <div className="border-t-2 border-gray-300/50">
          <p className="text-center py-10">
            Copyright &copy; 2024. All rights reserved || made with ♥ by @p_for_prayag
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
