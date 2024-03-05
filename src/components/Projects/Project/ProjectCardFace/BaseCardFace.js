import styled from "styled-components";
import { BorderRadius } from "../../../../style";

export const BaseCardFace = styled.div`
display: contents;
  ${BorderRadius};
  backface-visibility: hidden;
  transform-style: preserve-3d;
  padding: 1rem;
  grid-column: 1;
  grid-row: 1 / span 3;
  position: relative;

  & > * {
    transform: translateZ(100px);
  }
  &:nth-child(2) {
    transform: rotateY(-180deg);
  }
`;