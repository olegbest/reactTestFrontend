import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FormProduct, { FormModel } from 'src/components/admin/products/FormProduct';
import { ROUTES_PATHS } from 'src/router/routes';
import { getProductById, removeProductById, updateProduct } from 'src/store/admin/products';
import { selectProduct } from 'src/store/admin/products/selectors';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';

function EditProduct() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id = '' } = useParams<{ id: string }>();
  const product = useAppSelector(selectProduct);

  useEffect(() => {
    dispatch(getProductById(id));
  }, []);
  function update(data: FormModel) {
    dispatch(updateProduct({ id, data })).then(() => {
      navigate(ROUTES_PATHS.admin.products.index);
    });
  }

  function removeProduct() {
    dispatch(removeProductById(id)).then(() => {
      navigate(ROUTES_PATHS.admin.products.index);
    });
  }

  return (
    <FormProduct
      namePage="Editing product"
      onUpdate={update}
      product={product}
      onDelete={removeProduct}
    />
  );
}

export default EditProduct;
