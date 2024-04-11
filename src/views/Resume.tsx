import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import resume from '../assets/images/Meagan_Welch_Resume_Final.pdf'

function Resume () {
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
        <div>
        <iframe src={resume} className="h-[100vh] w-[100vh]"/>
        </div>
        </div>
      </div>
        
        </>
    )
}
export default Resume;