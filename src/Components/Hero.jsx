import React from "react";
import TempLogo from "/src/assets/NewDiamond-1.png";
import Girl from "/src/assets/girl-leftSVG.svg";
import Boy from "/src/assets/guy-rightSVG.svg";
import Diamond from "/src/assets/man-woman.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <section
        className="bg-bgColor bg-cover bg-fixed bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)), url(${Diamond})`,
        }}
      >
        <div className="mx-auto max-w-screen-2xl px-4 py-25 lg:flex lg:justify-between lg:gap-4 lg:h-screen lg:items-center">
          {/* <img
            src={Girl}
            className="md:block mx-auto max-w-sm bg-transparent drop-shadow-2xl"
            alt=""
          /> */}
          <div className="mx-auto max-w-xl text-center flex flex-col items-center">
            
            <div className="px-8 py-5 bg-gray-200 rounded-lg text-center flex flex-col items-center" >
            <img
              src={TempLogo}
              className="max-w-xl flex justify-center drop-shadow-2xl"
              alt=""
            />
              <h1 className="text-3xl font-extrabold sm:text-5xl text-newBlue drop-shadow-2xl leading-8">
                Diamond Ore <p className='text-xl font-semibold text-newBlue '>Consulting Pvt. Ltd.</p>
              </h1>

              <p className="mt-3 sm:text-xl/relaxed font-semibold text-newBlue drop-shadow-2xl">
                <em>" We mine for talent "</em>
              </p>

              <p className="mt-3 sm:text-2xl/relaxed font-semibold text-gray-500 drop-shadow-2xl">
                Book a free consultation call with our team, <br />
                <span>Now !!!</span>
              </p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                to={'/team'}
                target="_blank"
              >
                For Job Seeker
              </Link>

              {/* <a
                className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                href="/about"
              >
                Learn More
              </a> */}
              <a
                className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="https://meetpro.club/SakshiJha"
                target="_blank"
              >
                For Job Provider
              </a>
            </div>
          </div>
          {/* <img
            src={Boy}
            className="md:block mx-auto max-w-sm bg-transparent drop-shadow-2xl"
            alt=""
          /> */}
        </div>
      </section>
    </div>
  );
};

export default Hero;
