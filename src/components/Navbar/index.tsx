import logo from '../../assets/images/logo.png';

const Navbar = () => {
    return (
      <div className="w-full">
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

export default Navbar
