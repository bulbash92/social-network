import loader from "../../assects/images/spinner.gif";
import React from "react";

//
// type PreloaderType = {
//     isFetching: boolean
// }

export const Preloader = () => {
    return (
        <img src={loader}/>
    )
}