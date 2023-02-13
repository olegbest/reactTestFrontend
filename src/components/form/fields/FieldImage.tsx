import { useMemo, useState } from 'react';
import FieldFile from 'src/components/form/fields/FieldFile';
import { FileModel } from 'src/store/files';

import CSSClasses from './styles/FieldImage.module.scss';

export interface PropsModel {
  onChange?: (image: FileModel | null) => void;
  value?: FileModel;
}

function FieldImage({ onChange, value }: PropsModel) {
  const [image, setImage] = useState<FileModel | null>(null);

  const imageUrl = useMemo(() => {
    if (image) return image.url;
    if (value) return value.url;

    return '';
  }, [image, value]);

  function updateImage(files: FileModel[]) {
    if (!files || !files.length) return;

    setImage(files[0]);
    if (onChange instanceof Function) {
      onChange(files[0]);
    }
  }

  return (
    <div>
      <FieldFile showList={false} accept="image/*" onChange={updateImage} />
      {imageUrl && <img className={CSSClasses.image} src={imageUrl} alt="img" />}
    </div>
  );
}

export default FieldImage;
