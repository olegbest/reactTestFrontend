import { getErrorMessage } from 'src/utils/form/FormErrorMessages';
import {
  FormRuleModel,
  formRules,
  FormRulesEnum,
  FormRulesModel,
  isRuleModel
} from 'src/utils/form/FormRules';

export interface ErrorsMessagesModel {
  [key: string]: string;
}

export function validateForm(
  fields: unknown,
  rules: FormRulesModel
): { isValid: boolean; messages: ErrorsMessagesModel } {
  if (!(fields instanceof Object)) return { isValid: true, messages: {} };
  const messages: ErrorsMessagesModel = {};
  let isValid = true;

  Object.keys(fields).forEach((field) => {
    if (!rules[field]?.length) return;

    const rulesField = rules[field];
    rulesField.some((ruleField) => {
      let ruleType = ruleField as FormRulesEnum;
      if (isRuleModel(ruleField)) {
        ruleType = (ruleField as FormRuleModel).type;
      }
      const validateFunc = formRules[ruleType];
      if (!validateFunc) return false;

      const validateValue = validateFunc(fields[field as keyof typeof fields]);
      if (validateValue) return false;

      isValid = false;
      messages[field] = getErrorMessage(ruleType);
      return true;
    });
  });

  return { isValid, messages };
}
