import NavLink from "./NavLink";
import MenuData from "./menuData";
import { m } from "framer-motion";
import { usePathname } from "next/navigation";
import { NavMenuProps } from "@/interfaces/interfaces";
import { useMemo } from "react";
import styles from "../../styles/GlobalLayout/CommonLayoutLeft.module.scss";

const NavMenu: React.FC<NavMenuProps> = ({ isCollapsed }) => {
  const pathname = usePathname();
  const menu = useMemo(() => MenuData(), []);

  return (
    <m.nav
      initial={{ width: "var(--sidebar-expanded-width)" }}
      animate={{
        width: isCollapsed ? 63 : "var(--sidebar-expanded-width)",
      }}
      transition={{
        duration: 0.2,
        type: "spring",
        stiffness: 200,
        damping: 23,
      }}
      className={styles.NavMenu}
    >
      {menu.map((item) => {
        const isActive = pathname === item.href;
        const className = `${isCollapsed ? "justify-center" : ""} ${
          isActive ? "bg-[#7C3FF9]" : "hover:bg-[#EAEAEF]"
        }`
          .trim()
          .replace(/\s+/g, " ");
        const linkStyles = isActive ? "text-white font-semibold" : "";
        const color = isActive ? "brightness(0) invert(1)" : "";


        return (
          <NavLink
            className={className}
            linkStyles={linkStyles}
            key={item.id}
            href={item.href}
            src={item.src}
            title={item.title}
            isCollapsed={isCollapsed}
            color={color}
          />
        );
      })}
    </m.nav>
  );
};

export default NavMenu;
