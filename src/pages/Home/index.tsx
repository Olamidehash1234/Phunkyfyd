import HeroComponent from './hero'
import ServicesComponent from './service';
import PortfolioComponent from './portfolio'
import FAQ from './FAQ'
import TransformSection from './transform';
import AboutSection from './about'
// import Ceo from './ceo';

const HomePage = () => {
  return (
    <div>
      <HeroComponent />
      <AboutSection />
      <ServicesComponent />
      {/* <Ceo /> */}
      <PortfolioComponent />
      <FAQ />
      <TransformSection />
    </div>
  );
};

export default HomePage;
