import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';
import { GameShowcase } from './GameShowcase';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <GameShowcase />
    <VerticalFeatures />
    {/* <Banner /> */}
    <Footer />
  </div>
);

export { Base };
