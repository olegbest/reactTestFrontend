import { ReactNode, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FieldImage from 'src/components/form/fields/FieldImage';
import FieldText, { TextFieldTypes } from 'src/components/form/fields/FieldText';
import FormItem from 'src/components/form/FormItem';
import FormWrapper from 'src/components/form/FormWrapper';
import { ROUTES_PATHS } from 'src/router/routes';
import { AdminProductModel } from 'src/store/admin/products';
import { FileModel } from 'src/store/files';
import { FormRulesEnum } from 'src/utils/form/FormRules';
import { ErrorsMessagesModel, validateForm } from 'src/utils/form/FormValidate';

export interface FormModel {
  title: string;
  description: string;
  imgId: number | null;
  price: number;
}

interface PropsModel {
  onCreate?: (data: FormModel) => void;
  onUpdate?: (data: FormModel) => void;
  onDelete?: () => void;
  product?: AdminProductModel | null;
  namePage?: ReactNode;
}

function FormProduct(props: PropsModel) {
  const { onCreate, onUpdate, product, namePage = '', onDelete } = props;
  const navigate = useNavigate();
  const formRules = {
    title: [{ type: FormRulesEnum.REQUIRED }],
    description: [FormRulesEnum.REQUIRED],
    imgId: [FormRulesEnum.REQUIRED],
    price: [FormRulesEnum.REQUIRED]
  };
  const [formObject, setForm] = useState<FormModel>({
    title: '',
    description: '',
    imgId: null,
    price: 0
  });

  const [errorMessages, setErrorMessages] = useState<ErrorsMessagesModel>({});
  const isEdit = useMemo(() => !!product?.id, [product]);

  useEffect(() => {
    if (!isEdit || !product) return;
    setForm({
      title: product.title,
      description: product.description,
      imgId: product.image?.id || null,
      price: product.price
    });
  }, [isEdit]);

  function changeTitle(value: string) {
    setForm({
      ...formObject,
      title: value
    });
  }
  function changeDescription(value: string) {
    setForm({
      ...formObject,
      description: value
    });
  }
  function changePrice(value: string) {
    setForm({
      ...formObject,
      price: +value
    });
  }

  function changeImage(image: FileModel | null) {
    setForm({
      ...formObject,
      imgId: image ? image.id : null
    });
  }

  function handleOnSave() {
    setErrorMessages({});

    const { isValid, messages } = validateForm(formObject, formRules);
    if (!isValid) {
      return setErrorMessages(messages);
    }
    if (isEdit && onUpdate instanceof Function) {
      return onUpdate(formObject);
    } else if (onCreate instanceof Function) {
      return onCreate(formObject);
    }
  }

  function handleOnDelete() {
    if (!(onDelete instanceof Function)) return;

    onDelete();
  }

  function handleOnCancel() {
    navigate(ROUTES_PATHS.admin.products.index);
  }

  return (
    <>
      <FormWrapper
        title={namePage}
        deleteButton={isEdit}
        onSave={handleOnSave}
        onCancel={handleOnCancel}
        onDelete={handleOnDelete}
      >
        <FormItem name="Title" errorMessage={errorMessages.title}>
          <FieldText value={formObject.title} onInput={changeTitle} />
        </FormItem>
        <FormItem name="Description" errorMessage={errorMessages.description}>
          <FieldText
            type={TextFieldTypes.TEXT_AREA}
            value={formObject.description}
            onInput={changeDescription}
          />
        </FormItem>
        <FormItem name="Picture" errorMessage={errorMessages.imgId}>
          <FieldImage value={product?.image} onChange={changeImage} />
        </FormItem>
        <FormItem name="Price" errorMessage={errorMessages.price}>
          <FieldText type={TextFieldTypes.NUMBER} value={formObject.price} onInput={changePrice} />
        </FormItem>
      </FormWrapper>
    </>
  );
}

export default FormProduct;
