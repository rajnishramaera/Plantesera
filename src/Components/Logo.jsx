import "./HeaderTwo.css"
import logoImage from "@assets/images/logo.png"

const Logo = () => {
  return (
    <img
      loading="lazy"
      src={logoImage}
      alt="logo"
      className="max-w-auto h-auto mt-1"
    />
  )
}

export default Logo
