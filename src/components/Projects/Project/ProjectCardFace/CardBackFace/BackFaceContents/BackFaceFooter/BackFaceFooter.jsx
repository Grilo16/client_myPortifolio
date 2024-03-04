import styled from "styled-components"
import { LeftArrowIcon, RightArrowIcon } from "../../../../../../../assets"
import { ContentWrapper, Paragraph } from "../../../../../../layout"

export const BackFaceFooter = ({children, nextPage, previousPage, currentPage, pages, setCurrentPage, ...props}) => {

    const pageIndicators = ["Overview Page", ...pages].map((page, index) => <PageIndicator onClick={() => setCurrentPage(index)} key={index}/>)

    return (
        <ContentWrapper
            theme={"dark"}
            layout={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
            gap={"5%"}
            padding={"0 5%"}
            {...props}
        >
            <ArrowButtonWrapper>
                <LeftArrowIcon onClick={previousPage} height={"2rem"}/>
            </ArrowButtonWrapper>
            
                <PageIndicatorWrapper $currentPage={currentPage}>
                {pageIndicators}              
                </PageIndicatorWrapper>
            
            <ArrowButtonWrapper >
                <RightArrowIcon onClick={nextPage} height={"2rem"}/>
            </ArrowButtonWrapper>
   
        </ContentWrapper>
    )
}

const PageIndicatorWrapper = styled.div`
    display: flex;
    gap: 8%;
    min-height: 100%;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    & > :nth-child(${({$currentPage}) => $currentPage ? $currentPage + 1 : 1}){
    scale: 2;
}
`

const PageIndicator = styled.button`
    height: 4px;
    width: 4px;
    background-color: aqua;
    border-radius: 50vw;
    transition: 0.1s ease-in-out;

`

const ArrowButtonWrapper = styled.button`
    min-height: 2rem;
    min-width: 2rem;
`