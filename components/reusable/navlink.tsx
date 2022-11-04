import Link from "next/link";
import { FC } from "react";

type Props = {
  active?: boolean;
  href: string;
  content: string;
};

const NavLink: FC<Props> = ({ active = true, href, content }) => {
  if (!active) {
    return (
      <p className="navlink">
        {content} <span className="">(coming soon)</span>
      </p>
    );
  }

  return (
    <Link href={href} className="navlink">
      {content}
    </Link>
  );
};

export default NavLink;
