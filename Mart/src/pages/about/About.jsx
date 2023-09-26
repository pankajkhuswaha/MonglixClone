import React from "react";
import './index.css'
import { AboutData } from "../../data/AboutData";

const About = () => {
  return (
    <div>
      <svg
        className="absolute"
        id="wave"
        style={{ transform: "rotate(180deg)", transition: "0.3s" }}
        viewBox="0 0 1440 490"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(77, 12, 16, 1)" offset="0%" />
            <stop stopColor="rgba(26, 31, 44, 1)" offset="100%" />
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: 1 }}
          fill="url(#sw-gradient-0)"
          d="M0,49L120,73.5C240,98,480,147,720,179.7C960,212,1200,229,1440,245C1680,261,1920,278,2160,310.3C2400,343,2640,392,2880,383.8C3120,376,3360,310,3600,277.7C3840,245,4080,245,4320,253.2C4560,261,4800,278,5040,285.8C5280,294,5520,294,5760,277.7C6000,261,6240,229,6480,253.2C6720,278,6960,359,7200,334.8C7440,310,7680,180,7920,155.2C8160,131,8400,212,8640,204.2C8880,196,9120,98,9360,98C9600,98,9840,196,10080,253.2C10320,310,10560,327,10800,277.7C11040,229,11280,114,11520,130.7C11760,147,12000,294,12240,351.2C12480,408,12720,376,12960,359.3C13200,343,13440,343,13680,294C13920,245,14160,147,14400,138.8C14640,131,14880,212,15120,228.7C15360,245,15600,196,15840,155.2C16080,114,16320,82,16560,106.2C16800,131,17040,212,17160,253.2L17280,294L17280,490L17160,490C17040,490,16800,490,16560,490C16320,490,16080,490,15840,490C15600,490,15360,490,15120,490C14880,490,14640,490,14400,490C14160,490,13920,490,13680,490C13440,490,13200,490,12960,490C12720,490,12480,490,12240,490C12000,490,11760,490,11520,490C11280,490,11040,490,10800,490C10560,490,10320,490,10080,490C9840,490,9600,490,9360,490C9120,490,8880,490,8640,490C8400,490,8160,490,7920,490C7680,490,7440,490,7200,490C6960,490,6720,490,6480,490C6240,490,6000,490,5760,490C5520,490,5280,490,5040,490C4800,490,4560,490,4320,490C4080,490,3840,490,3600,490C3360,490,3120,490,2880,490C2640,490,2400,490,2160,490C1920,490,1680,490,1440,490C1200,490,960,490,720,490C480,490,240,490,120,490L0,490Z"
        ></path>
      </svg>
      <p className="text-white text-xl md:text-4xl font-bold text-center mt-4 relative md:top-4 top-[-10px]">
        ABOUT US 
      </p>
      <div className="shadow-sm m-12 relative module">
        <div
          style={{ borderRadius: "0.375rem 0.375rem 0 0" }}
          className="bg-red-500 p-[14px] rounded-md"
        ></div>
        <div
          style={{ borderRadius: "0 0 0.375rem 0.375rem " }}
          className="p-4 border-y-1  bg-white "
        >
          <p className="pb-2 text-[18px] font-bolder text-gray-800">
            Welcome to our hassle-free procurement platform that's unlike any
            other marketplace out there. We are not an aggregator platform. We
            are one stop solution for your B2B or B2C procurement of industrial
            supplies in Safety, Lifting tools, Welding Equipment and
            Accessories, Power Tools, Office Stationery, Office IT supply and
            many more. We're here to simplify your procurement journey and make
            it a breeze. If you're in the B2B realm, we're tailored for you. Say
            goodbye to the stress of dealing with multiple suppliers and
            searching endlessly for the right products and prices. We're here to
            revolutionize your procurement experience. Our platform is
            intuitive, making the entire process smoother and more efficient.
            Let's dive into what makes us stand out:
          </p>
          {AboutData.map((ele, id) => {
            return (
              <div key={id} className="mt-3">
                <p className="text-xl text-[#EF4444] font-bolder">
                  {ele.heading}
                </p>
                <span className="text-md text-gray-800 font-medium">
                  {ele.para}
                </span>
              </div>
            );
          })}
          <p className="pt-4 text-[18px] font-bolder text-gray-800">
            So, whether you're tired of sifting through countless suppliers or
            struggling with tail-spends, we've got the solution you've been
            searching for. Say hello to stress-free procurement and start
            enjoying the benefits of our platform today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
