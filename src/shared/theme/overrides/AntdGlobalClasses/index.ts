import { NotificationClasses } from './Notification';
import { SelectClasses } from './Select';

export const globalOverridenAntdStyles = {
  ...SelectClasses,
  ...NotificationClasses
};
