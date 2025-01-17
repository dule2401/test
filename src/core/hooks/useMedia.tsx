import { MOBIE_WIDTH } from "@/shared/theme/breakpoints";

export const useMedia = () => {
  const width = window.screen.width;
  const height = window.screen.height;
  const isMobie = width < MOBIE_WIDTH;
  return {
    isMobie,
    width,
    height,
  };
};
