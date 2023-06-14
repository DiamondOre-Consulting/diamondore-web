import React from "react";
import FooterImg from "../assets/footer-new.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer
      className="bg-bgColor bg-cover bg-fixed bg-center"
      style={{
        backgroundImage: ` url(${FooterImg})`,
      }}
    >
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center text-teal-600 sm:justify-start">
              <a className="decoration-none" href="/">
                <p className="text-3xl font-bold text-newBlue leading-6">
                  Diamond Ore <br />{" "}
                  <span className="text-xl font-semibold text-newBlue ">
                    Consulting Pvt. Ltd.
                  </span>
                </p>
              </a>
            </div>

            <p className="mt-2 sm:text-xl/relaxed font-semibold text-newBlue drop-shadow-2xl">
              <em>"We mine for talent"</em>
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-newBlue transition hover:text-newBlue/75"
                >
                  <span className="sr-only">Facebook</span>
                  <FacebookIcon />
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/diamondoreconsultingpvtltd?igshid=MzRlODBiNWFlZA=="
                  rel="noreferrer"
                  target="_blank"
                  className="text-newBlue transition hover:text-newBlue/75"
                >
                  <span className="sr-only">Instagram</span>
                  <InstagramIcon />
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-newBlue transition hover:text-newBlue/75"
                >
                  <span className="sr-only">Twitter</span>
                  <TwitterIcon />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/company/diamondore-consulting-pvt-ltd/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-newBlue transition hover:text-newBlue/75 w-10 h-10"
                >
                  <span className="sr-only">LinkedIn</span>
                  <LinkedInIcon />
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-500">About Us</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="text-newBlue transition hover:text-newBlue/75"
                    href="/"
                  >
                    Introduction
                  </a>
                </li>

                <li>
                  <a
                    className="text-newBlue transition hover:text-newBlue/75"
                    href="/"
                  >
                    See The Numbers
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-500">Our Services</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="text-newBlue transition hover:text-newBlue/75"
                    href="/"
                  >
                    Job Consultancy
                  </a>
                </li>

                <li>
                  <a
                    className="text-newBlue transition hover:text-newBlue/75"
                    href="/"
                  >
                    Upcoming Services
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-500">Book Consultation Call</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="text-newBlue transition hover:text-newBlue/75"
                    href="https://meetpro.club/Amaan"
                  >
                    For Job Seeker
                  </a>
                </li>

                <li>
                  <a
                    className="text-newBlue transition hover:text-newBlue/75"
                    href="https://meetpro.club/SakshiJha"
                  >
                    For Job Provider
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-500">Contact Us</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="mailto:hr@diamondore.in"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>

                    <span className="flex-1 text-newBlue">hr@diamondore.in</span>
                  </a>
                </li>

                <li>
                  <a
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>

                    <span className="flex-1 text-newBlue">+91 9773693017</span>
                  </a>
                </li>

                <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 shrink-0 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <address className="-mt-0.5 flex-1 not-italic text-newBlue">
                  B-127, Second Floor, Sector 63, Noida, Uttar Pradesh 201301
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-500 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-500">
              <span className="block sm:inline">All rights reserved.</span>

              <a
                className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                href="/"
              >
                Terms & Conditions
              </a>

              <span> &middot; </span>

              <a
                className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                href="/"
              >
                Privacy Policy
              </a>
            </p>

            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
              &copy; 2023 Diamond Ore - Consulting Pvt. Ltd.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
