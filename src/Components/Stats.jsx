import React from "react";

const Stats = () => {
  return (
    <div className="bg-bgColor py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        <div className="mb-8 md:mb-12">
          <h2 className="mb-4 text-center text-2xl font-bold text-newBlue md:mb-6 lg:text-3xl">
            Our Work By Numbers
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            In our organization, we currently have a talented team of HRs, maintain a robust candidates database,
            and serve a diverse clientele who are satisfied with our work.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 rounded-lg bg-newBlue p-6 md:grid-cols-4 md:gap-8 md:p-8 drop-shadow-2xl">
          <div className="flex flex-col items-center">
            <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
              50+
            </div>
            <div className="text-sm text-indigo-200 sm:text-base">
              Team Members
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
              50,000+
            </div>
            <div className="text-sm text-indigo-200 sm:text-base">
              Candidates Database
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
              10+
            </div>
            <div className="text-sm text-indigo-200 sm:text-base">
              Trusted Clients
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
              A couple
            </div>
            <div className="text-sm text-center text-indigo-200 sm:text-base">
              Coffee breaks & Unlimited fun
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Stats;
