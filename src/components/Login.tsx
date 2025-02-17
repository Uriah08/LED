import LoginForm from "./form/LoginForm"

const Login = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
        <div className='bg-[#ffffff] max-w-[700px] w-full text-[#4b4b4b] py-20 px-5 flex flex-col items-center'>
            <h1 className="font-light text-center tracking-[8px]">삼성LED</h1>
            <h1 className="font-light text-center tracking-[8px]">Loing</h1>
            <LoginForm/>
        </div>
    </div>
  )
}

export default Login;