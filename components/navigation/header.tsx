import Image from "next/image";
import NavLink from "@/components/reusable/navlink";

import PageLogo from "@/assets/musyilmaz-logo.webp";

const Header = () => {
  return (
    <header className="flex h-fit w-full items-center justify-between">
      <Image
        src={PageLogo}
        alt="musyilmaz.dev personal portfolio"
        priority
        className="h-20 w-fit"
      />
      <div className="flex h-full items-start gap-x-8">
        <NavLink href="/bio" content="bio" active={false} />
        <NavLink href="/journal" content="journal" active={false} />
        <NavLink href="/projects" content="projects" active={false} />
      </div>
    </header>
  );
};

export default Header;
