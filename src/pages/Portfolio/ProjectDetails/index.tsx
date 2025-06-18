import { useParams } from "react-router-dom";
import { portfolioData } from "../data";
import Hero from "./components/Hero";
// import ProjectInfo from "./components/ProjectInfo";
// import LayoutSection from "./components/LayoutSection";
// import MainImage from "./components/MainImage";
// import ChallengeSection from "./components/ChallengeSection";
// import GridSection from "./components/GridSection";
// import MediaSection from "./components/MediaSection";
// import ImplementationSection from "./components/ImplementationSection";
import ShowcaseSection from "./components/ShowcaseSection";
import Transform from "../../Home/transform";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = portfolioData.find((p) => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <div className="lg:pb-[0px]">
        <Hero
          projectName={project.projectName}
          description={project.description || ""}
          image={project.image}
        />
      </div>

      {/* <div className="px-[16px] lg:px-[18%]">
        <div className="mx-auto lg:max-w-[1600px]">
          <ProjectInfo
            brief={project.brief}
            location={project.location}
            year={project.year}
          />
        </div>
      </div> */}
{/* 
      <LayoutSection
        layoutImage={project.layoutImage}
        layoutText={project.layoutText}
      /> */}
      {/* <div className="pt-[60px] lg:py-[80px]">
        <MainImage mainImage={project.mainImage} />
      </div> */}

      {/* <ChallengeSection
        challengeImage={project.challengeImage}
        challengeText={project.challengeText}
        sectionType="challenge"
      /> */}
      {/* <GridSection gridImages={project.gridImages} /> */}
      {/* <ChallengeSection
        challengeImage={project.conceptImage}
        challengeText={project.conceptText}
        sectionType="concept"
      /> */}
      {/* <div className="py-[40px] lg:py-[80px]">
        <MediaSection videoUrl={project.finalVideo} />
      </div> */}
      {/* <ImplementationSection
        implementationImage={project.implementationImage}
        implementationText={project.implementationText}
        implementationText2={project.implementationText2}
      /> */}
      <ShowcaseSection showcaseImages={project.showcaseImages} />
      <Transform />
    </div>
  );
};

export default ProjectDetails;
