import { ErrorBuilder } from './errorBuilder';
import { NUMBER_PRECISION_REGEX, POSITIVE_NUMBER_ONLY_REGEX } from '../constants/regex';
//
import type { Rule, RuleObject } from 'antd/es/form';
import type { StoreValue } from 'antd/es/form/interface';
import type { Maybe } from '../types';    

export const validateMaxLength = (maxLength: number) => (v: Maybe<string | number>) => {
  return v && v.toString().length > maxLength
    ? new ErrorBuilder().invalid({ message: 'validation_message.max_length' }).state
    : new ErrorBuilder().valid().state;
};

export const validateMinLength = (length: number) => (v: Maybe<string | number>) => {
  return v && v.toString().length < length
    ? new ErrorBuilder().invalid({ message: 'validation_message.min_length' }).state
    : new ErrorBuilder().valid().state;
};

type Validator = (
  rule: RuleObject,
  value: StoreValue,
  callback: (error?: string) => void,
) => Promise<void | any> | void;

export const maxLengthValidator =
  (maxLength: number, t: (s: string) => string = (s) => s): Validator =>
  (_v, v) => {
    if (!v || !maxLength) return Promise.resolve();
    const { error, message } = validateMaxLength(maxLength)(v);
    return error ? Promise.reject(t(message).replace('$maxL', `${maxLength}`)) : Promise.resolve();
  };

export const minLengthValidator =
  (minLength: number, t: (s: string) => string = (s) => s): Validator =>
  (_v, v) => {
    if (!v || !minLength) return Promise.resolve();
    const { error, message } = validateMinLength(minLength)(v);
    return error ? Promise.reject(t(message).replace('$minL', `${minLength}`)) : Promise.resolve();
  };

export const dateFormatValidator =
  (t: (s: string) => string = (s) => s): Validator =>
  (_v, v) => {
    if (!v) return Promise.resolve();

    return v?.toString() === 'Invalid Date'
      ? Promise.reject(
          t('validation_message.invalid_date_format').replace('$dFormat', 'DD/MM/YYYY'),
        )
      : Promise.resolve();
  };

export const dateTimeFormatValidator =
  (t: (s: string) => string = (s) => s): Validator =>
  (_v, v) => {
    if (!v) return Promise.resolve();

    return v?.toString() === 'Invalid Date'
      ? Promise.reject(
          t('validation_message.invalid_date_format').replace('$dFormat', 'DD/MM/YYY HH:MM'),
        )
      : Promise.resolve();
  };

export const numberPrecisionRule = (
  precision: number,
  t: (s: string) => string = (s) => s,
): Rule => ({
  pattern: new RegExp(NUMBER_PRECISION_REGEX(precision)),
  message: t('validation_message.number_precision_regex').replace(
    '$precision',
    precision.toString(),
  ),
});

export const positiveNumberOnly = (t: (s: string) => string = (s) => s): Rule => ({
  pattern: POSITIVE_NUMBER_ONLY_REGEX,
  message: t('validation_message.number_only'),
  validateTrigger: ['onChange'],
});

export const requiredRule = (t: (s: string) => string = (s) => s): Rule => ({
  required: true,
  message: t('validation_message.required'),
});

export const requiredWithDefaultRule =
  (t: (s: string) => string = (s) => s) =>
  (defaultValue: string): Rule => {
    return {
      validator(_, value) {
        return defaultValue === value
          ? Promise.reject(t('validation_message.required'))
          : Promise.resolve();
      },
    };
  };
