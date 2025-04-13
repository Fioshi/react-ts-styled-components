import styled from "styled-components";
import ItemNavegação from "./item-de-navegção";
import { useState } from "react";
import Item from "./item-de-navegção/Item";

const ListEstilizada = styled.ul`
list-style: none;
text-decoration: none;
color: white;
padding: 0;
margin: 0;
width: 212px;
`


const BarraLateral = () => {

    const opcoes: Item[] = [
        {
            id: 0, 
            conteudo:"Inicio",
            iconeAtivo: "imagens/assets/Desktop/icones/Home - ativo.png", 
            iconeInativo: "imagens/assets/Desktop/icones/Home - inativo.png",
        },
        {
            id: 1, 
            conteudo:"Mais vistos",
            iconeAtivo: "imagens/assets/Desktop/icones/Mais vistas - ativo.png", 
            iconeInativo: "imagens/assets/Desktop/icones/Mais vistas - inativo.png",
        },
        {
            id: 2, 
            conteudo:"Mais curtidas",
            iconeAtivo: "imagens/assets/Desktop/icones/Mais curtidas - ativo.png", 
            iconeInativo: "imagens/assets/Desktop/icones/Mais curtidas - inativo.png",
        },
        {
            id: 3, 
            conteudo:"Novas",
            iconeAtivo: "imagens/assets/Desktop/icones/Novas - ativo.png", 
            iconeInativo: "imagens/assets/Desktop/icones/Novas - inativo.png",
        },
        {
            id: 4, 
            conteudo:"Surpreenda-me",
            iconeAtivo: "imagens/assets/Desktop/icones/Surpreenda-me - ativo.png", 
            iconeInativo: "imagens/assets/Desktop/icones/Surpreenda-me - inativo.png",
        },
    ];

    const [selecionado, setSelecionado] = useState<Item>(opcoes[0])


    return (
        <aside>
            <nav>
                <ListEstilizada>
                    {opcoes.map((opcao) => (
                        <ItemNavegação
                            key={opcao.id}
                            conteudo={opcao.conteudo}
                            url={opcao.id == selecionado?.id ? opcao.iconeAtivo : opcao.iconeInativo}
                            onClick={() => setSelecionado(opcao)}
                            ativo={opcao.id == selecionado?.id ? true : false} />
                    ))}
                </ListEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral;