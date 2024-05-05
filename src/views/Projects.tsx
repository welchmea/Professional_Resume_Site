import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Projects({books, hospital, mern}:{books: any, hospital:any, mern:any}) {
  return (
    <>
      <div className="flex flex-row flex-wrap border border-darkAccent w-6/6">
        <div className="flex flex-col w-full sm:w-full md:w-full lg:w-1/6  bg-componentDark p-8 sm:p-4 md:p-4 lg:p-4">
          <div className="flex text-4xl">Projects</div>
          <div className="flex text-xl mt-4">
            <Link to='/'>
            <RiArrowLeftDoubleLine className="hover:text-red-700"  />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center w-full lg:w-5/6 overflow-y-auto p-4 bg-componentDark">
          <div className="mb-12 border border-accentDark p-4 bg-componentDark">
            <p>SWE Portfolio Project</p>
            <p>
              <a className="hover:text-red-700" href="https://fe-bookshelf-6bdf6bf741e2.herokuapp.com">
                Exit to Website
              </a>
            </p>
            {books}
          </div>
          <div className="mb-12 border border-accentDark p-4 bg-componentDark">
            <p>Intro to Databases Portfolio Project</p>
            <p>
              <a className="hover:text-red-700"  href="https://gh-hospital-d474f7c585fa.herokuapp.com">
                Exit to Website
              </a>
            </p>
            {hospital}
          </div>
          <div className="mb-12 border border-accentDark p-4 bg-componentDark">
            <p>Web Development Portfolio Project</p>
            <p>
              <a className="hover:text-red-700"  href="https://web-dev-mern-bef2b172b674.herokuapp.com">
                Exit to Website
              </a>
            </p>
            {mern}
          </div>
        </div>
      </div>
    </>
  );
}
export default Projects;
