import { ReactNode } from 'react';
import { ConfigProvider } from 'antd';
//
import { useThemeSettings } from '@/shared/contexts/ThemeSettings';
import { prefixAntdCls } from '../config';
// import 'antd/dist/antd.variable.min.css'

export const AntdConfigProvider = ({ children }: { children: ReactNode }) => {
  const { theme } = useThemeSettings();

  ConfigProvider.config({
    prefixCls: prefixAntdCls,
    theme: {
      primaryColor: theme.colors.blueMB.value,
      errorColor: theme.colors.error.value,
      successColor: theme.colors.verifiedDone.value,
      warningColor: theme.colors.warning.value,
    },
  });
  return <ConfigProvider prefixCls={prefixAntdCls}>{children}</ConfigProvider>;
};
