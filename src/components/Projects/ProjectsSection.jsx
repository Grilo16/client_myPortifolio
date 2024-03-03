import { Section } from "../layout"

export const ProjectsSection = ({children, ...props}) => {
    return (
        <Section
        layout={"flex-column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"2rem"}
        theme={"light"}
            {...props}
        >
            {children}
        </Section>
    )
}