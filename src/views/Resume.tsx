import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import resume from "../assets/images/Meagan_Welch_Resume_Final.pdf";
import { useState } from "react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function Resume() {
  const [numPages, setNumPages] = useState<number>(2);
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

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
          <p>
            Page {1} of {2}
          </p>
          <Document file={resume}>
            <Page pageNumber={2} />
          </Document>
          <p>
            Page {1} of {2}
          </p>
        </div>
      </div>
    </>
  );
}
export default Resume;
