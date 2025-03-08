// import { imageSliderData } from "../../utils/data.ts"

import ImageBar from "./ImageBar.tsx"


const Gallery = () => {

   
  return (
      <div className=" w-full bg-slate-200 py-10">
      <div className="mb-7">
        <h1 className="sm:text-4xl text-3xl font-semibold font-Josefin text-[#0f2444] text-center">
                  SOME PIC PICS!
        </h1>
        <h5 className=" sm:hidden text-gray-400 text-center text-sm">( swipe right or left to see pics )</h5>
          </div>
          <div>
              <ImageBar />
          </div>
    </div>
  )
}

export default Gallery