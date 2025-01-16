import Image from "next/image";
import Link from "next/link";
import { NavLinkProps } from "@/interfaces/interfaces";

const NavLink: React.FC<NavLinkProps> = ({
  src,
  href,
  title,
  className,
  isCollapsed,
  linkStyles,
  color,
  onClick,
}) => {
  return (
    <Link
      href={href}
      className={`flex w-full py-2 px-[13px] items-center gap-3 rounded cursor-pointer ${className} rounded-full`}
      onClick={onClick}
    >
      <Image
        src={src}
        alt="LinkImage"
        width="0"
        height="0"
        style={{
          width: "auto",
          height: 20,
          filter: color,
        }}
      />
      {isCollapsed ? null : (
        <p className={`text-[#666687] ${linkStyles}`}>{title}</p>
      )}
    </Link>
  );
};

export default NavLink;
