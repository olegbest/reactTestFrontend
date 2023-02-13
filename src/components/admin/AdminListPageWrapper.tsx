import { ReactNode } from 'react';
import { Link, To } from 'react-router-dom';
import FButton, { FButtonTypes } from 'src/components/form/buttons/FButton';

export interface PropsModel {
  title?: string;
  children: ReactNode;
  createLink: To;
}

function AdminListPageWrapper({ title = '', children, createLink }: PropsModel) {
  return (
    <>
      <h2>{title}</h2>
      <Link data-testid="create-link" to={createLink}>
        <FButton data-testid="create-button" type={FButtonTypes.PRIMARY}>
          Create
        </FButton>
      </Link>
      <div>{children}</div>
    </>
  );
}

export default AdminListPageWrapper;
