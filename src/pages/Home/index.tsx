import HeroComponent from './hero'
import ServicesComponent from './service';
import PortfolioComponent from './portfolio'
import FAQ from './FAQ'
import TransformSection from './transform';

const HomePage = () => {
  return (
    <div>
      <HeroComponent />
      <ServicesComponent />
      <PortfolioComponent />
      <FAQ />
      <TransformSection />
    </div>
  );
};

export default HomePage;
