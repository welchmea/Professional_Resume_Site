import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <div className="flex flex-row border border-gray-500 h-[90vh] w-6/6">
        <div className="flex flex-col w-1/6 bg-light-green p-8">
          <div className="flex text-4xl">Projects</div>
          <div className="flex text-xl mt-4">
            <Link to='/'>
            <RiArrowLeftDoubleLine />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center w-5/6 overflow-y-auto p-4 bg-light-turq">
          <div className="mb-12 border border-gray-500 p-4 bg-light-green">
            <p>SWE Portfolio Project</p>
            <p>
              <a href="https://fe-bookshelf-6bdf6bf741e2.herokuapp.com">
                Exit to Website
              </a>
            </p>
            <iframe
              width="1000"
              height="500"
              src="https://fe-bookshelf-6bdf6bf741e2.herokuapp.com"
            ></iframe>
          </div>
          <div className="mb-12 border border-gray-500 p-4 bg-light-green">
            <p>Intro to Databases Portfolio Project</p>
            <p>
              <a href="https://gh-hospital-d474f7c585fa.herokuapp.com">
                Exit to Website
              </a>
            </p>
            <iframe
              width="1000"
              height="500"
              src="https://gh-hospital-d474f7c585fa.herokuapp.com"
            ></iframe>
          </div>
          <div className="mb-12 border border-gray-500 p-4 bg-light-green">
            <p>Web Development Portfolio Project</p>
            <p>
              <a href="https://web-dev-mern-bef2b172b674.herokuapp.com">
                Exit to Website
              </a>
            </p>
            <iframe
              width="1000"
              height="500"
              src="https://web-dev-mern-bef2b172b674.herokuapp.com"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
export default Projects;
