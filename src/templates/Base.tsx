import { Meta } from '../layout/Meta';
import { NavBar } from '../navigation/NavBar';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => {
  return (
    <div>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <NavBar />
      <div className="wrapper mx-auto my-0 max-w-screen-lg text-gray-600 antialiased">
        <Hero />
        <VerticalFeatures />
        <Banner />
        <Footer />
      </div>
    </div>
  );
};

export { Base };
