import Link from 'next/link';
import * as S from './style';

interface ContainerBuscaHeroiProps {
    character: any;
}
export default function ContainerBuscaHeroi(props: ContainerBuscaHeroiProps) {
    return (
        <S.ContainerInfoCharacter>
            <S.NameCharacter>{props.character.name}</S.NameCharacter>
            <Link href={`/character/${props.character.id}`}>
                <S.ImageCharacter src={`${props.character.thumbnail.path}.${props.character.thumbnail.extension}`} />
            </Link>
        </S.ContainerInfoCharacter>
    )
}