import { useMemo } from "react";
import NavLink from "../NavMenu/NavLink";
import { usePathname } from "next/navigation";
import MenuData from "../NavMenu/menuData";
import { m } from "framer-motion";

interface IBurgerMenu {
  isCollapsed: boolean;
  handleBurgerClick: () => void;
}

const BurgerMenu: React.FC<IBurgerMenu> = ({
  handleBurgerClick,
  isCollapsed,
}) => {
  const pathname = usePathname();
  const menu = useMemo(() => MenuData(), []);

  return (
    <>
      {isCollapsed && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20"
          onClick={handleBurgerClick}
        />
      )}
      <m.div
        initial={{ top: -400, left: 0 }}
        animate={{
          top: isCollapsed ? 62 : -400,
        }}
        transition={{
          duration: 0.2,
          type: "spring",
          stiffness: 200,
          damping: 23,
        }}
        className="w-[360px] absolute z-20 bg-[#F6F6F9] p-5 pt-[30px] shadow-custom rounded-b-[20px] max-[400px]:w-full"
      >
        {menu.map((item) => {
          const isActive = pathname === item.href;
          const className = `${
            isActive ? "bg-[#7C3FF9]" : "hover:bg-[#EAEAEF] bg-white"
          } rounded-full mt-2`
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
              isCollapsed={false}
              color={color}
              onClick={handleBurgerClick}
            />
          );
        })}
      </m.div>
    </>
  );
};

export default BurgerMenu;
