import React from 'react';

import About from '../components/About';
import Ourstory from '../components/AboutUs';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Collection from '../components/Collection';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import ProductServices from '../components/ProductServices';

const App = () => {
  return (
    <div className={`bg-[#232323] grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-[#232323]`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-[#232323] sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <MainHero />
          </div>
          <MainHeroImage />
        </div>
      </div>
      <LazyShow>
        <>
          <Ourstory />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <ProductServices />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <Collection />
      </LazyShow>
      <LazyShow>
        <>
          <About />
        </>
      </LazyShow>
      <Analytics />
    </div>
  );
};

export default App;
