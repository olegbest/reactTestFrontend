import { useEffect } from 'react';
import AdminListPageWrapper from 'src/components/admin/AdminListPageWrapper';
import AdminTable, { RowModel } from 'src/components/admin/AdminTable';
import AdminTableActions from 'src/components/admin/AdminTableActions';
import { ROUTES_PATHS } from 'src/router/routes';
import { getProducts, removeProductById } from 'src/store/admin/products';
import { selectProducts } from 'src/store/admin/products/selectors';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';

function AdminProducts() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const columns = ['id', 'title', 'description'];
  const headers: string[] = ['ID', 'Name', 'Description'];

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  function removeProduct(id: string | number) {
    dispatch(removeProductById(String(id))).then(() => {
      dispatch(getProducts());
    });
  }

  function actions(row: RowModel) {
    const editLink = `${ROUTES_PATHS.admin.products.edit}/${row.id}`;

    return <AdminTableActions onDelete={() => removeProduct(row.id)} editLink={editLink} />;
  }

  return (
    <div data-testid="admin-products-list-page">
      <AdminListPageWrapper title="Products list" createLink={ROUTES_PATHS.admin.products.create}>
        <AdminTable data={products} columns={columns} headers={headers} actionsNode={actions} />
      </AdminListPageWrapper>
    </div>
  );
}

export default AdminProducts;
