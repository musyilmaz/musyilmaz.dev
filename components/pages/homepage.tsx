import { SyntheticEvent, useEffect, useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import MusyilmazdevProfile from "@/assets/musyilmazdev_profile.png";

const HomePage = () => {
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  useEffect(() => {
    if (isEmailCopied) {
      setTimeout(() => {
        setIsEmailCopied(false);
      }, 2000);
    }
  }, [isEmailCopied]);

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("musyilmaz.dev@gmail.com");
    setIsEmailCopied(true);
  };

  return (
    <div
      className={classNames(
        "relative",
        "h-full w-full",
        "ml-16",
        "flex flex-col items-start justify-center"
      )}
    >
      <h4 className={classNames("h4-text", "z-10")}>hi there 👋🏼</h4>
      <h1 className={classNames("h1-text", "z-10")}>
        I'm <span className="text-brand-200">Mustafa</span>,
      </h1>
      <h5 className={classNames("h5-text", "z-10")}>
        Let's build the future together.
      </h5>
      <div className={classNames("h-12", "z-10")} />
      <button
        onClick={(e) => {
          if (!isEmailCopied) handleClick(e);
        }}
        className={classNames(
          "min-w-[300px]",
          "z-10",
          "base-text text-brand-100",
          isEmailCopied && "bg-brand-100 text-brand-400",
          "px-12 py-4",
          "border-2 border-brand-100",
          "hover:bg-brand-100 hover:text-brand-400",
          "transition-all duration-200 ease-in"
        )}
      >
        {isEmailCopied ? "Copied" : "Let's get in touch"}
      </button>
      <div className={classNames("absolute", "bottom-20 right-48", "z-[1]")}>
        <Image
          src={MusyilmazdevProfile}
          alt="This is what mustafa is looking like"
          className={classNames("w-[400px]")}
        />
      </div>
    </div>
  );
};

export default HomePage;
