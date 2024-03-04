import { RogueBookings, duckysRevenge, duckysRevenge3D } from "./projectsData";
import { ProjectsContentWrapper } from "./ProjectsContentWrapper";
import { ProjectsHeading } from "./ProjectsHeading";
import { ProjectsSection } from "./ProjectsSection";
import { Project } from "./Project"


export const Projects = () => {

  return (
    <ProjectsSection>
      <ProjectsHeading>Project Highlights</ProjectsHeading>
      <ProjectsContentWrapper>
        <Project {...duckysRevenge}/>
        <Project {...duckysRevenge3D}/>
        <Project {...RogueBookings}/>
      </ProjectsContentWrapper>
    </ProjectsSection>
  );
};

