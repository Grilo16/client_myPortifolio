import { ContentWrapper } from "../../../../layout/ContentWrapper"

export const CardFrontFaceInner = ({children, ...props}) => {
    return (
        <ContentWrapper
            layout={"manual-grid"}
            templateRows={"subgrid"}
            placeItems={"stretch"}
            gridRow={"span 3"}
            gap={"1rem"}
            overflow={"hidden"}
            {...props}
        >
            {children}
        </ContentWrapper>
        
    )
}