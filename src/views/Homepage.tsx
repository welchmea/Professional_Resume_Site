import { Link } from "react-router-dom";
import ImageView from "../assets/images/mountain-view-sky.jpeg";
import { MdOutlineDoubleArrow } from "react-icons/md";

function HomePage() {
  return (
    <>
      <div className="flex flex-row h-[90vh] w-6/6 gap-2">
        <div className="flex flex-col justify-between w-full lg:h-[50vh] bg-light-green">
          <div className="flex justify-center p-8 sm:p-0 md:p-1 lg:p-4 text-4xl sm:text-xs md:text-4xl lg:text-8xl ">My Resume</div>
          <div className="flex justify-center">Click to view my resume.</div>
          <div className="flex justify-center p-8 sm:p-0 md:p-1 lg:p-4 text-4xl">
            <Link to="/Resume">
              <MdOutlineDoubleArrow />
            </Link>
          </div>
        </div>

        <div className="flex flex-col h-full w-full">
          <div className="flex h-2/3 lg:h-3/4 justify-center bg-light-turq">
            <img className="flex h-[90vh]" src={ImageView} />
          </div>
          <div className="flex flex-col place-content-center bg-light-green h-1/3 lg:h-1/4 lg:p-8">
            <div className="flex text-md md:text-xl">
              Contact:
              </div>
          
              <div className=" text-xs md:text-lg justify-between">
                <div>Phone Number:</div>
                <div>360-556-1083</div>
            
              <div className="text-xs md:text-lg justify-between">
                <div>Email:</div>
                <div>megrosewel@gmail.com</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full h-full">
          <div className="flex justify-center p-8 bg-light-green h-1/2">
            <div className="flex items-center p-8 text-2xl">About Me:</div>
            <div className="flex items-center text-xs sm:text-xs md:text-lg lg:text-xl">
              “Front-End Web Developer with an eye for aesthetics. Eager to grow 
              and learn in a team.”
            </div>
          </div>

          <div className="flex flex-col justify-center bg-light-turq h-1/2">
            <div className="flex justify-center p-4 sm:p-0 md:p-1 lg:p-8 text-4xl">
              <Link to="/Projects">
                <MdOutlineDoubleArrow />
              </Link>
            </div>
            <div className="flex justify-center p-4 sm:p-0 md:p-1 lg:p-8 text-4xl sm:text-2xl md:text-4xl lg:text-6xl">Projects</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePage;
