export const REGEX_PHONE = '^0\\d{9}$';
export const REGEX_PHONE1 = '^\\d{10}$';
export const REGEX_PHONE_PREFIX = '^(0)\\(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$';
export const REGEX_PHONE_ALL = '^0\\d{9,10}$';
export const REGEX_NUMBER = '^[0-9]\\d{0,254}$';
export const REGEX_PHONE_PREFIX_2 = '^(09|03|07|08|05)+([0-9]{0,8})$';
export const NATIONAL_REGEX = '^\\d{9}(\\d{3})?$';
export const CITIZEN_REGEX = '^\\d{12}$';
export const MILITARY_REGEX = '^\\w{6}(\\w{2}|\\w{4}|\\w{6})?$'; // length = 6 or 8 or 10 or 12
export const PASSPORT_REGEX = '^\\w{6,20}$';
export const EMAIL_REGEX = '([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$';
export const BIRTH_CERTIFICATE_REGEX = '^[a-zA-Z0-9]{0,20}$';
export const POSITIVE_NUMBER_ONLY_REGEX = /^[+]?([.]\d+|\d+[.]?\d*)$/gm;
export const NUMBER_PRECISION_REGEX = (precision?: number) =>
  `^[0-9]+(.[0-9]{0,${precision || 0}})?$`;
export const REGEX_NO_HTML = '^[^><]*$';
export const VN_DICTIONARY_REGEX_STR =
  'a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s';
