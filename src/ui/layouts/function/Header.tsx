import { PageHeader } from "../../../shared/components";
import { styled } from "../../../shared/styles";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useRouter } from "../../../shared/hooks/useRouter";
import { useAppProvider } from "../../../shared/contexts/AppProvider";
import { useMedia } from "../../../core/hooks/useMedia";
import { MenuSidebar } from "./styles";
import Icon from "@ant-design/icons";
import {
  DotHorizontal,
  IconArrowUpRight,
  IconCrosshair,
  IconFishing,
  IconMenu,
  IconMountains,
} from "@/shared/assets/icons";
import { MenuItem } from "./Sidebar";

const MenuStyle = styled("div", {
  gap: "10px",
  display: "flex",
  alignItems: "center",
  background: "white",
  justifyContent: "space-between",
  "@media (max-width: 1400px)": {
    padding: "0 24px",
  },
  "@media (max-width: 765px)": {
    padding: "0 16px",
  },
});

const StyledBoxIconMenu = styled("div", {
  border: "1px solid #006db3",
  padding: "6px 6px",
  borderRadius: "5px",
  width: "20px",
  height: "20px",
  svg: {
    path: {
      fill: " #006db3",
    },
  },
});

const StyledHeaderBox = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  img: {
    width: "80px",
  },
  ".logo": {
    display: "flex",
    alignItems: "center",
    fontSize: "26px",
    fontWeight: "bold",
    "@media (max-width: 768px)": {
      display: "flex",
      alignItems: "center",
      fontSize: "12px",
      fontWeight: "bold",
    },
  },
});
const StyledRightBox = styled("div", {
  display: "flex",
  gap: "16px",
});
const StyledButtonArrowRight = styled("div", {
  background: "#F2542D",
  width: "64px",
  borderRadius: "33px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const Header = () => {
  const { navigate, location, search } = useRouter();
  const { updateAppProps } = useAppProvider();
  const { isMobie } = useMedia();
  const { pathname } = location;

  const [defaultPath, setDefaultPath] = useState<string>(pathname);

  const onChangePage = (e: any) => {
    navigate(e.key);
  };

  useEffect(() => {
    if (pathname) {
      if (search) {
        setDefaultPath(`${pathname}${search}`);
      } else {
        setDefaultPath(pathname);
      }
    }
  }, [pathname, search]);
  const MenuList: MenuItem[] = [
    { key: "/", label: "Titre  1" },
    { key: "/titre-2", label: "Titre  2" },
    { key: "/titre-3", label: "Titre  3" },
    { key: "/titre-4", label: "Titre  4" },
  ];

  return (
    <PageHeader>
      {/* {isMobie ? (
        <MenuStyle>
          <StyledHeaderBox>
            <div className="logo">LOGO SAMPLE</div>
            <StyledBoxIconMenu
              onClick={() => {
                updateAppProps({
                  collapsed: true,
                });
              }}
            >
              ***
            </StyledBoxIconMenu>
          </StyledHeaderBox>
        </MenuStyle>
      ) : ( */}
      <MenuSidebar>
        <div className="logo_header">LOGO SAMPLE</div>
        {!isMobie ? (
          <>
            <Menu
              mode="horizontal"
              theme="light"
              defaultSelectedKeys={[defaultPath]}
              selectedKeys={[defaultPath]}
              items={MenuList}
              onClick={onChangePage}
            />
            <StyledRightBox>
              <Icon component={IconMountains} />
              <Icon component={IconFishing} />
              <Icon component={IconCrosshair} />
              <StyledButtonArrowRight>
                <Icon component={IconArrowUpRight} />
              </StyledButtonArrowRight>
            </StyledRightBox>
          </>
        ) : (
          <Icon
            component={IconMenu}
            onClick={() => {
              updateAppProps({
                collapsed: true,
              });
            }}
          />
        )}
      </MenuSidebar>
    </PageHeader>
  );
};
