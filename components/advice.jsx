
function Advice({ advice }) {


    return (
        <>
            <h6 className="text-custom-primary-neonGreen text-xs mb-4 tracking-[.3rem]">ADVICE #{advice.slip.id}</h6>
            <p className="text-custom-primary-lightCyan text-[28px]">"{advice.slip.advice}"</p>
        </>
    )
}

export default Advice