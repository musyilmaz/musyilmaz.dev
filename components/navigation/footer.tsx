import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import classNames from "classnames";
import { SOCIAL_LINKS } from "constants/constants";

const Footer = () => {
  return (
    <footer
      className={classNames(
        "flex items-center justify-between",
        "h-6 w-full",
        "mt-auto"
      )}
    >
      <div className={classNames("h-full", "ml-16", "flex items-end gap-x-8")}>
        <a href={SOCIAL_LINKS.GITHUB} target="blank" rel="noopener noreferrer">
          <FiGithub
            className={classNames(
              "cursor-pointer",
              "h-6 w-6",
              "text-brand-100 hover:text-brand-200",
              "transition-all duration-200 ease-in"
            )}
          />
        </a>
        <a href={SOCIAL_LINKS.TWITTER} target="blank" rel="noopener noreferrer">
          <FiTwitter
            className={classNames(
              "cursor-pointer",
              "h-6 w-6",
              "text-brand-100 hover:text-brand-200",
              "transition-all duration-200 ease-in"
            )}
          />
        </a>
        <a
          href={SOCIAL_LINKS.LINKEDIN}
          target="blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin
            className={classNames(
              "cursor-pointer",
              "h-6 w-6",
              "text-brand-100 hover:text-brand-200",
              "transition-all duration-200 ease-in"
            )}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
