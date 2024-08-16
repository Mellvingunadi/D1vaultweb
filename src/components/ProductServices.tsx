import React from 'react';

import config from '../config/index.json';

const ProductServices = () => {
  const { productServices } = config;
  const { title, subtitle, description, items: featuresList } = productServices;
  return (
    <div className={`py-12 bg-[#232323]`} id="productServices">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2
            className={`text-base text-[#FE0201] font-semibold tracking-wide uppercase`}
          >
            {title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            {subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-white lg:mx-auto">
            {description}
          </p>
        </div>

        <div className="mt-20">
          <dl className="space-y-10 p-10 md:space-y-0 items-stretch text-center md:flex md:grid-cols-4 gap-30 md:gap-x-5 md:gap-y-5">
            {featuresList.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col items-center h-full w-full"
              >
                <div className="flex-1">
                  <img
                    className="h-20 w-20 mb-2"
                    src={feature.icon}
                    alt={feature.name}
                  />
                </div>
                <div className="flex-1">
                  <a className="text-white text-center flex-col text-xl font-semibold mt-4">
                    {feature.name}
                  </a>
                </div>
                <div className="flex-2">
                  <p className="text-white text-center mt-4">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ProductServices;
