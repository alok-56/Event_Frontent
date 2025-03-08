import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const NewsCard = ({ item }: { item: any }) => {
    const [link, setLink] = useState('')

    useEffect(() => { 
        if (item.title) {
            const title = item.title.replace(/\s+/g, '-')
            setLink(title)
        }
    },[])
    return (
        <div className="bg-gradient-to-br from-green-400 to-cyan-600 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] pb-1">
            <div className=" flex flex-col  m-[2px] me-[1px]  bg-white h-full">
                <div className=" w-full">
                    <img src={`${item.image}`} alt="" className="object-cover" />
                </div>
                <div className="flex flex-col px-4 py-5">
                    <h1 className=" text-[#0f2444] mb-4 text-center font-bold text-2xl">
                        {item.title}
                    </h1>
                    <h5 className=" text-gray-900 mb-4 text-center text-sm">
                        {item.Date}
                    </h5>
                    <h3 className="text text-gray-700 mb-8 text-center font-semibold">
                        {item.shortDescription}
                    </h3>
                    <div className=" w-full flex items-center justify-center mb-7">
                        <Link to={`/news/${link}`} className='flex items-center justify-center rounded bg-gradient-to-br from-green-400 to-cyan-600'>
                            <span className='flex items-center justify-center px-4 py-1 me-[2px] ms-[2px] rounded bg-white hover:bg-transparent hover:text-white'>
                                Read More
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsCard