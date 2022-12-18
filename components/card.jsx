"use client"

import Image from "next/image"
import dividerMobile from "../public/images/pattern-divider-mobile.svg"
import dividerDesktop from "../public/images/pattern-divider-desktop.svg"
import Dice from "./dice"
import Advice from "./advice"
import useSWRImmutable from 'swr/immutable'

const fetcher = url => fetch(url).then(r => r.json())

function Card() {

    const { data, mutate, error } = useSWRImmutable('https://api.adviceslip.com/advice', fetcher);

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <div className="bg-custom-neutral-darkGrayishBlue p-8 rounded-xl text-center relative md:w-1/3">
            <Advice advice={data} />
            <Image src={dividerMobile} alt="divider" className="md:hidden mx-auto my-8" />
            <Image src={dividerDesktop} alt="divider" className="hidden md:block mx-auto my-8" />
            <Dice onRoll={mutate} />
        </div>
    )
}

export default Card