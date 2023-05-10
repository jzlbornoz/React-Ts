import Image from "next/image";
import React, { useRef } from "react";

type Props = {
  url: string;
};

const RandomFoxes = ({ url }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null); // Con el null se evitan conflictos con TS y React

  return (
    <Image
      ref={node}
      src={url}
      width={350}
      height={350}
      alt="Fox"
      className="rounded"
    />
  );
};

export { RandomFoxes };
