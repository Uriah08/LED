import { useState } from "react"
import { useHideSidebar } from "../store/useHideSideBar"
const Sidebar = () => {

  const { isHidden } = useHideSidebar()

    const [active, setActive] = useState(1)

  return (
    <div className={`w-[300px] bg-[#696969] h-[100vh] fixed flex flex-col pt-[60px] overflow-auto z-20 ${isHidden ? '-left-[300px]' : 'left-0'}`}>
        <h1 onClick={() =>setActive(1)} className={`w-full text-start pl-10 border-t border-[#4b4b4b] cursor-pointer py-3 ${active === 1 ? 'bg-[#4b4b4b] text-white' : 'text-[#9C9C9C]'}`}>출입문 - 1</h1>
        <h1 onClick={() =>setActive(2)} className={`w-full text-start pl-10 border-t border-[#4b4b4b] cursor-pointer py-3 ${active === 2 ? 'bg-[#4b4b4b] text-white' : 'text-[#9C9C9C]'}`}>출입문 - 2</h1>
        <h1 onClick={() =>setActive(3)} className={`w-full text-start pl-10 border-t border-[#4b4b4b] cursor-pointer py-3 ${active === 3 ? 'bg-[#4b4b4b] text-white' : 'text-[#9C9C9C]'}`}>출입문 - 3</h1>
        <h1 onClick={() =>setActive(4)} className={`w-full text-start pl-10 border-t border-[#4b4b4b] cursor-pointer py-3 ${active === 4 ? 'bg-[#4b4b4b] text-white' : 'text-[#9C9C9C]'}`}>출입문 - 4</h1>
        <h1 onClick={() =>setActive(5)} className={`w-full text-start pl-10 border-t border-[#4b4b4b] cursor-pointer py-3 ${active === 5 ? 'bg-[#4b4b4b] text-white' : 'text-[#9C9C9C]'}`}>출입문 - 5</h1>
        <h1 onClick={() =>setActive(6)} className={`w-full text-start pl-10 border-t border-b border-[#4b4b4b] cursor-pointer py-3 ${active === 6 ? 'bg-[#4b4b4b] text-white' : 'text-[#9C9C9C]'}`}>출입문 - 6</h1>

        <h1 className="text-white mt-10 w-full py-2 pl-3">출입문 - 1 / 소음</h1>
        <h1 className="bg-[#F44336] p-3 text-white text-center text-xs"> 85.6 dBA</h1>

        <h1 className="text-white mt-2 w-full py-2 pl-3">출입문 - 1 / 미세먼지</h1>
        <div className="flex w-full">
        <h1 className="bg-[#4AA8FF] p-3 w-full text-white text-center text-xs border-r border-[#696969]">PM 10 : 35 µg/m³</h1>
        <h1 className="bg-[#4AA8FF] p-3 w-full text-white text-center text-xs">PM 10 : 35 µg/m³</h1>
        </div>

        <h1 className="text-white mt-2 w-full py-2 pl-3">출입문 - 1 / 초미세먼지</h1>
        <div className="flex w-full">
        <h1 className="bg-[#00CE08] p-3 w-full text-white text-center text-xs border-r border-[#696969]">PM 10 : 35 µg/m³</h1>
        <h1 className="bg-[#00CE08] p-3 w-full text-white text-center text-xs">PM 10 : 35 µg/m³</h1>
        </div>

        <h1 className="text-white mt-3 w-full py-2 pl-3">출입문 - 1 / 진동</h1>
        <h1 className="bg-[#FFBB0D] p-3 text-white text-center text-xs"> 85.6 dBA</h1>

        <h1 className="text-white mt-3 w-full py-2 pl-3">출입문 - 1 / 진동</h1>
        <h1 className="bg-[#F44336] p-3 text-white text-center text-xs"> 85.6 dBA</h1>
    </div>
  )
}

export default Sidebar