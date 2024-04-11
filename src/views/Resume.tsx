import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import resume from "../assets/images/Meagan_Welch_Resume_Final.pdf";
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
      <div className="flex flex-row border border-gray-500 h-[90vh] w-6/6">
        <div className="flex flex-col w-1/6 bg-light-green p-8">
          <div className="flex text-4xl">Resume</div>
          <div className="flex text-xl mt-4">
            <Link to="/">
              <RiArrowLeftDoubleLine />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center w-5/6 overflow-y-auto p-4 bg-light-turq">
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
