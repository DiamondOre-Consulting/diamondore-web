import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Midas from "../assets/MidasLogo.png";
import DOC from "../assets/DOC-2.png";
import MutualFund from "../assets/MutualFundImg.png";

const ConsultingPage = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_siyau4x', 'template_w4pkfl2', form.current, '2ZjvnCotDVgMl5Q8s')
        .then((result) => {
            console.log(result.text);
            console.log("message sent");
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div>
      <section
        className="bg-bgColor bg-cover bg-fixed bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(${MutualFund})`,
        }}
      >
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-left sm:text-left">
            <div className="flex justify-between">
              <img className="h-[8rem]" src={Midas} alt="" />
              <img className="h-[8rem]" src={DOC} alt="" />
            </div>
            <h1 className="text-3xl text-gray-300 font-extrabold sm:text-5xl">
              One stop to invest in
              <strong className="block font-extrabold text-indigo-800">
                Mutual Funds
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed text-gray-200">
              An online platform to invest in Mutual Funds through Single Login
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Our Offerings
            </h2>

            {/* <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">We always welcom</p> */}
          </div>
          <div class="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
            <div class="flex gap-4 md:gap-6">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>

              <div>
                <h3 class="mb-2 text-lg font-semibold md:text-xl">
                  Debt Instruments
                </h3>
                <p class="mb-2 text-gray-500">
                  Viz., RBI Taxable Bonds, Tax Free Bonds, NCD (Non Convertible
                  Debentures), Corporate Fixed Deposits
                </p>
              </div>
            </div>

            <div class="flex gap-4 md:gap-6">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>

              <div>
                <h3 class="mb-2 text-lg font-semibold md:text-xl">
                  Mutual Funds
                </h3>
                <p class="mb-2 text-gray-500">
                  Help with investing in the top Mutual Funds
                </p>
              </div>
            </div>

            <div class="flex gap-4 md:gap-6">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>

              <div>
                <h3 class="mb-2 text-lg font-semibold md:text-xl">
                  PMS (Portfolio Management Services)
                </h3>
                <p class="mb-2 text-gray-500">
                  Personalized assistance for the management of your portfolio.
                </p>
              </div>
            </div>

            <div class="flex gap-4 md:gap-6">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>

              <div>
                <h3 class="mb-2 text-lg font-semibold md:text-xl">
                  Goal Based Financial Planning
                </h3>
                <p class="mb-2 text-gray-500">
                  Viz. Child Education Planning, Marriage Planning, Retirement
                  Planning
                </p>
              </div>
            </div>

            <div class="flex gap-4 md:gap-6">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>

              <div>
                <h3 class="mb-2 text-lg font-semibold md:text-xl">Insurance</h3>
                <p class="mb-2 text-gray-500">
                  New age ULIP, Life Insurance, Health Insurance, General
                  Insurance
                </p>
              </div>
            </div>

            {/* <div class="flex gap-4 md:gap-6">
        <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-semibold md:text-xl">Dark Mode</h3>
          <p class="mb-2 text-gray-500">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
          <a href="#" class="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</a>
        </div>
      </div> */}
          </div>
        </div>
      </div>
      {/* Contact Start */}
      <section className="bg-gray-50">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-800">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form ref={form} className="space-y-8" onSubmit={sendEmail}>
          <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-newBlue dark:text-newBlue"
              >
                Your Full Name
              </label>
              <input
                type="text"
                name="user_name"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-newBlue dark:text-newBlue"
              >
                Your email
              </label>
              <input
                type="email"
                name="user_email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@yourdomain.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-newBlue dark:text-newBlue"
              >
                Subject
              </label>
              <input
                type="text"
                name="user_subject"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-bgColor rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-newBlue dark:text-newBlue"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="user_message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-teal-600 sm:w-fit hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
      {/* Contact End */}
    </div>
  );
};

export default ConsultingPage;
