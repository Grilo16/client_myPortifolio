import { AssignedThemes } from "../../style"
import { Section } from "../layout"

export const ProjectsSection = ({children, ...props}) => {
    return (
        <Section
        theme={AssignedThemes.projects.section}
        layout={"flex-column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"2rem"}
            {...props}
        >
            {children}
        </Section>
    )
}