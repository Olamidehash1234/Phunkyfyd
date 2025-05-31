import Hero from './hero';
import Filter from './filter';
import TransformSection from '../Home/transform';
// import Projects from './projects';
// import Testimonials from './testimonials';

const PortfolioPage = () => {
  return (
    <div>
      <Hero />
      <Filter />
      <TransformSection />
      {/* Uncomment the following lines when Projects and Testimonials components are ready */}
      {/* <Projects />
      <Testimonials /> */}
    </div>
  );
};

export default PortfolioPage;
