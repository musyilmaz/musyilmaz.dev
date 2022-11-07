import classNames from "classnames";
import { SyntheticEvent, useEffect, useState } from "react";

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
        "h-full w-full",
        "ml-16",
        "flex flex-col items-start justify-center"
      )}
    >
      <h4 className={classNames("h4-text")}>hi there 👋🏼</h4>
      <h1 className={classNames("h1-text")}>
        I'm <span className="text-brand-200">Mustafa</span>,
      </h1>
      <h4 className={classNames("h5-text")}>
        Let's build the future together.
      </h4>
      <div className={classNames("h-12")} />
      <button
        onClick={(e) => {
          if (!isEmailCopied) handleClick(e);
        }}
        className={classNames(
          "min-w-[300px]",
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
    </div>
  );
};

export default HomePage;
