import { useNavigate } from 'react-router-dom';
import FormProduct, { FormModel } from 'src/components/admin/products/FormProduct';
import { ROUTES_PATHS } from 'src/router/routes';
import { createProduct } from 'src/store/admin/products';
import { useAppDispatch } from 'src/store/hooks';

function CreateProduct() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  function create(data: FormModel) {
    dispatch(createProduct(data)).then(() => {
      navigate(ROUTES_PATHS.admin.products.index);
    });
  }

  return <FormProduct data-testid="create-product" namePage="Creating product" onCreate={create} />;
}

export default CreateProduct;
