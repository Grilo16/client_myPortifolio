import { ContentWrapper } from "../../../../../../layout"
import { ProjectFeatureOverview } from "./ProjectFeatureOverview"
import { ProjectOverview } from "./ProjectOverview"

export const BackFaceBody = ({children, pageData, currentPage, stack, overview, projectName, ...props}) => {


    return (
        <ContentWrapper
            theme={"dark"}
            overflow={"scroll"}
            layout={"flex-column"}
            justifyContent={"stretch"}
            alignItems={"stretch"}
            gap={"0.5rem"}
            padding={"1rem 1rem 0"}
            {...props}
        >
            {
                currentPage === 0
                ? <ProjectOverview stack={stack} overview={overview} projectName={projectName}/>
                : <ProjectFeatureOverview {...pageData}/>
            }
            {children}
        </ContentWrapper>
    )
}

