import { CardBackFace, CardFrontFace } from "./ProjectCardFace"
import { ProjectInnerCard } from "./ProjectInnerCard"
import { ProjectOuterCard } from "./ProjectOuterCard"

export const Project = ({children , projectName, pages, stack, overview, links, ...props}) => {
    return (
        <ProjectOuterCard>
            <ProjectInnerCard>
                <CardFrontFace projectName={projectName}/>
                <CardBackFace pages={pages} stack={stack} overview={overview} links={links} projectName={projectName}/>
            </ProjectInnerCard>
        </ProjectOuterCard>
    )
}

