"use client"
import md5 from "md5";
import { useEffect, useState } from "react";
import { FaSistrix } from "react-icons/fa6";
import * as S from "./style";
import ContainerBuscaHeroi from "@/components/ContainerBuscaHeroi/BuscaHeroi";

const baseUrl = process.env.NEXT_PUBLIC_MARVEL_API_URL;
const publicKey = process.env.NEXT_PUBLIC_MARVEL_API_KEY;
const privateKey = process.env.NEXT_PUBLIC_MARVEL_API_KEY_PRIVATE;

let time = Number(new Date());
const hash = md5(time + privateKey + publicKey);


export default function BuscarHeroi() {
    let [name, setName] = useState('');
    let [data, setData] = useState([]);

    const handleOnSubmit = (event: any) => {
        event.preventDefault();
    }

    useEffect(() => {
        if (name != '') {
            fetch(`${baseUrl}characters?nameStartsWith=${name}&orderBy=name&ts=${time}&apikey=${publicKey}&hash=${hash}`).then(res =>
                res.json()
            ).then(data => {
                setData(data.data.results);
            })
        } else {
            setData([]);
        }
    }, [name])

    return (
        <S.Container>
            <S.Form onSubmit={(event) => handleOnSubmit(event)}>
                <S.InputSearch type="text" placeholder="Search..." onChange={(event) => setName(event.target.value)} />
                <S.ButtonSearch type="submit"><FaSistrix /></S.ButtonSearch>
            </S.Form>
            <S.ContainerHerois>
                {name == '' ?
                    <S.ContainerInfoBusca>
                        <S.TitleInfoBusca>Digite o nome do Herói que deseja buscar.🚀</S.TitleInfoBusca>
                    </S.ContainerInfoBusca> :
                    <S.ContainerHeroi>
                        {data?.map((character: any) => (
                            <ContainerBuscaHeroi character={character} />
                        ))
                        }
                    </S.ContainerHeroi>
                }
            </S.ContainerHerois>
        </S.Container>
    )
}