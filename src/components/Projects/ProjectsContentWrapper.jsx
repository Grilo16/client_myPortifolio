import { ContentWrapper } from "../layout"

export const ProjectsContentWrapper = ({children, ...props}) => {
    return (
        <ContentWrapper 
        layout={"auto-grid"}
        placeItems={"center"}
        autoRows={"30rem min-content min-content"}
        gap={"2rem"}
        width={"min(80rem, 100%)"}
        margin={"0 auto 4rem"}
        {...props}
        >
            {children}
        </ContentWrapper>
    )
}