import { Heading } from "../../../../../layout"

export const FrontFaceHeading = ({projectName}) => {
    return (
        <Heading 
            size={"medium"}
            justifySelf={"left"}
            overflow={"hidden"}
        >
            {projectName}
        </Heading>
    )
}