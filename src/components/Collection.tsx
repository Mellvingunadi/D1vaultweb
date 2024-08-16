import React from 'react';

import config from '../config/index.json';

const Collection = () => {
  const { collection } = config;
  const { title, items } = collection;

  return (
    <section className={`bg-[#232323] py-8`} id="collection">
      <div className={`container mx-auto px-2 pt-4 pb-12 text-primary`}>
        <h1
          className={`w-full my-2 text-5xl font-semibold leading-tight text-center text-white`}
        >
          {title}
        </h1>
        <div className={`flex flex-wrap justify-center pt-12 my-12 sm:my-4`}>
          {items.map((image) => (
            <div
              key={image.img}
              className={`w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4`}
            >
              <img
                src={image.img}
                alt={image.img}
                className={`w-full h-full object-cover rounded-lg shadow-lg`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
