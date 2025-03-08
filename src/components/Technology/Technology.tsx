import TechCard from './TechCard.tsx'
// import { techData } from '../../utils/data.ts'
import techDataStore from '../../store/techDataStore.ts';
import { useEffect } from 'react';

const Technology = () => {
    const {technologyData,fetchData}:any = techDataStore();
    useEffect(() => {
        fetchData();
      }, [technologyData]);
    return (
        <div className='w-10/12 mx-auto py-10'>
            <h1 className='sm:text-4xl sm:text-start text-center text-3xl font-semibold font-Josefin text-[#0f2444] mb-7'>
                TECHNOLOGY
            </h1>
            <div className='grid sm:grid-cols-3 gap-10 grid-cols-1'>
                {
                    technologyData && technologyData.map((item:any, index:any) => (
                        <TechCard key={index} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Technology