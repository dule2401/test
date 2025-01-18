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
import { useFetchAllInfo } from "@/core/hooks/useFetchAllInfo";

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
  const { data } = useFetchAllInfo({ revalidateOnMount: false });

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
  const MenuList: MenuItem[] = data?.head_menu?.map((item: string) => {
    return { key: `/`, label: item };
  });

  return (
    <PageHeader>
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
