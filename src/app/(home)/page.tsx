'use client'

import md5 from 'md5';
import Link from 'next/link';
import { Key, ReactElement, JSXElementConstructor, ReactNode, PromiseLikeOfReactNode, useState } from 'react';
import { useQuery } from 'react-query';
import * as S from './style';



const baseUrl = 'http://gateway.marvel.com/v1/public/';
const publicKey = '11e730caac62943efc9f1d79cc3dbb3c';
const privateKey = 'b00204dc009935a02c974be0a04e6477c3fba9d5'

let time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

export default function Home() {
  const [page, setPage] = useState(0);
  const limit = 20;
  const offset = page * limit;

  const { isLoading, error, data } = useQuery(['marvelApi', page], () =>
    fetch(`${baseUrl}characters?ts=${time}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${offset}`).then(res =>
      res.json()
    )
  )


  if (isLoading) return (
    <S.ContainerLoading>
      <S.ElementLoading></S.ElementLoading>
    </S.ContainerLoading>
  )

  if (error) return 'An error has occurred: ' + error;

  return (
    <S.Container>
      <S.Title>Marvel Characters</S.Title>
      <S.ContainerCharacters>
        {data?.data?.results.map((character: { id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | PromiseLikeOfReactNode | null | undefined; thumbnail: { path: any; extension: any; }; }) => (
          <S.ContainerElementsCharacter>
            <S.TitleNameCharacter>{character.name}</S.TitleNameCharacter>
            <Link href={`/character/${character.id}`}>
              <S.ImageCharacter src={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
            </Link>
          </S.ContainerElementsCharacter>
        ))}
      </S.ContainerCharacters>

      <S.ContainerNumberPage>
        <S.ButtonPrevious onClick={() => setPage(old => Math.max(old - 1, 0))}>Previous Page</S.ButtonPrevious>
        <S.TitleNumberPage className='text-white'>Page {page + 1}</S.TitleNumberPage>
        <S.ButtonNext onClick={() => setPage(old => old + 1)}>Next Page</S.ButtonNext>
      </S.ContainerNumberPage>
    </S.Container>
  )
}
