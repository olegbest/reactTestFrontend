import { errorMessages } from 'src/utils/form/FormErrorMessages';
import { FormRulesEnum, FormRulesModel } from 'src/utils/form/FormRules';

import { validateForm } from './FormValidate';

describe('Form validation', () => {
  const fields: unknown = {
    title: 'Test'
  };
  const rules: FormRulesModel = {
    title: [FormRulesEnum.REQUIRED]
  };
  it('check empty fields and rules', () => {
    expect(validateForm({}, {})).toEqual({ isValid: true, messages: {} });
  });
  it('check one field with success rule', () => {
    expect(validateForm(fields, rules)).toEqual({ isValid: true, messages: {} });
  });
  it('check one field with bad rule', () => {
    expect(validateForm({ title: '' }, rules)).toEqual({
      isValid: false,
      messages: { title: errorMessages[FormRulesEnum.REQUIRED] }
    });
  });
});
