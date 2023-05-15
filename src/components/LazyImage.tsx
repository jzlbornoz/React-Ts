import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type PlaceholderValue = "blur" | "empty";


type LazyProps = {
  width: number;
  height: number;
  placeholder?: PlaceholderValue;
  onLazyLoad?: (img: HTMLImageElement) => void
};

type NextNativeImage = React.ImgHTMLAttributes<HTMLImageElement>;

type Props = NextNativeImage & LazyProps;

const LazyImage = ({ src, onLazyLoad, ...imgProps }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null); // Con el null se evitan conflictos con TS y React
  const emptyImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  const [currentSrc, setCurrentSrc] = useState<string>(emptyImage);

  useEffect(() => {
    //new observer
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      //On intersection
      if (!entry.isIntersecting || !node.current) {
        return
      }
      setCurrentSrc(src ? src : emptyImage);

      if (typeof onLazyLoad === "function") {
        onLazyLoad(node.current);
      }
    }));




    //observe
    if (node.current) {
      observer.observe(node.current);
    }
    //desconect
    return () => {
      observer.disconnect();
    }
  }, [src, onLazyLoad]);

  return (
    <Image
      ref={node}
      src={currentSrc}
      alt="Fox"
      {...imgProps}
    />
  );
};

export { LazyImage };
