import MainContent from "./containers/MainContent"
import Sidebar from "./containers/Sidebar"

const Main = () => {
  return (
    <div className="w-full flex h-screen bg-[#CBCBCB]">
        <Sidebar/>
        <MainContent/>
    </div>
  )
}

export default Main