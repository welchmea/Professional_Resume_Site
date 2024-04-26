import { Link } from "react-router-dom";
import ImageView from "../assets/images/linus-mimietz-nCYpagkCh-U-unsplash.jpg";
import { MdOutlineDoubleArrow } from "react-icons/md";

function HomePage() {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-2">
        <div className="flex flex-col flex-wrap place-content-center bg-componentDark rounded-md border border-accentDark w-full lg:w-1/4">
          <div className="flex justify-center p-8 sm:p-1 md:p-1 lg:p-4 text-4xl sm:text-md md:text-4xl lg:text-4xl ">My Resume</div>
          <div className="flex justify-center p-8 sm:p-1 md:p-1 lg:p-4 text-lg">Click to view my resume.</div>
          <div className="flex justify-center p-8 sm:p-1 md:p-1 lg:p-4 text-4xl">
            <Link to="/Resume">
              <MdOutlineDoubleArrow />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-y-2 lg:w-1/3">
          <div className="flex h-2/3 lg:h-3/4 justify-center bg-black rounded-md border border-accentDark">
            <img className="flex rounded-md h-4/4 w-[100vw]" src={ImageView} />
          </div>
          <div className="flex flex-col items-center place-content-center bg-componentDark h-1/3 lg:h-1/4 lg:p-8 rounded-md border border-accentDark">
            <div className="flex p-8 text-2xl">
              Contact:
              </div>
          
              <div className="flex flex-col items-start text-xs sm:text-lg md:text-md lg:text-xl">
                <div>Phone Number:</div>
                <div>360-556-1083</div>
            
              <div className="flex flex-col items-start text-xs sm:text-xs md:text-md lg:text-xl">
                <div>Email:</div>
                <div>megrosewel@gmail.com</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-2 lg:w-1/3">
          <div className="flex justify-center p-8 bg-componentDark h-1/2 rounded-md border border-accentDark">
            <div className="flex items-center p-8 text-2xl">About Me:</div>
            <div className="flex items-center text-xs sm:text-xs md:text-md lg:text-xl">
              “Aspiring Software Developer with an eye for aesthetics. Eager to grow 
              and learn in a team.”
            </div>
          </div>

          <div className="flex flex-col justify-center bg-black h-1/2 rounded-md border border-accentDark">
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
