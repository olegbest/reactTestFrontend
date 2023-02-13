export interface FormRuleModel {
  type: FormRulesEnum;
  options?: unknown;
}
export interface FormRulesModel {
  [key: string]: FormRulesEnum[] | FormRuleModel[];
}

export function isRuleModel(rule: FormRulesEnum | FormRuleModel) {
  return (rule as FormRuleModel).type !== undefined;
}

export enum FormRulesEnum {
  REQUIRED = 'required'
}

export const formRules = {
  [FormRulesEnum.REQUIRED]: (val: unknown) => !!val
};
