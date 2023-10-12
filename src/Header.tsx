import logo from "./assets/LOGO.png"
import Button from "./component/Button"
function Header() {
  const handleClick = () =>{
    console.log("Buuton clicked")
  }
  return (
  <div className="flex w-full justify-between bg-gradient-to-r from-cyan-500 to-blue-500">
    <img src={logo} alt="logo" className="w-[45px] h-[45px] m-[5px]"/>
    <div className="text-center flex justify-center items-center">La pêche,une source de richesse</div>
    <div className="flex mt-[10px] me-[10px]"><Button onClick={handleClick} label="SE CONNECTER"/></div>
  </div>
  )
}

export default Header