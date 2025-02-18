import React from "react"
import { 
    Select, 
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select"
import { format } from "date-fns"
import { ArrowLeft, CalendarIcon, Download, Menu } from "lucide-react"

import { cn } from "../../lib/utils"
import { Button } from "../ui/button"
import { Calendar } from "../ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover"
import { Graph } from "./Graph"

import { useHideSidebar } from "../store/useHideSideBar"

const MainContent = () => {

    const { isHidden, toggleSidebar } = useHideSidebar();

    const [sensor, setSensor] = React.useState("전체");
    const [averageTime, setAverageTime] = React.useState("90d");
    const [toDate, setToDate] = React.useState<Date>()
    const [fromDate, setFromDate] = React.useState<Date>()

    const formattedToDate = toDate ? new Date(new Date(toDate).setDate(toDate.getDate() + 1)).toISOString().split('T')[0] : undefined;
    const formattedFromDate = fromDate ? new Date(new Date(fromDate).setDate(fromDate.getDate() + 1)).toISOString().split('T')[0] : undefined;

    console.log(
        "sensor: ", sensor,
        " averageTime: ", averageTime,
        " fromDate: ", fromDate,
        " toDate: ", toDate
    );
    

  return (
    <div className={`relative h-full w-full bg-[#CBCBCB] pt-[60px] ${isHidden ? '' : 'xl:ml-[300px]'}`}>
        <div className="fixed w-full h-[60px] bg-[#797979] top-0 z-10 flex items-center pl-3 md:pl-5">
            {isHidden ? (
                <Menu onClick={toggleSidebar} className={`text-white cursor-pointer ${isHidden ? 'md:ml-5' : 'ml-[300px] xl:ml-0'}`} size={30}/>
            ) : (
                <ArrowLeft onClick={toggleSidebar} className={`text-white cursor-pointer ${isHidden ? 'md:ml-5' : ' ml-[300px] xl:ml-0'}`} size={30}/>
            )}
        </div>
        <div className="w-full h-full flex flex-col p-3 md:p-10 gap-5">
            <div className="flex gap-5 flex-wrap">
                
                <Select value={sensor} onValueChange={setSensor}>
                <SelectTrigger className="w-full bg-white rounded-none min-w-[200px] flex-1">
                    <SelectValue placeholder="전체" />
                </SelectTrigger>
                <SelectContent className="rounded-none">
                    <SelectItem value="전체">전체</SelectItem>
                    <SelectItem value="미세 먼지 센서(PM10)">미세 먼지 센서(PM10)</SelectItem>
                    <SelectItem value="미세 먼지 센서(PM2.5)">미세 먼지 센서(PM2.5)</SelectItem>
                    <SelectItem value="소음 센서">소음 센서</SelectItem>
                    <SelectItem value="진동">진동</SelectItem>
                    <SelectItem value="이산화탄소">이산화탄소</SelectItem>
                </SelectContent>
                </Select>

                <Select value={averageTime} onValueChange={setAverageTime}>
                <SelectTrigger className="w-full bg-white rounded-none min-w-[200px] flex-1">
                    <SelectValue placeholder="1분 평균값" />
                </SelectTrigger>
                <SelectContent className="rounded-none">
                    <SelectItem value="2d">1분 평균값</SelectItem>
                    <SelectItem value="7d">5분 평균값</SelectItem>
                    <SelectItem value="30d">30분 평균값</SelectItem>
                    <SelectItem value="90d">1시간 평균값</SelectItem>
                </SelectContent>
                </Select>

                <Popover>
                <PopoverTrigger asChild>
                    <Button
                    variant={"outline"}
                    className={cn(
                        "w-full bg-white text-black pl-2 text-left font-normal min-w-[200px] flex-1 group pr-0 py-0 rounded-none flex justify-between relative",
                        !toDate && "text-muted-foreground"
                    )}
                    >
                    {toDate ? format(toDate, "dd / MM / yy") : <span>Pick a date</span>}
                    <CalendarIcon className="!h-full !w-[40px] p-[6px] text-white bg-[#4B4B4B] group-hover:bg-[#3b3b3b] absolute right-0" size={40}/>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 rounded-none" align="start">
                    <Calendar
                    className="rounded-none"
                    mode="single"
                    selected={toDate}
                    onSelect={setToDate}
                    initialFocus
                    />
                </PopoverContent>
                </Popover>

                <Popover>
                <PopoverTrigger asChild>
                    <Button
                    variant={"outline"}
                    className={cn(
                        "w-full bg-white text-black pl-2 text-left font-normal min-w-[200px] flex-1 group pr-0 py-0 rounded-none flex justify-between relative",
                        !fromDate && "text-muted-foreground"
                    )}
                    >
                    {fromDate ? format(fromDate, "dd / MM / yy") : <span>Pick a date</span>}
                    <CalendarIcon className="!h-full !w-[40px] p-[6px] text-white bg-[#4B4B4B] group-hover:bg-[#3b3b3b] absolute right-0" size={40}/>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 rounded-none" align="start">
                    <Calendar
                    className="rounded-none"
                    mode="single"
                    selected={fromDate}
                    onSelect={setFromDate}
                    initialFocus
                    />
                </PopoverContent>
                </Popover>

                <Button className="rounded-none bg-[#4B4B4B] w-full flex justify-center min-w-[200px] flex-1 gap-3">
                    <span className="text-white">다운로드</span>
                    <Download className="text-white"/>
                </Button>

            </div>

            <Graph sensor={sensor} Atime={averageTime} toDate={formattedToDate ? new Date(formattedToDate) : undefined} fromDate={formattedFromDate ? new Date(formattedFromDate) : undefined} />
        </div>
    </div>
  )
}

export default MainContent