import { Link } from "react-router-dom";
import gfi_logo from "../../public/GFI-Logo.png";
import gfi_feature from "../../public/gfi-feature.png";
import manager from "../../public/manager.png";
import carousel_1 from "../../public/carousel_1.png";
import carousel_2 from "../../public/carousel_2.png";
import full_width_1 from "../../public/full_width_1.jpg";
import logo from "../../public/logo-white.png";
import facebook from "../../public/facebook.jpg";
import twitter from "../../public/twitter.jpg";
import linkedin from "../../public/linkedin.jpg";
import insta from "../../public/insta.jpg";
import logo_white from "../../public/logo-white.png";
import logo_dark from "../../public/logo-dark.png";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const Content = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState("transparent");
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [carousel_1, carousel_2];
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg("white");
      } else {
        setNavbarBg("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : 0));
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 1 ? images.length - 2 : 1));
  };

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1, { amount: 0.5, once: true });
  const isInView2 = useInView(ref2, { amount: 0.5, once: true });
  const isInView3 = useInView(ref3, { amount: 0.5, once: true });

  return (
    <>
      <div className="min-h-screen bg-white font-poppins font-medium ">
        <nav
          className={`fixed flex items-center justify-end w-full h-24 pr-5 z-30 ${
            navbarBg === "white" ? "bg-white shadow-md" : "bg-transparent"
          } transition-all duration-700`}
        >
          {navbarBg === "white" ? (
            <img src={logo_dark} alt="logo" className="absolute left-5 top-7" />
          ) : (
            <img
              src={logo_white}
              alt="logo"
              className="absolute left-5 top-7"
            />
          )}

          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img src="" />

            <svg
              className="w-8 h-8 text-[#e0bc75]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <ul
            className={`absolute md:static top-24 left-0 w-full md:w-auto  md:bg-transparent shadow-md md:shadow-none p-5 md:p-0 flex flex-col md:flex-row gap-5 md:gap-10 items-center transition-all duration-500 ${
              menuOpen ? "block" : "hidden"
            } md:flex ${
              navbarBg === "white"
                ? "text-[#333] bg-white"
                : "text-white bg-[#333]"
            }`}
          >
            <Link className="hover:text-[#e0bc75] hover:scale-110 transition-all duration-300 ">
              HOME
            </Link>
            <Link className="hover:text-[#e0bc75] hover:scale-110 transition-all duration-300 ">
              SERVICES
            </Link>
            <Link className="hover:text-[#e0bc75] hover:scale-110 transition-all duration-300 ">
              ABOUT
            </Link>
            <Link className="hover:text-[#e0bc75] hover:scale-110 transition-all duration-300 ">
              CONTACT
            </Link>
            <Link className="hover:text-[#e0bc75] hover:scale-110 transition-all duration-300 ">
              FAQ
            </Link>
          </ul>
        </nav>

        <section className="flex justify-center h-[650px] text-white ">
          <div className="absolute h-[600px] w-screen bg-black bg-opacity-50 z-10"></div>
          <div className="absolute h-[600px] w-screen bg-content-bg bg-cover"></div>
          <motion.div
            className="flex flex-col justify-center items-center text-center pt-24 gap-3 z-20 "
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <img src={gfi_logo} alt="gfi-logo" className="w-80" />
            <p className="max-w-96 text-xl font-normal font-nunito tracking-wide ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              unde doloribus repellat aliquam sint dolores, fuga inventore.
              Iure, quae rerum delectus inventore quas odit reiciendis ipsam
              dolorem quo harum recusanda.{" "}
            </p>
          </motion.div>
        </section>

        <section className="flex flex-col items-center justify-center gap-10 px-10 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-20">
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-[#333] text-5xl font-essonnes font-medium italic ">
                A Unique Selling Point
              </h1>
              <h2 className="text-[#adadad] text-2xl font-medium">
                COMMERCIAL REAL ESTATE WEBSITE DESIGN
              </h2>
              <p className="text-[#333]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                sequi aliquid, est, cum exercitationem.
              </p>
              <ul className="text-[#333]">
                <li>Website Design</li>
                <li>Website Development</li>
              </ul>
            </motion.div>
            <motion.img
              src={gfi_feature}
              alt="gfi"
              className="h-80 xl:w-[650px] lg:w-[500px]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            />
          </div>
          <div className="text-[#333] flex md:flex-row flex-col xl:gap-60 lg:gap-32 md:gap-7 gap-20 items-center justify-center mt-10">
            <motion.div
              className="flex flex-col gap-3 items-center justify-center "
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 3 }}
            >
              <p className="text-[#e0bc75] text-5xl">+300%</p>
              <p className="text-[#333] lg:text-lg">WEBSITE TRAFFIC</p>
            </motion.div>
            <div className="flex flex-col gap-3 items-center justify-center ">
              <p className="text-[#e0bc75] text-5xl">+46%</p>
              <p className="text-[#333] lg:text-lg">RETURN WEBSITE VISITORS</p>
            </div>
            <motion.div
              className="flex flex-col gap-3 items-center justify-center "
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 3 }}
            >
              <p className="text-[#e0bc75] text-5xl">7+ Years</p>
              <p className="text-[#333] lg:text-lg">
                AS A TRUSTED AGENCY PARTNER
              </p>
            </motion.div>
          </div>
        </section>

        <motion.section
          ref={ref1}
          className="flex flex-col items-center justify-center gap-10 w-full mt-32  py-10 bg-[#f8f8f8]"
          initial={{ opacity: 0 }}
          animate={isInView1 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 3 }}
        >
          <h1 className="font-essonnes font-medium text-3xl text-[#333] italic">
            Description
          </h1>
          <p className=" lg:w-[800px] md:w-[700px] w-[370px] leading-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            animi quisquam voluptatem eius? Assumenda eum odit iste iure ullam,
            explicabo, placeat suscipit officiis vero porro ipsa, nisi esse.
            Itaque, similique! Sed tincidunt pretium dui, at fringilla sem
            porttitor pharetra. Nam eleifend eu eros non fringilla. In nulla
            velit, venenatis eu odio sit amet, suscipit pellentesque velit. Sed
            et pellentesque metus, et venenatis orci.
          </p>
          <div className="flex items-center justify-center gap-3">
            <img src={manager} />
            <div className="flex flex-col items-center justify-center">
              {" "}
              <p>HALEY MARSH</p>
              <p>
                Marketing Manager & Executive Assistant to COO, GFI Partners
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          ref={ref2}
          className="flex flex-col items-center justify-start gap-10 mt-10 py-10"
          initial={{ opacity: 0 }}
          animate={isInView2 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 3 }}
        >
          <h1 className="text-[#e0bc75] md:text-5xl text-4xl font-extralight px-8">
            A NEW WEBSITE FOR A UNIQUE BUSINESS
          </h1>
          <div className="flex flex-col items-start justify-start gap-3 lg:w-[800px] w-full px-10">
            <h2 className="flex flex-col gap-3 self-start font-essonnes font-medium text-3xl text-[#333] italic">
              Challenge
            </h2>
            <p className="font-nunito text-[#333] font-normal text-xl self-center ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
              animi quisquam voluptatem eius? Assumenda eum odit iste iure
              ullam, explicabo, placeat suscipit officiis vero porro ipsa, nisi
              esse. Itaque, similique! Sed tincidunt pretium dui, at fringilla
              sem porttitor pharetra.
            </p>
          </div>
        </motion.section>

        <section className="carousel relative flex flex-col items-center justify-center mt-12 w-full xl:h-[602px] lg:h-[460px] md:h-[400px] h-96 ">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`carousel-${index + 1}`}
              className={`absolute transition-opacity duration-1000 ease-in-out w-[950px] xl:h-[600px] lg:h-[450px] md:h-96 h-80  ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </section>

        <div className="carousel-control flex items-center justify-center gap-4">
          <button
            onClick={() => handleNext()}
            className={`w-4 h-4 rounded-full ${
              currentIndex === images.length - 2 ? "bg-[#c7a757]" : "bg-[#999]"
            }`}
          ></button>
          <button
            onClick={() => handlePrev()}
            className={`w-4 h-4 rounded-full ${
              currentIndex === images.length - 1 ? "bg-[#c7a757]" : "bg-[#999]"
            }`}
          ></button>
        </div>

        <section className="flex flex-col items-center justify-start gap-10 mt-36 py-10">
          <img
            src={full_width_1}
            alt="full-width"
            className="h-96 w-screen object-cover object-top "
          />
          <motion.div
            ref={ref3}
            className="flex flex-col items-start justify-start gap-3 lg:w-1/2 w-full px-10"
            initial={{ opacity: 0 }}
            animate={isInView3 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 3 }}
          >
            <h1 className="text-[#e0bc75] md:text-5xl text-4xl font-extralight">
              A SLEEK AND INTERACTIVE WEBSITE EXPERIENCE
            </h1>
            <div className="flex flex-col gap-3 items-start justify-center">
              <h2 className="flex flex-col gap-3 items-start justify-center mt-8 font-essonnes font-medium text-3xl text-[#333] italic">
                Solution
              </h2>
              <p className="font-nunito text-[#333] font-normal text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corporis animi quisquam voluptatem eius? Assumenda eum odit iste
                iure ullam, explicabo, placeat suscipit officiis vero porro
                ipsa, nisi esse. Itaque, similique! Sed tincidunt pretium dui,
                at fringilla sem porttitor pharetra.
              </p>
            </div>
          </motion.div>
        </section>

        <section className="bg-contact-band bg-cover text-white w-full h-[320px] flex flex-col justify-center items-center gap-5 p-8">
          <h2 className="md:text-lg font-light tracking-widest">
            READY TO IGNITE YOUR MARKETING STRATEGY?
          </h2>
          <h1 className="lg:text-xl text-2xl font-normal px-4 w-96 lg:w-auto tracking-widest">
            Let’s discuss how we can help your brand get results.
          </h1>
          <button className="text-black font-medium bg-[#e0bc75] border-[#e0bc75] border-2 w-80 md:w-96 h-10 hover:bg-transparent hover:text-[#e0bc75] transition-all duration-300 ">
            SCHEDULE YOUR FREE CONSULTATION
          </button>
        </section>

        <footer className="bg-[#333] text-[#aaa] flex flex-col md:flex-row items-start justify-center lg:gap-20 gap-10 2xl:p-16 lg:p-8 md:p-2 p-8 w-screen lg:h-96 md:h-[500px]">
          <div className="flex flex-col gap-5">
            <img src={logo} alt="logo" className="h-8 w-40" />
            <p className="address ">
              Mediaboom 73 Church St Guilford, CT 06437
            </p>
            <Link className="font-light text-lg hover:text-[#757575] transition-all duration-200">
              info@mediaboom.com
            </Link>
          </div>

          <div className="flex flex-col items-start justify-center gap-3 text-white">
            <h1 className="text-white font-light tracking-widest">FOLLOW US</h1>
            <ul className="social-media flex items-center justify-center gap-4">
              <li>
                <Link>
                  <img src={facebook} alt="facebook-link" />
                </Link>
              </li>
              <li>
                <Link>
                  <img src={twitter} alt="twitter-link" />
                </Link>
              </li>
              <li>
                <Link>
                  <img src={linkedin} alt="linkedin-link" />
                </Link>
              </li>
              <li>
                <Link>
                  <img src={insta} alt="insta-link" />
                </Link>
              </li>
            </ul>
            <div className="join-team mt-10">
              <h1 className="text-white font-light tracking-widest">
                JOIN THE TEAM
              </h1>
              <Link className=" font-light text-lg text-[#999] hover:text-[#757575] transition-all duration-200 after:content-['»']">
                View open positions{" "}
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center text-[#999]">
            <h1 className="text-white font-light tracking-widest">
              OUR SERVICES
            </h1>
            <ul className="flex flex-col">
              <Link className="font-light text-lg hover:text-[#757575] transition-all duration-200">
                Website Design & Development
              </Link>
              <Link className="font-light text-lg hover:text-[#757575] transition-all duration-200">
                SEO & Content Marketing
              </Link>
              <Link className="font-light text-lg hover:text-[#757575] transition-all duration-200">
                Digital Paid Advertising
              </Link>
              <Link className="font-light text-lg hover:text-[#757575] transition-all duration-200">
                Email Marketing
              </Link>
              <Link className="font-light text-lg hover:text-[#757575] transition-all duration-200">
                Sitemap
              </Link>
            </ul>
          </div>

          <div className="flex flex-col items-start justify-center gap-4 text-white">
            <h1 className="text-white font-light tracking-widest">
              LATEST NEWS
            </h1>
            <Link className="text-white font-light tracking-wide">
              Hospitality Marketing Trends – 22 Ways to Lead in 2025
            </Link>
            <Link className="text-white font-light tracking-wide">
              Hospitality Website Design – 50 Stunning Examples
            </Link>
            <Link className="font-light text-lg text-[#999] tracking-wider hover:text-[#757575] transition-all duration-200">
              Privacy Policy
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Content;
