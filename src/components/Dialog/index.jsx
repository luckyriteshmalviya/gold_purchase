import React from "react";
import classNames from "classnames";

const Dialog = (props) => {
    return (<div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className={classNames("bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 p-6 relative", `${props.size ? props.size : "md:w-1/2" }` )}>
            {props.onClose && <button
                className="absolute top-2 right-2 font-medium text-base text-gray-600 hover:text-red-600"
                onClick={() => props.onClose()}
            >&times;</button>}
            {props.children}
        </div>
    </div>)
}
export default Dialog
