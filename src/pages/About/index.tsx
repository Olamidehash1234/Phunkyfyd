import HeroSection from "./hero";
import Design from "./design";
import Vision from "./vision";
import Philosophy from "./philosophy";
import ProcessSection from "./process";
import TransformSection from "../Home/transform";
import ApproachSection from "./approach";
import Ceo from "./ceo";

const AboutPage = () => {
  return (
    <div>
      <HeroSection />
      <Design />
      <Ceo />
      <Vision />
      <Philosophy />
      <ProcessSection />
      <ApproachSection />
      <TransformSection />
    </div>
  );
};

export default AboutPage;
