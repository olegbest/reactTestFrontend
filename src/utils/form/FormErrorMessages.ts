import { FormRulesEnum } from 'src/utils/form/FormRules';

type ErrorMessagesModel = {
  [key in FormRulesEnum]: string;
} & {
  default: string;
};
export const errorMessages: ErrorMessagesModel = {
  default: 'field error',
  [FormRulesEnum.REQUIRED]: 'field is required'
};
export function getErrorMessages(errors: FormRulesEnum[]) {
  const result: string[] = [];

  errors.forEach((err) => {
    if (Object.hasOwn(errorMessages, err)) {
      return result.push(errorMessages[err]);
    }
    return result.push(errorMessages.default);
  });

  return result;
}

export function getErrorMessage(error: FormRulesEnum) {
  const messages = getErrorMessages([error]);

  return messages[0] || '';
}
