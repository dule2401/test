import { useThemeSettings } from '@/shared/contexts/ThemeSettings';

export function useTheme() {
  return useThemeSettings();
}
