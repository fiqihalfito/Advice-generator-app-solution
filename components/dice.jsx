"use client"

import Image from "next/image"
import dice from "../public/images/icon-dice.svg"


function Dice(props) {

    return (
        <div className="p-4 rounded-full bg-custom-primary-neonGreen absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 cursor-pointer hover:shadow-dice" onClick={async () => props.onRoll()}>
            <Image src={dice} alt="dice" />
        </div >
    )
}

export default Dice