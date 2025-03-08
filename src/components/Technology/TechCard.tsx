

const TechCard = ({item}:{item : any}) => {
    return (
        <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-4 px-6 flex flex-col">
            <div className=" w-full my-4">
                <img src={`${item.image}`} alt="" className="object-cover" />
            </div>
            <h1 className="text-2xl font-semibold font-Josefin text-[#0f2444] uppercase mb-3 text-center">
                {item.title}
            </h1>
            <div className=" text-[17px] font-Josefin ">
                {item.description}
            </div>
        </div>
    )
}

export default TechCard