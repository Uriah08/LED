import MainContent from "./containers/MainContent"
import Sidebar from "./containers/Sidebar"

const Main = () => {
  return (
    <div className="w-full flex h-full bg-[#CBCBCB]">
        <Sidebar/>
        <MainContent/>
    </div>
  )
}

export default Main