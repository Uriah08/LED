
"use client"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart"

// const chartData = [
//     { date: "2024-04-01", data1: 222, data2: 150, data3: 180, data4: 200, data5: 170 },
//     { date: "2024-04-02", data1: 97, data2: 180, data3: 140, data4: 190, data5: 160 },
//     { date: "2024-04-03", data1: 167, data2: 120, data3: 190, data4: 220, data5: 180 },
//     { date: "2024-04-04", data1: 242, data2: 260, data3: 210, data4: 240, data5: 200 },
//     { date: "2024-04-05", data1: 373, data2: 290, data3: 260, data4: 300, data5: 270 },
//     { date: "2024-04-06", data1: 301, data2: 340, data3: 280, data4: 320, data5: 300 },
//     { date: "2024-04-07", data1: 245, data2: 180, data3: 200, data4: 220, data5: 190 },
//     { date: "2024-04-08", data1: 409, data2: 320, data3: 300, data4: 350, data5: 310 },
//     { date: "2024-04-09", data1: 59, data2: 110, data3: 120, data4: 150, data5: 130 },
//     { date: "2024-04-10", data1: 261, data2: 190, data3: 210, data4: 230, data5: 200 },
//     { date: "2024-04-11", data1: 327, data2: 350, data3: 290, data4: 310, data5: 280 },
//     { date: "2024-04-12", data1: 292, data2: 210, data3: 230, data4: 250, data5: 220 },
//     { date: "2024-04-13", data1: 342, data2: 380, data3: 340, data4: 370, data5: 330 },
//     { date: "2024-04-14", data1: 137, data2: 220, data3: 180, data4: 200, data5: 170 },
//     { date: "2024-04-15", data1: 120, data2: 170, data3: 140, data4: 180, data5: 150 },
//     { date: "2024-04-16", data1: 138, data2: 190, data3: 160, data4: 210, data5: 180 },
//     { date: "2024-04-17", data1: 446, data2: 360, data3: 310, data4: 350, data5: 320 },
//     { date: "2024-04-18", data1: 364, data2: 410, data3: 330, data4: 370, data5: 340 },
//     { date: "2024-04-19", data1: 243, data2: 180, data3: 200, data4: 230, data5: 210 },
//     { date: "2024-04-20", data1: 89, data2: 150, data3: 130, data4: 170, data5: 140 },
//     { date: '2024-05-21', data1: 82, data2: 140, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-05-22', data1: 81, data2: 120, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-05-23', data1: 252, data2: 290, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-05-24', data1: 294, data2: 220, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-05-25', data1: 201, data2: 250, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-05-26', data1: 213, data2: 170, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-05-27', data1: 420, data2: 460, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-05-28', data1: 233, data2: 190, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-05-29', data1: 78, data2: 130, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-05-30', data1: 340, data2: 280, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-05-31', data1: 178, data2: 230, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-06-01', data1: 178, data2: 200, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-06-02', data1: 470, data2: 410, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-06-03', data1: 103, data2: 160, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-06-04', data1: 439, data2: 380, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-06-05', data1: 88, data2: 140, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-06-06', data1: 294, data2: 250, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-06-07', data1: 323, data2: 370, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-06-08', data1: 385, data2: 320, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-06-09', data1: 438, data2: 480, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-06-10', data1: 155, data2: 200, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-06-11', data1: 92, data2: 150, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-06-12', data1: 492, data2: 420, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-06-13', data1: 81, data2: 130, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-06-14', data1: 426, data2: 380, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-06-15', data1: 307, data2: 350, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-06-16', data1: 371, data2: 310, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-06-17', data1: 475, data2: 520, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-06-18', data1: 107, data2: 170, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-06-19', data1: 341, data2: 290, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-06-20', data1: 408, data2: 450, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-06-21', data1: 169, data2: 210, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-06-22', data1: 317, data2: 270, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-06-23', data1: 480, data2: 530, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-06-24', data1: 132, data2: 180, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-06-25', data1: 141, data2: 190, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-06-26', data1: 434, data2: 380, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-06-27', data1: 448, data2: 490, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-06-28', data1: 149, data2: 200, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-06-29', data1: 103, data2: 160, data3: 345, data4: 345, data5: 345 },
//     { date: '2024-06-30', data1: 446, data2: 400, data3: 345, data4: 345, data5: 345 }
//   ];
  
const chartData = [
  { date: "2025-02-13T22:41:32", data1: 222, data2: 150, data3: 180, data4: 200, data5: 170 },
  { date: "2025-02-13T22:42:15", data1: 97, data2: 180, data3: 140, data4: 190, data5: 160 },
  { date: "2025-02-13T22:43:47", data1: 167, data2: 120, data3: 190, data4: 220, data5: 180 },
  { date: "2025-02-13T22:44:58", data1: 242, data2: 260, data3: 210, data4: 240, data5: 200 },
  { date: "2025-02-13T22:45:36", data1: 373, data2: 290, data3: 260, data4: 300, data5: 270 },
  { date: "2025-02-13T22:46:42", data1: 301, data2: 340, data3: 280, data4: 320, data5: 300 },
  { date: "2025-02-13T22:47:21", data1: 245, data2: 180, data3: 200, data4: 220, data5: 190 },
  { date: "2025-02-13T22:48:09", data1: 409, data2: 320, data3: 300, data4: 350, data5: 310 },
  { date: "2025-02-13T22:49:53", data1: 59, data2: 110, data3: 120, data4: 150, data5: 130 },

  { date: "2025-02-14T22:41:32", data1: 222, data2: 150, data3: 180, data4: 200, data5: 170 },
  { date: "2025-02-14T22:42:15", data1: 97, data2: 180, data3: 140, data4: 190, data5: 160 },
  { date: "2025-02-14T22:43:47", data1: 167, data2: 120, data3: 190, data4: 220, data5: 180 },
  { date: "2025-02-14T22:44:58", data1: 242, data2: 260, data3: 210, data4: 240, data5: 200 },
  { date: "2025-02-14T22:45:36", data1: 373, data2: 290, data3: 260, data4: 300, data5: 270 },
  { date: "2025-02-14T22:46:42", data1: 301, data2: 340, data3: 280, data4: 320, data5: 300 },
  { date: "2025-02-14T22:47:21", data1: 245, data2: 180, data3: 200, data4: 220, data5: 190 },
  { date: "2025-02-14T22:48:09", data1: 409, data2: 320, data3: 300, data4: 350, data5: 310 },
  { date: "2025-02-14T22:49:53", data1: 59, data2: 110, data3: 120, data4: 150, data5: 130 },

  { date: "2025-02-15T22:41:32", data1: 222, data2: 150, data3: 180, data4: 200, data5: 170 },
  { date: "2025-02-15T22:42:15", data1: 97, data2: 180, data3: 140, data4: 190, data5: 160 },
  { date: "2025-02-15T22:43:47", data1: 167, data2: 120, data3: 190, data4: 220, data5: 180 },
  { date: "2025-02-15T22:44:58", data1: 242, data2: 260, data3: 210, data4: 240, data5: 200 },
  { date: "2025-02-15T22:45:36", data1: 373, data2: 290, data3: 260, data4: 300, data5: 270 },
  { date: "2025-02-15T22:46:42", data1: 301, data2: 340, data3: 280, data4: 320, data5: 300 },
  { date: "2025-02-15T22:47:21", data1: 245, data2: 180, data3: 200, data4: 220, data5: 190 },
  { date: "2025-02-15T22:48:09", data1: 409, data2: 320, data3: 300, data4: 350, data5: 310 },
  { date: "2025-02-15T22:49:53", data1: 59, data2: 110, data3: 120, data4: 150, data5: 130 },

  { date: "2025-02-16T22:41:32", data1: 222, data2: 150, data3: 180, data4: 200, data5: 170 },
  { date: "2025-02-16T22:41:33", data1: 97, data2: 180, data3: 140, data4: 190, data5: 160 },
  { date: "2025-02-16T22:43:47", data1: 167, data2: 120, data3: 190, data4: 220, data5: 180 },
  { date: "2025-02-16T22:44:58", data1: 242, data2: 260, data3: 210, data4: 240, data5: 200 },
  { date: "2025-02-16T22:45:36", data1: 373, data2: 290, data3: 260, data4: 300, data5: 270 },
  { date: "2025-02-16T22:46:42", data1: 301, data2: 340, data3: 280, data4: 320, data5: 300 },
  { date: "2025-02-16T22:47:21", data1: 245, data2: 180, data3: 200, data4: 220, data5: 190 },
  { date: "2025-02-16T22:48:09", data1: 409, data2: 320, data3: 300, data4: 350, data5: 310 },
  { date: "2025-02-16T22:49:53", data1: 59, data2: 110, data3: 120, data4: 150, data5: 130 },

  { date: "2025-02-17T22:41:32", data1: 222, data2: 150, data3: 180, data4: 200, data5: 170 },
  { date: "2025-02-17T22:42:15", data1: 97, data2: 180, data3: 140, data4: 190, data5: 160 },
  { date: "2025-02-17T22:43:47", data1: 167, data2: 120, data3: 190, data4: 220, data5: 180 },
  { date: "2025-02-17T22:44:58", data1: 242, data2: 260, data3: 210, data4: 240, data5: 200 },
  { date: "2025-02-17T22:45:36", data1: 373, data2: 290, data3: 260, data4: 300, data5: 270 },
  { date: "2025-02-17T22:46:42", data1: 301, data2: 340, data3: 280, data4: 320, data5: 300 },
  { date: "2025-02-17T22:47:21", data1: 245, data2: 180, data3: 200, data4: 220, data5: 190 },
  { date: "2025-02-17T22:48:09", data1: 409, data2: 320, data3: 300, data4: 350, data5: 310 },
  { date: "2025-02-17T22:49:53", data1: 59, data2: 110, data3: 120, data4: 150, data5: 130 },

  { date: "2025-02-18T22:41:32", data1: 222, data2: 150, data3: 180, data4: 200, data5: 170 },
  { date: "2025-02-18T22:42:15", data1: 97, data2: 180, data3: 140, data4: 190, data5: 160 },
  { date: "2025-02-18T22:43:47", data1: 167, data2: 120, data3: 190, data4: 220, data5: 180 },
  { date: "2025-02-18T22:44:58", data1: 242, data2: 260, data3: 210, data4: 240, data5: 200 },
  { date: "2025-02-18T22:45:36", data1: 373, data2: 290, data3: 260, data4: 300, data5: 270 },
  { date: "2025-02-18T22:46:42", data1: 301, data2: 340, data3: 280, data4: 320, data5: 300 },
  { date: "2025-02-18T22:47:21", data1: 245, data2: 180, data3: 200, data4: 220, data5: 190 },
  { date: "2025-02-18T22:48:09", data1: 409, data2: 320, data3: 300, data4: 350, data5: 310 },
  { date: "2025-02-18T22:49:53", data1: 59, data2: 110, data3: 120, data4: 150, data5: 130 }
];
  

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  data1: {
    label: "미세 먼지 센서(PM10)",
    color: "#39B3FF",
  },
  data2: {
    label: "미세 먼지 센서(PM2.5)",
    color: "#FF69B4",
  },
  data3: {
    label: "소음 센서",
    color: "#FFFF00",
  },
  data4: {
    label: "진동",
    color: "#FF7A00",
  },
  data5: {
    label: "이산화탄소",
    color: "#31D1AB",
  },
} satisfies ChartConfig

interface Props {
    sensor: string
    Atime?: string
    toDate?: Date
    fromDate?: Date
}
export function Graph({ sensor, Atime, toDate, fromDate } : Props) {
    
  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);

    const referenceDate = new Date("2024-06-30T22:41:32");
    let minutesToSubtract = 24 * 60;

    if (Atime === "1h") {
        minutesToSubtract = 60;
    } else if (Atime === "30m") {
        minutesToSubtract = 30;
    } else if (Atime === "5m") {
        minutesToSubtract = 5;
    } else if (Atime === "1m") {
        minutesToSubtract = 1;
    }

    const startDate = new Date(referenceDate.getTime() - minutesToSubtract * 60 * 1000);

    let startFilterDate = fromDate ? new Date(fromDate) : startDate;
    let endFilterDate = toDate ? new Date(toDate) : new Date();

    if (startFilterDate > endFilterDate) {
      console.log("Swapping fromDate and toDate due to invalid order.");
      [startFilterDate, endFilterDate] = [endFilterDate, startFilterDate];
    }
    
    return date >= startDate && date >= startFilterDate && date <= endFilterDate;
  });

  return (
    <Card className="rounded-none border-none shadow-none h-full md:h-[700px] bg-[#2C2C2C]">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle className="text-white">Graph</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6 mt-10">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] md:h-[500px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>

                {(sensor === '미세 먼지 센서(PM10)' || sensor === '전체') && (
                    <linearGradient id="fillData1" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-data1)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-data1)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                )}
                {(sensor === '미세 먼지 센서(PM2.5)' || sensor === '전체') && (
              <linearGradient id="fillData2" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-data2)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-data2)"
                  stopOpacity={0.1}
                />
              </linearGradient>
                )}
                {(sensor === '소음 센서' || sensor === '전체') && (
              <linearGradient id="fillData3" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-data3)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-data3)"
                  stopOpacity={0.1}
                />
              </linearGradient>
                )}
                {(sensor === '진동' || sensor === '전체') && (
              <linearGradient id="fillData4" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-data4)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-data4)"
                  stopOpacity={0.1}
                />
              </linearGradient>
                )}
                {(sensor === '이산화탄소' || sensor === '전체') && (
              <linearGradient id="fillData5" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-data5)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-data5)"
                  stopOpacity={0.1}
                />
              </linearGradient>
                )}
            </defs>
            <CartesianGrid vertical={false} color="#999999" />
            <XAxis
            color="#999999"
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  minute: !Atime ? undefined : "numeric" ,
                  hour: !Atime ?  undefined : "numeric",
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      minute: "numeric",
                      hour: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            {(sensor === '이산화탄소' || sensor === '전체') && (
            <Area
              dataKey="data5"
              type="natural"
              fill="url(#fillData5)"
              stroke="var(--color-data5)"
              stackId="a"
            />
            )}
            {(sensor === '진동' || sensor === '전체') && (
            <Area
              dataKey="data4"
              type="natural"
              fill="url(#fillData4)"
              stroke="var(--color-data4)"
              stackId="a"
            />
            )}
            {(sensor === '소음 센서' || sensor === '전체') && (
            <Area
              dataKey="data3"
              type="natural"
              fill="url(#fillData3)"
              stroke="var(--color-data3)"
              stackId="a"
            />
            )}
            {(sensor === '미세 먼지 센서(PM2.5)' || sensor === '전체') && (
            <Area
              dataKey="data2"
              type="natural"
              fill="url(#fillData2)"
              stroke="var(--color-data2)"
              stackId="a"
            />
            )}
            {(sensor === '미세 먼지 센서(PM10)' || sensor === '전체') && (
            <Area
              dataKey="data1"
              type="natural"
              fill="url(#fillData1)"
              stroke="var(--color-data1)"
              stackId="a"
            />
            )}
            <ChartLegend verticalAlign="top" horizOriginX={'start'} content={<ChartLegendContent color="#ffffff"/>} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

