import {AppLogoIcon, ProfileIcon, WaSupportIcon} from "../../svg-icons/icons";
import AppHeaderProfile from "./profile";

const AppHeader = () => {
    return <>
        <div className="flex-row  border-gray-200 px-2 md:px-4">
            <div className="flex h-[72px] justify-between items-center">
                <button
                    className="flex justify-center items-center rounded-full w-[40px] h-[40px] bg-gray-300"
                    tabIndex="0" type="button">
                    <ProfileIcon/>
                </button>
                <div className="mt-2">
                    <AppLogoIcon/>
                </div>
                <button
                    className="flex justify-center items-center"
                    tabIndex="0" type="button">
                    <WaSupportIcon/>
                </button>
            </div>
        </div>

        <AppHeaderProfile/>

    </>
}

export default AppHeader