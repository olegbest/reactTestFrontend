import { FormEvent } from 'react';

import CSSClasses from './styles/FieldText.module.scss';

export enum TextFieldTypes {
  TEXT = 'text',
  TEXT_AREA = 'textarea',
  NUMBER = 'number'
}

export interface PropsModel {
  type?: TextFieldTypes;
  value?: string | number;
  onInput?: (value: string) => void;
}

function FieldText(props: PropsModel) {
  const { type = TextFieldTypes.TEXT, value = '', onInput } = props;
  function handleInput(ev: FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (!(onInput instanceof Function)) return;

    onInput(ev.currentTarget.value);
  }

  return (
    <>
      {type === TextFieldTypes.TEXT_AREA ? (
        <textarea
          data-testid="field-textarea"
          className={CSSClasses.textarea}
          value={value}
          onInput={handleInput}
        />
      ) : (
        <input
          data-testid="field-input"
          className={CSSClasses.input}
          value={value}
          type={type}
          onInput={handleInput}
        />
      )}
    </>
  );
}

export default FieldText;
