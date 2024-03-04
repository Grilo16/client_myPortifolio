import styled from "styled-components"
import { Paragraph } from "../../../../../../layout"
import { LineHighlightOnHover } from "../../../../../../../style"

export const HeaderButton = ({label, link}) => {
  
  return (
    <StyledButton formAction={link}>
      <Paragraph size={"small"}>{label}</Paragraph>
    </StyledButton>
  )
}

const StyledButton = styled.button`
padding: 0 0.25rem;  
min-height: 100%;
${LineHighlightOnHover};
background: transparent !important;
& > p {
  color: white !important;
}
`