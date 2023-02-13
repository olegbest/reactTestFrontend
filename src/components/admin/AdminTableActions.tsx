import { ReactNode, useState } from 'react';
import { Link, To } from 'react-router-dom';
import DialogConfirm from 'src/components/dialogs/DialogConfirm';
import FButton, { FButtonSizes, FButtonTypes } from 'src/components/form/buttons/FButton';

export interface PropsModel {
  onDelete: () => void;
  editLink: To;
  children?: ReactNode;
}

function AdminTableActions({ onDelete, editLink, children = '' }: PropsModel) {
  const [dialog, setDialog] = useState(false);

  return (
    <>
      <Link data-testid="edit-link" to={editLink}>
        <FButton size={FButtonSizes.SMALL}>edit</FButton>
      </Link>
      <FButton size={FButtonSizes.SMALL} type={FButtonTypes.ERROR} onClick={() => setDialog(true)}>
        delete
      </FButton>
      {children}
      <DialogConfirm active={dialog} setActive={setDialog} onSure={onDelete} />
    </>
  );
}

export default AdminTableActions;
