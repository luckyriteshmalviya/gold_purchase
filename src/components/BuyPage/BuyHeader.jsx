import { useNavigate } from "react-router-dom";
import { BackArrow, WaSupportIcon } from "../svg-icons/icons";

const AppHeader = () => {
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate("/");
  };

  return (
    <>
      <div className="relative">
        <div className="flex-row h-28 bg-[#2b2b2b] relative">
          <div className="flex h-[75px] md:h-[95px] justify-between items-center px-4">
            <button
              className="flex justify-center items-center rounded-full w-[30px] h-[30px] bg-[#2b2b2b]"
              tabIndex="0"
              type="button"
              onClick={handleBackButton}
            >
              <BackArrow />
            </button>
            <div className="mt-1 text-xl text-white">{"Buy Gold"}</div>
            <button
              className="flex justify-center items-center"
              tabIndex="0"
              type="button"
            >
              <WaSupportIcon />
            </button>
          </div>
        </div>
        <div className="rounded-t-3xl h-10 bg-white absolute w-full -bottom-1 left-0 z-10" />
      </div>
    </>
  );
};

export default AppHeader;
