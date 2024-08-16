import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const AboutUs = () => {
  const { aboutUs } = config;
  const [firstItem] = aboutUs.items;

  return (
    <section className={`bg-[#232323] py-8`} id="ourstory">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-[#FE0201]`}
        >
          {aboutUs.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-white' : 'text-[#FE0201]'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
            <h3
              className={`text-3xl text-[#FE0201] font-bold leading-none mb-3`}
            >
              {firstItem?.title}
            </h3>
            <p className={`text-white font-medium`}>{firstItem?.description}</p>
            <div className="mt-8">
              <h5 className="text-white mb-5 text-3xl font-bold">
                Why Choose Us?
              </h5>
              <ul>
                <li className="text-white mb-8">
                  <h5 className="text-xl text-[#FE0201] font-semibold">
                    Extensive Collection
                  </h5>
                  <h6>
                    We offer a wide range of shoes, from casual wear to formal
                    styles, ensuring you have access to the latest and most
                    popular designs.
                  </h6>
                </li>
                <li className="text-white mb-8">
                  <h5 className="text-xl text-[#FE0201] font-semibold">
                    Competitive Pricing
                  </h5>
                  <h6>
                    Our bulk purchasing options allow you to take advantage of
                    significant discounts, maximizing your profit margins.
                  </h6>
                </li>
                <li className="text-white mb-8">
                  <h5 className="text-xl text-[#FE0201] font-semibold">
                    Fast and Reliable Shipping
                  </h5>
                  <h6>
                    We understand the importance of timely deliveries. Our
                    efficient logistics network ensures that your orders arrive
                    on time, every time.
                  </h6>
                </li>
              </ul>
            </div>
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6"
              src={firstItem?.img}
              alt={firstItem?.title}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
