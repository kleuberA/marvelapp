import Logo from "../Logo/Logo";
import * as S from "./style"

export default function NavBar() {
    return (
        <S.Container>
            <S.ContainerElements>
                <S.ContainerLogo>
                    <Logo />
                </S.ContainerLogo>
                <S.ContainerItems>
                    <S.StyledLink href={"/"}>Home</S.StyledLink>
                    <S.StyledLink href={"/buscarheroi"}>Buscar Herói</S.StyledLink>
                </S.ContainerItems>
            </S.ContainerElements>
        </S.Container>
    )
}