import NavLink from "./navlink";

const Header = () => {
  return (
    <header className="flex h-14 w-full justify-between">
      <div>Logo here</div>
      <div className="flex h-full">
        <NavLink href="/bio" content="bio" active={false} />
        <NavLink href="/journal" content="journal" />
        <NavLink href="/projects" content="projects" />
      </div>
    </header>
  );
};

export default Header;
