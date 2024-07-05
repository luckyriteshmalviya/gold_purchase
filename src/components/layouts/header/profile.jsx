import React from "react"
import {GiftPresentIcon} from "../../svg-icons/icons";

const AppHeaderProfile = React.memo((props) => {
    return (<div className="flex-row">
        <div className="flex my-4 justify-between">
            <h2 className="text-[22px] font-medium">Hello Devrath</h2>
            <div className="flex text-gray-800">
                <div className={"flex justify-between items-center"}>
                    <div className="text-[17px] font-medium m-0">₹0</div>
                    <div className="ml-2">
                        <GiftPresentIcon/>
                    </div>
                </div>
            </div>
        </div>
    </div>)
})

export default AppHeaderProfile