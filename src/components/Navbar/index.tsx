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
      <div className="w-full flex items-center justify-between">
        <img
          src={logo}
          alt="logo"
        />
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            return (
              <a
                href={link.path}
                className={}
                key={link.title}
              >
                {link.title}
              </a>
            );
          })}
        </div>
      </div>
    );
};

export default Navbar;
