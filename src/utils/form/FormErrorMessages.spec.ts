import { errorMessages, getErrorMessages } from 'src/utils/form/FormErrorMessages';
import { FormRulesEnum } from 'src/utils/form/FormRules';

describe('form error messages', () => {
  it('should return empty array', () => {
    expect(getErrorMessages([])).toEqual([]);
  });
  it('should return array with require error', () => {
    const required = FormRulesEnum.REQUIRED;
    expect(getErrorMessages([required])).toEqual([errorMessages[required]]);
  });
  it('should return array with default error', () => {
    expect(getErrorMessages(['not defined rule'] as unknown as FormRulesEnum[])).toEqual([
      errorMessages.default
    ]);
  });
});
