import HeroComponent from './hero'
import ServicesComponent from './service';
import PortfolioComponent from './portfolio'
import FAQ from './FAQ'
import TransformSection from './transform';
import AboutSection from './about'

const HomePage = () => {
  return (
    <div>
      <HeroComponent />
      <AboutSection />
      <ServicesComponent />
      <PortfolioComponent />
      <FAQ />
      <TransformSection />
    </div>
  );
};

export default HomePage;
