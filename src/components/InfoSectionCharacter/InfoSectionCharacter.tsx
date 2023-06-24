import * as S from './style';

interface InfoSectionCharacterProps {
    character: any;
}
export default function InfoSectionCharacter(props: InfoSectionCharacterProps) {
    return (
        <S.ContainerInfoSection>
            <S.TitleSection >Comics</S.TitleSection>
            <S.ContainerSection>
                {props.character.comics.items.length != 0 ? props.character.comics.items.map((comic: { name: any; }) => (
                    <S.TagName>{comic.name}</S.TagName>
                )) : <S.TagNoSection>Esse Herói não possue quadrinhos.🥲</S.TagNoSection>}
            </S.ContainerSection>

            <S.TitleSection >Series</S.TitleSection>
            <S.ContainerSection>
                {props.character.series.items.length != 0 ? props.character.series.items.map((serie: { name: any; }) => (
                    <S.TagName>{serie.name}</S.TagName>
                )) : <S.TagNoSection>Esse Herói não possue séries.🥲</S.TagNoSection>}
            </S.ContainerSection>

            <S.TitleSection >Stories</S.TitleSection>
            <S.ContainerSection>
                {props.character.stories.items.length != 0 ? props.character.stories.items.map((story: { name: any; }) => (
                    <S.TagName>{story.name}</S.TagName>
                )) : <S.TagNoSection>Esse Herói não possue histórias.🥲</S.TagNoSection>}
            </S.ContainerSection>

            <S.TitleSection >Events</S.TitleSection>
            <S.ContainerSection>
                {props.character.events.items.length != 0 ? props.character.events.items.map((event: { name: any; }) => (
                    <S.TagName>{event.name}</S.TagName>
                )) : <S.TagNoSection>Esse Herói não possue eventos.🥲</S.TagNoSection>}
            </S.ContainerSection>
        </S.ContainerInfoSection>
    )
}