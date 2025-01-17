import { Rule } from "antd/es/form";
import { maxLengthValidator } from "../utils/validator";
import { useLocales } from "./useLocales";
import { isNumber } from "lodash";

export const useCreateCustomAntdRules = () => {
  const { translate: t } = useLocales();

  const createCustomAntdRules = (
    rules: Array<{ maxLength?: number }>
  ): Rule[] => {
    return rules
      .map((r) => {
        if (!!r.maxLength && isNumber(r.maxLength)) {
          return { validator: maxLengthValidator(r.maxLength, t) } as Rule;
        }
        return null;
      })
      .filter(Boolean) as Rule[];
  };

  return { createCustomAntdRules };
};
