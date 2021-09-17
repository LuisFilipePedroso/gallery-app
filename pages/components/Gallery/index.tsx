import React, { useCallback, useMemo, useState, forwardRef, useImperativeHandle } from 'react';

type ImageType = {
  src: string;
}

type Props = {
  images: ImageType[];
  previousButton?: JSX.Element;
  nextButton?: JSX.Element;
}

export type RefType = {
  currentIndex: number;
  goToIndex: (index: 1 | -1) => void;
}

const Gallery = forwardRef<RefType, Props>(({ images, previousButton: PreviousButton, nextButton: NextButton }, ref) => {
  const [index, setIndex] = useState(0);

  const goToIndex = useCallback((pageRef: 1 | -1) => {
    const newIndex = index + pageRef;

    if (newIndex < 0) {
      return;
    }

    if (newIndex >= images.length) {
      return;
    }

    setIndex(newIndex);
  }, [images.length, index])

  const hasNextImage = useMemo(() => index + 1 < images?.length, [images?.length, index])

  const Previous = () => {
    if (!PreviousButton) {
      return <button className="control-button" onClick={() => goToIndex(-1)}>{'<'}</button>
    }

    return PreviousButton;
  }

  const Next = () => {
    if (!NextButton) {
      return <button className="control-button" onClick={() => goToIndex(1)}>{'>'}</button>
    }

    return NextButton;
  }

  useImperativeHandle(ref, () => ({
    currentIndex: index,
    goToIndex
  }), [goToIndex, index])

  return (
    <div className="gallery_container">
      {index > 0 && (
        <Previous />
      )}
      <div className="image_container">
        <img className="image_container_img" src={images[index].src} alt="Imagem" />
      </div>

      {hasNextImage && (
        <Next />
      )}
    </div>
  );
})

export default Gallery