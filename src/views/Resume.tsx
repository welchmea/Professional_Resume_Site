import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import resume from "../assets/images/Software.pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function Resume() {
    // citation: https://www.npmjs.com/package/react-pdf
  return (
    <>
      <div className="flex flex-row flex-wrap border border-accentDark w-6/6">
        <div className="flex flex-col w-full sm:w-full md:w-full lg:w-1/6  bg-componentDark p-8 sm:p-4 md:p-4 lg:p-4">
          <div className="flex text-4xl">Resume</div>
          <div className="flex text-xl mt-4">
            <Link to="/">
              <RiArrowLeftDoubleLine />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center w-full  lg:w-5/6 overflow-y-auto p-4 bg-light-turq border-accentDark">
          <Document file={resume}>
            <Page pageNumber={1} />
          </Document>
          <Document file={resume}>
            <Page pageNumber={2}  />
          </Document>
  
        </div>
      </div>
    </>
  );
}
export default Resume;
