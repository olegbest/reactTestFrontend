import FButton, { FButtonTypes } from 'src/components/form/buttons/FButton';

import DialogWrapper from './DialogWrapper';

interface PropsModel {
  onSure?: () => void;
  active?: boolean;
  setActive?: (value: boolean) => void;
}
function DialogConfirm({ onSure, active = false, setActive }: PropsModel) {
  function closeDialog() {
    if (setActive) {
      setActive(false);
    }
  }

  function handleOnSure() {
    if (onSure) onSure();
    closeDialog();
  }

  return (
    <DialogWrapper active={active} setActive={setActive} title="Are you sure?">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <FButton type={FButtonTypes.ERROR} onClick={handleOnSure}>
          Yes
        </FButton>
        <FButton data-testid="close-button" onClick={closeDialog}>
          No
        </FButton>
      </div>
    </DialogWrapper>
  );
}

export default DialogConfirm;
