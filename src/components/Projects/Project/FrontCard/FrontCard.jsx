import styled from "styled-components";
import { ContentWrapper, Heading, Subheading } from "../../..";


export const FrontCard = ({projectName, banner}) => {
    return (
    <ContentWrapper theme={"dark"} layout={"manual-grid"} templateRows={"70% 25% 5%"} gap={"1rem"}placeItems={"stretch"}>
        <StyledImg src={banner} alt=""  />
        <Heading textOverflow={"ellipsis"} >{projectName}</Heading>
        <Subheading textAlign={"right"} alignSelf={"bottom"} weight={"200"} size={"small"}>more →</Subheading>
    </ContentWrapper>
    )
};

const StyledImg = styled.img`
object-fit: cover;    
`
