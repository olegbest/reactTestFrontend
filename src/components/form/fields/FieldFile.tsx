import { ChangeEvent, useState } from 'react';
import { createFile, FileModel } from 'src/store/files';
import { useAppDispatch } from 'src/store/hooks';

export interface PropsModel {
  multiple?: boolean;
  showList?: boolean;
  accept?: string;
  onChange?: (files: FileModel[]) => void;
}

function FieldFile({ multiple = false, showList = true, accept = '', onChange }: PropsModel) {
  const [list, setList] = useState<FileModel[]>();
  const dispatch = useAppDispatch();

  async function updateFiles(ev: ChangeEvent<HTMLInputElement>) {
    const files = ev.target.files;
    if (!files) return;

    const formData = new FormData();
    for (let fileKey = 0; fileKey < files.length; fileKey++) {
      formData.append('files', files[fileKey]);
    }
    const response = await dispatch(createFile(formData));
    const uploadedFiles = response.payload.length ? response.payload : [response.payload];

    setList(uploadedFiles);

    if (onChange instanceof Function) {
      onChange(uploadedFiles);
    }
  }

  function fileList() {
    if (!list?.length) return '';

    return list.map((file) => (
      <div data-testid="file" key={file.uuid}>
        {file.name}
      </div>
    ));
  }

  return (
    <>
      <input
        data-testid="input-file"
        type="file"
        multiple={multiple}
        onInput={updateFiles}
        accept={accept}
      />
      {showList && fileList()}
    </>
  );
}

export default FieldFile;
