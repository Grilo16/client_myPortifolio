import { ContentWrapper } from "../../../../../../layout"
import { HeaderButton } from "./HeaderButton";

export const BackFaceHeader = ({children, buttonsData, ...props}) => {

  const HeaderButtons = buttonsData.map((button, index) => (
    <HeaderButton key={index} {...button} />
  ));

  return (
    <form target="_blank">
      <ContentWrapper
        layout={"auto-grid"}
        minColumnSize={"3rem"}
        gap={"0.5rem"}
        height={"100%"}
        {...props}
      >
        {HeaderButtons}
      </ContentWrapper>
    </form>
  );
}
