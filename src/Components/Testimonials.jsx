import React from "react";
import Guy from "../assets/profile.png";
import Woman from "../assets/woman.png";

const Testimonials = () => {
  return (
    <>
      <section>
        <div className="mx-auto my-10 max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-newBlue lg:mb-0 lg:text-3xl">
            What Our Clients and Candidates Say...
          </h2>
          <div className="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8 mt-10">
            <div className="mb-8 sm:break-inside-avoid">
              <blockquote className="rounded-xl bg-gray-200 p-6 drop-shadow-xl">
                <p className="leading-relaxed text-gray-700">
                  I am extremely grateful to
                  <span className="font-bold"> DiamondOre</span> for their
                  exceptional assistance in helping me secure a job at Max Life
                  Banca. Their expertise, guidance, and support throughout the
                  entire process were invaluable. I highly recommend{" "}
                  <span className="font-bold">DiamondOre</span> to anyone
                  seeking professional career guidance.
                </p>
              </blockquote>

              <div className="mt-4 flex items-center gap-4">
                <img
                  alt="Woman"
                  src={Guy}
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div className="text-sm">
                  <p className="font-medium text-textColor font-semibold">Sajal Mehrotra</p>
                  <p className="mt-1 text-textColor font-bold">MAX Life Banca</p>
                </div>
              </div>
            </div>

            <div className="mb-8 sm:break-inside-avoid">
              <blockquote className="rounded-xl bg-gray-200 p-6 drop-shadow-xl">
                <p className="leading-relaxed text-gray-700">
                  I couldn't be more thrilled to express my heartfelt
                  appreciation to <span className="font-bold">DiamondOre</span>
                  for their incredible role in making my much needed job at Tata
                  AIA Banca a reality. Their unmatched expertise, unwavering
                  support, and personalized guidance have been instrumental in
                  shaping my career success. I wholeheartedly endorse{" "}
                  <span className="font-bold">DiamondOre</span> to anyone in
                  pursuit of professional career guidance.
                </p>
              </blockquote>

              <div className="mt-4 flex items-center gap-4">
                <img
                  alt="Guy"
                  src={Guy}
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div className="text-sm">
                  <p className="font-medium text-textColor font-semibold">Aashish Paul</p>
                  <p className="mt-1 text-textColor font-bold">Tata AIA Banca</p>
                </div>
              </div>
            </div>

            <div className="mb-8 sm:break-inside-avoid">
              <blockquote className="rounded-xl bg-gray-200 p-6 drop-shadow-xl">
                <p className="leading-relaxed text-gray-700">
                  Thanks to <span className="font-bold">DiamondOre</span>, I landed my dream job
                  at MAX Life Operations. Their expertise and guidance were
                  invaluable in securing this opportunity. Highly recommended
                  for their amazing support.
                </p>
              </blockquote>

              <div className="mt-4 flex items-center gap-4">
                <img
                  alt="Woman"
                  src={Woman}
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div className="text-sm">
                  <p className="font-medium text-textColor font-semibold">Akanksha</p>
                  <p className="mt-1 text-textColor font-bold">MAX Life Operations</p>
                </div>
              </div>
            </div>

            <div className="mb-8 sm:break-inside-avoid">
              <blockquote className="rounded-xl bg-gray-200 p-6 drop-shadow-xl">
                <p className="leading-relaxed text-gray-700">
                  I am extremely grateful for the exceptional job consultancy services provided by diamond ore consultancy. With their expertise and guidance, I was able to secure my dream job in this reputed company.
                  The consultants were highly professional and dedicated throughoutthe process.
                </p>
              </blockquote>

              <div className="mt-4 flex items-center gap-4">
                <img
                  alt="Guy"
                  src={Guy}
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div className="text-sm">
                  <p className="font-medium text-textColor font-semibold">Piyush Srivastava</p>
                  <p className="mt-1 text-textColor font-bold">PNB Metlife Direct</p>
                </div>
              </div>
            </div>

            <div className="mb-8 sm:break-inside-avoid">
              <blockquote className="rounded-xl bg-gray-200 p-6 drop-shadow-xl">
                <p className="leading-relaxed text-gray-700">
                  Diamond Ore guided me throughout the entire job search process,boosting my confidence and helping me land my ideal position.
                </p>
              </blockquote>

              <div className="mt-4 flex items-center gap-4">
                <img
                  alt="Woman"
                  src={Woman}
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div className="text-sm">
                  <p className="font-medium text-textColor font-semibold">Richa</p>
                  <p className="mt-1 text-textColor font-bold">India First Life Insurance Agency</p>
                </div>
              </div>
            </div>

            <div className="mb-8 sm:break-inside-avoid">
              <blockquote className="rounded-xl bg-gray-200 p-6 drop-shadow-xl">
                <p className="leading-relaxed text-gray-700">
                  Diamond Ore personalized approach and attention to detail set them apart from other agencies. I would highly recommend Diamond Ore to anyone seeking career advancement opportunity.
                </p>
              </blockquote>

              <div className="mt-4 flex items-center gap-4">
                <img
                  alt="Guy"
                  src={Guy}
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div className="text-sm">
                  <p className="font-medium text-textColor font-semibold">Rahul Pandey</p>
                  <p className="mt-1 text-textColor font-bold">Bharti Axa Banca</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
