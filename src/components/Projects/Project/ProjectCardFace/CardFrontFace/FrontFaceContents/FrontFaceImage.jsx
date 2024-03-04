import styled from "styled-components"
import { BorderRadius } from "../../../../../../style"

export const FrontFaceImage = ({banner}) => {
    return (
        <StyledImg  src={banner??"https://picsum.photos/200"} alt="" />
    )
}

const StyledImg = styled.img`
${BorderRadius};
object-fit: cover;
`