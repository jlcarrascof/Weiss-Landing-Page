import logo from '../../assets/images/logo.png';

const Navbar = () => {
    const navLinks = [
      {title: "Home", path: "/", active: true},
      {title: "Services", path: "/", active: false},
      {title: "Products", path: "/", active: false},
      {title: "Newsletter", path: "/", active: false},
      {title: "About", path: "/", active: false},
    ]
    return (
      <div className="w-full ">
        <img
          src={logo}
          alt="logo"
        />
      </div>
    )
}

export default Navbar
