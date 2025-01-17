import { useAppProvider } from "../../../shared/contexts/AppProvider";
import { useRouter } from "../../../shared/hooks/useRouter";
import { keyframes, styled } from "../../../shared/styles";
import { IconCloseSidebar } from "@/shared/assets/icons/IconCloseSidebar";
import { Menu, MenuProps } from "antd";
import useClickOutside from "../../../shared/hooks/useClickOutside";
import { useEffect, useRef, useState } from "react";
import { MenuSidebar } from "./styles";

const StyledSidebar = styled("div", {
  height: "100%",
  width: "100%",
  position: "fixed",
  zIndex: 100,
  top: 0,
  left: 0,
  display: "flex",
  boxShadow: "0px 0px 3px 0px #cdcdcd",
  transform: "translateX(-100%)",
  transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
  "&.open": {
    transform: "translateX(0)",
  },
  ".side_container": {
    width: "40%",
    height: "100%",
    background: "white",
    padding: "38px 0px",
    opacity: "1",
    "@media (max-width: 765px)": {
      width: "100%",
    },
    ".menu_sidebar": {
      overflowY: "auto",
      height: "90%",
      marginTop: "12px",
      ".ant-menu": {
        border: "none",
      },
    },
  },
});

const StyledSidebarRight = styled("div", {
  opacity: "0.6",
  background: "#0b0b0b",
  width: "100%",
  "@media (max-width: 765px)": {
    width: "unset",
  },
});

const moveAnimation = keyframes({
  "0%": { top: "40px" },
  "100%": { top: "12px" },
});

// Styled component cho Sidebar Header
const StyledSidebarHeader = styled("div", {
  position: "absolute",
  top: "12px",
  right: "12px",
  zIndex: "1000",
  animation: `${moveAnimation} 1s 1 forwards`,
  animationDelay: "1s hidden",
  variants: {
    isOpen: {
      true: {
        opacity: "1",
      },
      false: {
        opacity: "0",
      },
    },
  },
  "@media (min-width: 765px)": {
    svg: {
      path: {
        stroke: "white",
      },
    },
  },
});

export type MenuItem = Required<MenuProps>["items"][number];

export const Sidebar = () => {
  const ref = useRef(null);
  const { collapsed, updateAppProps } = useAppProvider();
  const { navigate, location, search } = useRouter();
  const MenuList: MenuItem[] = [
    { key: "/", label: "Titre  1" },
    { key: "/titre-2", label: "Titre  2" },
    { key: "/titre-3", label: "Titre  3" },
    { key: "/titre-4", label: "Titre  4" },
  ];

  const onChangePage = (e: any) => {
    navigate(e.key);
    if (collapsed) {
      updateAppProps({ collapsed: false });
    }
  };

  useClickOutside(ref, () => {
    if (collapsed) {
      updateAppProps({ collapsed: false });
    }
  });

  const { pathname } = location;
  const [defaultPath, setDefaultPath] = useState<string>(pathname);

  useEffect(() => {
    if (pathname) {
      if (search) {
        setDefaultPath(`${pathname}${search}`);
      } else {
        setDefaultPath(pathname);
      }
    }
  }, [pathname, search]);

  return (
    <StyledSidebar ref={ref} className={collapsed ? "open" : ""}>
      <div className="side_container">
        {collapsed && (
          <StyledSidebarHeader
            isOpen={collapsed}
            onClick={() => updateAppProps({ collapsed: false })}
          >
            <IconCloseSidebar />
          </StyledSidebarHeader>
        )}
        <MenuSidebar className="menu_sidebar">
          <Menu
            mode="inline"
            theme="light"
            defaultSelectedKeys={[defaultPath]}
            selectedKeys={[defaultPath]}
            items={MenuList}
            onClick={onChangePage}
          />
        </MenuSidebar>
      </div>
      <StyledSidebarRight />
    </StyledSidebar>
  );
};
