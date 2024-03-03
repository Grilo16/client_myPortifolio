import { ContentWrapper } from "../../../../layout/ContentWrapper"
export const CardBackFaceInner = ({children, ...props}) => {
    return (
        <ContentWrapper
            layout={"manual-grid"}
            templateRows={"2rem auto 4rem"}
            gap={"0.5rem"}
            height={"100%"}
            padding={"0.5rem 0"}
            maxHeight={"35rem"}
            minHeight={"35rem"}
            overflow={"hidden"}
            {...props}
        >
            {children}
        </ContentWrapper>
    )
}