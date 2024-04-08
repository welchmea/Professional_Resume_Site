import { Link } from "react-router-dom";
import ImageView from "../assets/images/mountain-view-sky.jpeg";
import { MdOutlineDoubleArrow } from "react-icons/md";

function HomePage() {
  return (
    <>
      <div className="flex flex-row h-[90vh] w-6/6 gap-2">
        <div className="flex flex-col justify-between w-full h-[50vh] bg-light-green">
          <div className="flex justify-center p-8 text-8xl">My Resume</div>
          <div className="flex  justify-center">Click to view my resume.</div>
          <div className="flex justify-center p-8 text-4xl">
            <Link to="/Resume">
              <MdOutlineDoubleArrow />
            </Link>
          </div>
        </div>

        <div className="flex flex-col h-full w-full">
          <div className="flex h-3/4 justify-center bg-light-turq">
            <img className="flex h-[90vh]" src={ImageView} />
          </div>
          <div className="flex items-center p-8 bg-light-green h-1/4">
            <div className="flex w-1/4 text-xl">Contact</div>
            <div className="flex flex-col w-3/4">
              <div className="flex justify-between">
                <div>Phone Number:</div>
                <div>360-556-1083</div>
              </div>
              <div className="flex justify-between">
                <div>Email:</div>
                <div>welchmea@oregonstate.edu</div>
              </div>
              {/* <div className="flex justify-between">
                <div>LinkedIn:</div>
                <div>welchmea@linkedin</div>
              </div>
              <div className="flex justify-between">
                <div>GitHub:</div>
                <div>welchmea</div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full h-full">
          <div className="flex justify-center p-8 bg-light-green h-1/2">
            <div className="flex items-center p-8 text-2xl">About Me</div>
            <div className="flex items-center">
              “Software engineer dedicated to designing
              real-world-problem-solving applications.”
            </div>
          </div>

          <div className="flex flex-col justify-center bg-light-turq h-1/2">
            <div className="flex justify-center p-8 text-4xl">
              <Link to="/Projects">
                <MdOutlineDoubleArrow />
              </Link>
            </div>
            <div className="flex justify-center text-6xl p-8">Projects</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePage;
