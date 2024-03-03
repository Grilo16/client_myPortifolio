import { Heading } from "../layout"

export const ProjectsHeading = ({children, ...props}) => {
    return (
        <Heading
            size= {"x-large"}
            {...props}
        >
            {children}
        </Heading>
    )
}
