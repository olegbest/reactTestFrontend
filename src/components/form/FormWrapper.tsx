import { ReactNode, useState } from 'react';
import DialogConfirm from 'src/components/dialogs/DialogConfirm';
import FButton, { FButtonTypes } from 'src/components/form/buttons/FButton';

import CSSClasses from './FormWrapper.module.scss';

export interface PropsModel {
  title?: ReactNode;
  deleteButton?: boolean;
  onSave?: () => void;
  onCancel?: () => void;
  onDelete?: () => void;
  children: ReactNode;
}
function FormWrapper(props: PropsModel) {
  const { deleteButton = false, onSave, onDelete, onCancel, children, title = '' } = props;
  const [deleteDialog, setDeleteDialog] = useState(false);

  return (
    <div>
      <h2>{title}</h2>
      <div>{children}</div>
      <div className={CSSClasses.actions}>
        <FButton type={FButtonTypes.PRIMARY} onClick={onSave}>
          Save
        </FButton>
        {deleteButton && (
          <FButton
            data-testid="delete-button"
            type={FButtonTypes.ERROR}
            onClick={() => setDeleteDialog(true)}
          >
            Delete
          </FButton>
        )}
        <FButton data-testid="cancel-button" onClick={onCancel}>
          Cancel
        </FButton>
      </div>
      <DialogConfirm active={deleteDialog} setActive={setDeleteDialog} onSure={onDelete} />
    </div>
  );
}

export default FormWrapper;
