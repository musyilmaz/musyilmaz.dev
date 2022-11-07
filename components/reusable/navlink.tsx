import Link from "next/link";
import { FC } from "react";
import classnames from "classnames";

type Props = {
  active?: boolean;
  href: string;
  content: string;
};

const NavLink: FC<Props> = ({ active = true, href, content }) => {
  if (!active) {
    return (
      <p
        className={classnames(
          "relative px-4 pb-2",
          "lg-text",
          "cursor-default"
        )}
      >
        {content} <span className="text-brand-200">(soon)</span>
      </p>
    );
  }

  return (
    <Link
      href={href}
      className={classnames(
        "relative px-4 pb-2",
        "lg-text",
        "after:absolute after:bottom-0 after:left-0 after:right-0",
        "after:h-0.5 after:w-full",
        "after:origin-center after:scale-x-0",
        "hover:after:scale-x-100",
        "after:rounded-full",
        "after:bg-brand-100",
        "after:transition-all after:duration-200 after:ease-in"
      )}
    >
      {content}
    </Link>
  );
};

export default NavLink;
