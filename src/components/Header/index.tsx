import Navbar from "../Navbar";

const Header = () => {
  return (
    <div className="w-full md:mt-16 mt-7 md:h-[80vh] h-auto md:px-40 px-5 relative">
        <Navbar />
        <div className="w-full md:mt-48 mt-20 flex md:flex-row flex-col items-start justify-between">
            <div className="flex flex-col md:w-auto w-full">
                <span className="font-medium text-[#929a9f] text-[18px]">
                    welcome to our website
                </span>
            </div>
        </div>
    </div>
  )
}

export default Header
