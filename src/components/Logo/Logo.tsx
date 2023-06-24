import Link from "next/link";
import * as S from './style';

export default function Logo() {
    return (
        <div>
            <Link href={"/"}>
                <S.Logo>MARVEL</S.Logo>
            </Link>
        </div>
    )
}