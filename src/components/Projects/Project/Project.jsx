import { CardBackFace, CardFrontFace } from "./ProjectCardFace"
import { ProjectInnerCard } from "./ProjectInnerCard"
import { ProjectOuterCard } from "./ProjectOuterCard"

export const Project = ({children , projectName, pages, stack, overview, links, banner, ...props}) => {
    return (
        <ProjectOuterCard>
            <ProjectInnerCard>
                <CardFrontFace projectName={projectName} banner={banner}/>
                <CardBackFace pages={pages} stack={stack} overview={overview} links={links} projectName={projectName}/>
            </ProjectInnerCard>
        </ProjectOuterCard>
    )
}

