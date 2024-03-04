import { CardFrontFaceInner } from "./CardFrontFaceInner";
import { CardFrontFaceOuter } from "./CardFrontFaceOuter";
import { FrontFaceHeading, FrontFaceImage, FrontFaceSubHeading } from "./FrontFaceContents";

export const CardFrontFace = ({projectName, banner}) => {
    return (
        <CardFrontFaceOuter>
            <CardFrontFaceInner>
                <FrontFaceImage banner={banner}/>
                <FrontFaceHeading projectName={projectName}/>
                <FrontFaceSubHeading/>
            </CardFrontFaceInner>
        </CardFrontFaceOuter>
    )
};
