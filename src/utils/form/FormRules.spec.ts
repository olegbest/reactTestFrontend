import { formRules, FormRulesEnum } from 'src/utils/form/FormRules';

describe('Form rules', () => {
  it("check doesn't exist rule", () => {
    expect(formRules['null' as FormRulesEnum.REQUIRED]).toBe(undefined);
  });
  it('check exist rule', () => {
    expect(formRules[FormRulesEnum.REQUIRED]).not.toBe(undefined);
  });
});
