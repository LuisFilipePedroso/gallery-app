import { useRef } from "react";
import Gallery, { RefType } from "./components/Gallery";

const images = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png'
  },
  {
    src: 'https://relay.dev/img/relay.svg',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png'
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
  }
];

export default function Home() {
  const galleryRef = useRef<RefType>(null);

  const PreviousButton = () => (
    <button className="home-control-button" onClick={() => galleryRef?.current?.goToIndex(-1)}>{'<'}</button>
  )

  const NextButton = () => (
    <button className="home-control-button" onClick={() => galleryRef?.current?.goToIndex(1)}>{'>'}</button>
  )

  return (
    <div className="container">
      <h3>My Current Stack: </h3>

      <Gallery ref={galleryRef} images={images} previousButton={<PreviousButton />} nextButton={<NextButton />} />
    </div>
  )
}
