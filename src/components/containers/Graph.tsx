// import { Line } from "react-chartjs-2";
// import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip } from "chart.js";

// ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

// const data = [
//   { label: "25/1/01", data1: 12, data2: 15, data3: 17, data4: 12, data5: 21 },
//   { label: "25/1/02", data1: 32, data2: 30, data3: 25, data4: 23, data5: 29 },
//   { label: "25/1/03", data1: 43, data2: 39, data3: 21, data4: 27, data5: 34 },
//   { label: "25/1/04", data1: 21, data2: 29, data3: 32, data4: 29, data5: 30 },
//   { label: "25/1/05", data1: 30, data2: 27, data3: 23, data4: 22, data5: 17 },
//   { label: "25/1/06", data1: 23, data2: 32, data3: 30, data4: 21, data5: 30 },
//   { label: "25/1/07", data1: 43, data2: 21, data3: 36, data4: 40, data5: 52 },
//   { label: "25/1/08", data1: 35, data2: 49, data3: 24, data4: 12, data5: 45 },
//   { label: "25/1/09", data1: 12, data2: 33, data3: 51, data4: 33, data5: 29 },
//   { label: "25/1/10", data1: 44, data2: 27, data3: 38, data4: 54, data5: 63 },
  
// ];



// const Graph = () => {
//   return (
//     <div className="w-full h-[750px] bg-[#2C2C2C] p-10 flex gap-3 flex-col pb-20">
//       <div className="flex gap-5 text-white flex-wrap">
//         <div className="flex flex-1 max-w-[150px] w-fit gap-1 items-center">
//           <div className="size-4 bg-[#39B3FF]" />
//           <h1>미세먼지(PM10)</h1>
//         </div>
//         <div className="flex flex-1 max-w-[150px] w-fit gap-1 items-center">
//           <div className="size-4 bg-[#FF69B4]" />
//           <h1>미세먼지(PM2.5)</h1>
//         </div>
//         <div className="flex flex-1 max-w-[150px] w-fit gap-1 items-center">
//           <div className="size-4 bg-[#FFFF00]" />
//           <h1>소음</h1>
//         </div>
//         <div className="flex flex-1 max-w-[150px] w-fit gap-1 items-center">
//           <div className="size-4 bg-[#FF7A00]" />
//           <h1>진동</h1>
//         </div>
//         <div className="flex flex-1 max-w-[150px] w-fit gap-1 items-center">
//           <div className="size-4 bg-[#31D1AB]" />
//           <h1>이산화질소</h1>
//         </div>
//       </div>
//       <div className="flex justify-center items-center h-full w-full">
//       <Line
//         width={2000}
//         data={{
//           labels: data.map((item) => item.label),
//           datasets: [
//             {
//               label: "미세먼지(PM10)",
//               data: data.map((item) => item.data1),
//               backgroundColor: "#39B3FF",
//               borderColor: "#39B3FF",
//               borderWidth:1,
//               tension: 0.4,
//             },
//             {
//               label: "미세먼지(PM2.5)",
//               data: data.map((item) => item.data2),
//               backgroundColor: "#FF69B4",
//               borderColor: "#FF69B4",
//               borderWidth:1,
//               tension: 0.4,
//             },
//             {
//               label: "소음",
//               data: data.map((item) => item.data3),
//               backgroundColor: "#FFFF00",
//               borderColor: "#FFFF00",
//               borderWidth:1,
//               tension: 0.4,
//             },
//             {
//               label: "진동",
//               data: data.map((item) => item.data4),
//               backgroundColor: "#FF7A00",
//               borderColor: "#FF7A00",
//               borderWidth:1,
//               tension: 0.4,
//             },
//             {
//               label: "이산화질소",
//               data: data.map((item) => item.data5),
//               backgroundColor: "#31D1AB",
//               borderColor: "#31D1AB",
//               borderWidth:1,
//               tension: 0.4,
//             },
//           ],
//         }}
//         options={{
//           responsive: true,
//           plugins: {
//             legend: {
//               display: true,
//               position: "top",
//             },
//           },
//           scales: {
//             x: {
//               grid: {
//                 color: "rgba(255, 255, 255, 0.2)",
//               },
//             },
//             y: {
//               grid: {
//                 color: "rgba(255, 255, 255, 0.2)",
//               },
//             },
//           },
//         }}
//       />
//       </div>
//     </div>
//   );
// };

// export default Graph;
