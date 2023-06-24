"use client"
import md5 from 'md5';
import { useParams } from 'next/navigation'
import { useQuery } from 'react-query'
import * as S from './style';

const baseUrl = 'http://gateway.marvel.com/v1/public/';
const publicKey = '11e730caac62943efc9f1d79cc3dbb3c';
const privateKey = 'b00204dc009935a02c974be0a04e6477c3fba9d5'

let time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

export default function Character() {
    const params = useParams();
    const { isLoading, error, data } = useQuery(['marvelApi'], () =>
        fetch(`${baseUrl}characters/${params.id}?ts=${time}&apikey=${publicKey}&hash=${hash}`).then(res =>
            res.json()
        )
    )
    if (isLoading) return (
        <S.ContainerLoading>
            <S.ElementLoading></S.ElementLoading>
        </S.ContainerLoading>
    )
    return (
        <S.Container>
            {data?.data?.results.map((character: {
                events: any;
                stories: any;
                series: any;
                comics: any; id: any; name: any; description: any; thumbnail: { path: any; extension: any; };
            }) => (
                <S.ContainerCharacter>
                    <S.ContainerInfoCharacter>
                        <S.ImageCharacterStyle src={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
                        <S.ContainerInfo>
                            <S.NameCharacter>{character.name}</S.NameCharacter>
                            {character.description ?
                                <S.CharacterDescription>{character.description}</S.CharacterDescription> :
                                <S.CharacterNoDescription>Esse Herói não possue descrição.😢</S.CharacterNoDescription>
                            }
                            <S.ContainerInfoSection>
                                <S.TitleSection >Comics</S.TitleSection>
                                <S.ContainerSection>
                                    {character.comics.items.length != 0 ? character.comics.items.map((comic: { name: any; }) => (
                                        <S.TagName>{comic.name}</S.TagName>
                                    )) : <S.TagNoSection>Esse Herói não possue quadrinhos.🥲</S.TagNoSection>}
                                </S.ContainerSection>

                                <S.TitleSection >Series</S.TitleSection>
                                <S.ContainerSection>
                                    {character.series.items.length != 0 ? character.series.items.map((serie: { name: any; }) => (
                                        <S.TagName>{serie.name}</S.TagName>
                                    )) : <S.TagNoSection>Esse Herói não possue séries.🥲</S.TagNoSection>}
                                </S.ContainerSection>

                                <S.TitleSection >Stories</S.TitleSection>
                                <S.ContainerSection>
                                    {character.stories.items.length != 0 ? character.stories.items.map((story: { name: any; }) => (
                                        <S.TagName>{story.name}</S.TagName>
                                    )) : <S.TagNoSection>Esse Herói não possue histórias.🥲</S.TagNoSection>}
                                </S.ContainerSection>

                                <S.TitleSection >Events</S.TitleSection>
                                <S.ContainerSection>
                                    {character.events.items.length != 0 ? character.events.items.map((event: { name: any; }) => (
                                        <S.TagName>{event.name}</S.TagName>
                                    )) : <S.TagNoSection>Esse Herói não possue eventos.🥲</S.TagNoSection>}
                                </S.ContainerSection>
                            </S.ContainerInfoSection>
                        </S.ContainerInfo>
                    </S.ContainerInfoCharacter>

                </S.ContainerCharacter>
            ))}

        </S.Container>
    )
}