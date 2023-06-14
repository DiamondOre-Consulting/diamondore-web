import React from "react";
import Bupa from "../assets/agarwal.png";
import SBI from "../assets/sbinew-png.png";
import NewMax from "../assets/logo2.png";
import Aviva from "../assets/Care_health_insurance_logo.png";
import ICICI from "../assets/Kotak_Mahindra_bank_logo.png";
import Canara from "../assets/can-hsbc-new.png";
import IndiaFirst from "../assets/india-png.png";
import ABG from "../assets/ABG-logo.png";
import Kotak from "../assets/kotak-logo-identity.jpg";

const Clients = () => {
  return (
    <div className=" my-14 py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mb-4 flex flex-col items-center md:mb-8 lg:flex-row lg:justify-between">
          <h2 className="mb-2 text-center text-3xl font-bold text-newBlue lg:mb-0 lg:text-3xl">
            Trusted By The best
          </h2>

          <p className="max-w-md text-center text-textColor lg:text-right">
            Many leading companies from various industries and sectors, have worked with us with positive reviews. We are indeed glad to have collaborate to meet their expectations. 
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 rounded-lg md:grid-cols-3 lg:gap-6">
          <div className="flex h-16 items-center justify-center rounded-lg bg-bgColor p-4 text-gray-400 sm:h-32 drop-shadow-xl hover:drop-shadow-2xl">
            <img className="bg-transparent drop-shadow-2xl w-1/4" src={Bupa} alt="" />
          </div>

          <div className="flex h-16 items-center justify-center rounded-lg bg-bgColor p-4 text-gray-400 sm:h-32 drop-shadow-xl hover:drop-shadow-2xl">
            <img className="bg-transparent drop-shadow-2xl w-1/4" src={SBI} alt="" />
          </div>

          {/* <div className="flex h-16 items-center justify-center rounded-lg bg-bgColor p-4 text-gray-400 sm:h-32 drop-shadow-xl hover:drop-shadow-2xl">
            <img className="bg-transparent drop-shadow-2xl w-1/2" src={ICICI} alt="" />
          </div> */}

          <div className="flex h-16 items-center justify-center rounded-lg bg-bgColor p-4 text-gray-400 sm:h-32 drop-shadow-xl hover:drop-shadow-2xl">
            <img className="bg-transparent drop-shadow-2xl w-1/3" src={Aviva} alt="" />
          </div>

          <div className="flex h-16 items-center justify-center rounded-lg bg-bgColor p-4 text-gray-400 sm:h-32 drop-shadow-xl hover:drop-shadow-2xl">
            <img className="bg-transparent drop-shadow-2xl w-1/2" src={NewMax} alt="" />
          </div>

          <div className="flex h-16 items-center justify-center rounded-lg bg-bgColor p-4 text-gray-400 sm:h-32 drop-shadow-xl hover:drop-shadow-2xl">
            <img className="bg-transparent drop-shadow-2xl w-1/2" src={Canara} alt="" />
          </div>

          {/* <div className="flex h-16 items-center justify-center rounded-lg bg-bgColor p-4 text-gray-400 sm:h-32 drop-shadow-xl hover:drop-shadow-2xl">
            <img className="bg-transparent drop-shadow-2xl w-1/2" src={PNB} alt="" />
          </div> */}

          <div className="flex h-16 items-center justify-center rounded-lg bg-bgColor p-4 text-gray-400 sm:h-32 drop-shadow-xl hover:drop-shadow-2xl">
            <img className="bg-transparent drop-shadow-2xl w-1/4" src={IndiaFirst} alt="" />
          </div>

          <div className="flex h-16 items-center justify-center rounded-lg bg-bgColor p-4 text-gray-400 sm:h-32 drop-shadow-xl hover:drop-shadow-2xl">
            <img className="bg-transparent drop-shadow-2xl w-1/2" src={ABG} alt="" />
          </div>

          <div className="flex h-16 items-center justify-center rounded-lg bg-bgColor p-4 text-gray-400 sm:h-32 drop-shadow-xl hover:drop-shadow-2xl">
            <img className="bg-transparent drop-shadow-2xl w-1/3" src={Kotak} alt="" />
          </div>

          <div className="flex h-16 items-center justify-center rounded-lg bg-bgColor p-4 text-gray-400 sm:h-32 drop-shadow-xl hover:drop-shadow-2xl">
            <h3 className="text-xl font-bold text-newBlue">And Many More...</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
