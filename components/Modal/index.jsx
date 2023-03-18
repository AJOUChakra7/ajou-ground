import React, { useState } from "react";

export default function Modal({status, content}){
    const [showModal, setShowModal] = useState(false)
    const [showSecondModal, setShowSecondModal] = useState(false)
    return(
    <div classNmae = "fixed flex md:flex-col justify-center items-center mt-40">
        {
            showModal ? (
            <div className= "fixed mt-10 flex justify-center items-center flex-col w-72 rounded-lg shadow-xl h-auto p-2">
                <h2 className="text-base mt-2 mx-4 text-gray-400 font-semibold text-center">May your life vbe filled with success and achivements. congratulations!</h2>
                <button className="my-5 w-auto px-8 h-10 bg-blue-600 text-white rounded-md shadow hover:shadow-lg font=semibold" onClick={()=>setShowModal(false)}>close</button>
            </div>):null
        }
    </div>
    )
}

