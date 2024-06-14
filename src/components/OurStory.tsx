import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const Ourstory = () => {
  const { ourstory } = config;
  const [firstItem] = ourstory.items;

  return (
    <section className={`bg-[#232323] py-8`} id="ourstory">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-[#FE0201]`}
        >
          {ourstory.title.split(' ').map((word, index) => (
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
            <h3 className={`text-3xl text-white font-bold leading-none mb-3`}>
              {firstItem?.title}
            </h3>
            <p className={`text-white`}>{firstItem?.description}</p>
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

export default Ourstory;
