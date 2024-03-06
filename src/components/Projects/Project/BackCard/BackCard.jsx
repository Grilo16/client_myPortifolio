import { useState } from "react";
import { CardBody } from "./CardBody";
import { CardFooter } from "./CardFooter";
import { CardHeader } from "./CardHeader";
import { ContentWrapper } from "../../..";

export const BackCard = ({pages, stack, overview, projectName, links}) => {

    const [currentPage, setCurrentPage] = useState(0);
    const pageData = pages.at(currentPage - 1) 


    const nextPage = () =>
      setCurrentPage((current) =>
        pages.length === current ? 0 : current + 1
      );

    const previousPage = () =>
      setCurrentPage((current) => (current <= 0 ? pages.length  : current - 1));


    return (
        <ContentWrapper theme={"dark"} layout={"manual-grid"} templateRows={"10% 82% 10%"} gap={"0.5rem"}>
            <CardHeader links={links}/>
            <CardBody currentPage={currentPage} pageData={pageData} overview={overview} stack={stack} projectName={projectName}  />
            <CardFooter pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} nextPage={nextPage} previousPage={previousPage}/>
    </ContentWrapper>
    )
};