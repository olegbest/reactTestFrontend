import { render, screen } from '@testing-library/react';
import FieldText, { TextFieldTypes } from 'src/components/form/fields/FieldText';

describe('FieldText', () => {
  it('should exist input with default type', () => {
    render(<FieldText />);
    const input = screen.getByTestId<HTMLInputElement>('field-input');
    expect(input).toBeInTheDocument();
  });
  it('should render input with type text', () => {
    render(<FieldText />);
    const input = screen.getByTestId<HTMLInputElement>('field-input');
    expect(input.type === 'text').toBeTruthy();
  });
  it('should render input with type number', () => {
    render(<FieldText type={TextFieldTypes.NUMBER} />);
    const input = screen.getByTestId<HTMLInputElement>('field-input');
    expect(input.type === 'number').toBeTruthy();
  });
  it('should render textarea', () => {
    render(<FieldText type={TextFieldTypes.TEXT_AREA} />);
    const textarea = screen.getByTestId<HTMLTextAreaElement>('field-textarea');
    expect(textarea).toBeInTheDocument();
  });
});
