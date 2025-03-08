import { additionalLinkData } from "../../utils/data"


const Link = () => {
  return (
    <div className="w-full bg-[#2e5da5] py-3">
            <div className={`sm:w-11/12 sm:mx-auto mx-2 grid md:grid-cols-4 gap-4 grid-cols-2`}>

                {additionalLinkData && additionalLinkData.map((item, index) => (
                    <div key={index} className=" flex items-center justify-center">
                        <div className="w-32 text-center">
                           <a href={item.link} className=" font-semibold text-[#1a1a1a] font-Josefin underline text-center">{item.title}</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Link