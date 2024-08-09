import React from 'react'
import Container from '../Container/Container'

const Hero: React.FC = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-lg mb-[50px]">
        <div className="hero-col-one relative md:col-span-2 bg-red-500 md:h-[405px] h-[405px] rounded-[10px] max-mobile-l:h-[300px]">
          <div className='absolute right-[0px] bottom-[0px] w-[180px] h-[180px] bg-white rounded-full max-mobile-l:hidden'>
            <div className='absolute top-[15px] right-[15px] w-[150px] h-[150px] bg-blue-500 rounded-full max-mobile-l:hidden'></div>
          </div>
          {/* <h1 className='hero-title font-semibold text-[56px] text-white'>Orzuyingizdagi Uyni biz bilan tanlang</h1> */}
        </div>
        <div className="md:col-span-1 grid grid-rows-2 gap-4">
          <div className="hero-col-two relative h-[190px] rounded-[10px] max-mobile-l:h-[100px]">
            <span className='absolute top-[10px] left-[10px] bg-blue-500 font-semibold text-[16px] text-white p-[5px] rounded-[5px] max-mobile-l:text-[12px]'>“HAVAS” ЖК</span>
          </div>
          <div className="hero-col-three relative  h-[190px] rounded-[10px] max-mobile-l:h-[100px]">
            <span className='absolute top-[10px] left-[10px] bg-blue-500 font-semibold text-[16px] text-white p-[5px] rounded-[5px] max-mobile-l:text-[12px]'>“HAVAS” ЖК</span>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Hero