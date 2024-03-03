import { CardFrontFaceInner } from "./CardFrontFaceInner";
import { CardFrontFaceOuter } from "./CardFrontFaceOuter";
import { FrontFaceHeading, FrontFaceImage, FrontFaceSubHeading } from "./FrontFaceContents";

export const CardFrontFace = ({projectName}) => {
    return (
        <CardFrontFaceOuter>
            <CardFrontFaceInner>
                <FrontFaceImage/>
                <FrontFaceHeading projectName={projectName}/>
                <FrontFaceSubHeading/>
            </CardFrontFaceInner>
        </CardFrontFaceOuter>
    )
};
