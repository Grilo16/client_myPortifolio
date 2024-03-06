import { ContentWrapper } from "../../../..";
import { ProjectFeatureOverview } from "./ProjectFeatureOverview";
import { ProjectOverview } from "./ProjectOverview";

export const CardBody = ({
  children,
  pageData,
  currentPage,
  stack,
  overview,
  projectName,
  ...props
}) => {
  return (
    <ContentWrapper
      theme={"dark-accent"}
      // theme={AssignedThemes.projects.card.back.body}
      overflow={"scroll"}
      layout={"flex-column"}
      justifyContent={"stretch"}
      alignItems={"stretch"}
      gap={"0.5rem"}
      padding={"1rem 1rem 0"}
      {...props}
    >
      {currentPage === 0 ? (
        <ProjectOverview
          stack={stack}
          overview={overview}
          projectName={projectName}
        />
      ) : (
        <ProjectFeatureOverview {...pageData} />
      )}
    </ContentWrapper>
  );
};
