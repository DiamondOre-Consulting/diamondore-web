import React from "react";
import HomeAboutImg from "/src/assets/elevate.jpg";
import { Link } from "react-router-dom";
//import Background from "/src/assets/about-bg-3.png";

const HomeAbout = () => {
  const bgImg = "https://www.canva.com/design/DAFkqpU8GHE/nSQPWKVC7ijPDQJ_CBxUPA/view?utm_content=DAFkqpU8GHE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink";
  return (
    <section className="overflow-hidden bg-transparent sm:grid sm:grid-cols-2 my-16 py-10" >
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
          {/* <h2 className="text-2xl font-bold text-newBlue md:text-3xl">
            A brief about DiamondOre - Job Consultancy
          </h2> */}

          <p className="text-gray-500 text-2xl md:mt-4 md:block sm:block">
            <span className="text-#3b5998 font-bold">Diamond Ore</span> Consulting Pvt. Ltd. is India's one of the leading job
            consultancy and vendor of choice to clients. We aim at helping the
            job seekers realize their true potential & help clients give the
            talent they deserve. <span className="font-bold text-newBlue">CHOOSE US AND YOU WON'T REGRET!!!</span>  
          </p>

          <div className="mt-5 md:mt-8">
            <Link
              to={"/contact"}
              className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <img
        alt="Student"
        src={HomeAboutImg}
        className="h-50 max-w-xl md:w-sm md:h-25 sm:w-sm sm:h-25 drop-shadow-xl background-transparent"
      />
    </section>
  );
};

export default HomeAbout;
