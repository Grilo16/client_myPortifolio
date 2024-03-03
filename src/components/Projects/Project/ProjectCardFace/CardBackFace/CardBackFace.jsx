import { useState } from "react";
import { BackFaceBody, BackFaceFooter, BackFaceHeader, HeaderButton } from "./BackFaceContents"
import { CardBackFaceInner } from "./CardBackFaceInner"
import { CardBackFaceOuter } from "./CardBackFaceOuter"

export const CardBackFace = ({children, pages, stack, overview, projectName, links, ...props}) => {
    const [currentPage, setCurrentPage] = useState(0);
    const pageData = pages.at(currentPage - 1) 


    const nextPage = () =>
      setCurrentPage((current) =>
        current >= pages.length ? current : current + 1
      );

    const previousPage = () =>
      setCurrentPage((current) => (current <= 0 ? current : current - 1));


    return (
        <CardBackFaceOuter>
            <CardBackFaceInner>
                <BackFaceHeader buttonsData={links}/> 
                <BackFaceBody currentPage={currentPage} pageData={pageData} overview={overview} stack={stack} projectName={projectName} />
                <BackFaceFooter pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} nextPage={nextPage} previousPage={previousPage}/>
            </CardBackFaceInner>
        </CardBackFaceOuter>
    )
}