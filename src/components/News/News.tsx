


const News = () => {
   
  return (
      <div className='w-10/12 mx-auto py-10'>
          <h1 className='sm:text-4xl sm:text-start text-center text-3xl font-semibold font-Josefin text-[#0f2444] mb-7 uppercase'>
              News & Events
          </h1>
          {/* <div className='grid sm:grid-cols-3 gap-10 grid-cols-1'>
              {
                  newsEventData && newsEventData.map((item:any, index:any) => (
                      <NewsCard key={index} item={item} />
                  ))
              }
          </div> */}
      </div>
  )
}

export default News