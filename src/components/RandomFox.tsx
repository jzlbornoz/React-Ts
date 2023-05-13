import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  url: string;
};

const RandomFoxes = ({ url }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null); // Con el null se evitan conflictos con TS y React
  const emptyImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  const [src, setSrc] = useState<string>(emptyImage);

  useEffect(() => {
    //new observer
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      //On intersection
      entry.isIntersecting && setSrc(url);
    }));




    //observe
    if (node.current) {
      observer.observe(node.current);
    }
    //desconect
    return () => {
      observer.disconnect();
    }
  }, [url]);

  return (
    <Image
      ref={node}
      src={src}
      width={350}
      height={350}
      alt="Fox"
      className="rounded bg-slate-600"
    />
  );
};

export { RandomFoxes };
