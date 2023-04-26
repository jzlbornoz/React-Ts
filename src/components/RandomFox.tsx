import Image from 'next/image'
import React from 'react'


type Props = {
    url: string
}

const RandomFoxes = ({ url }: Props): JSX.Element => {
    return (
        <Image src={url} width={350} height={350} alt='Fox' className="rounded" />
    )
}

export { RandomFoxes }