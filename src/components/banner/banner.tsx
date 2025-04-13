import styled from "styled-components"

const BannerEstilizado = styled.figure<{url : string}>`
background-image: url(${(props) => props.url});
flex-grow: 1;
background-repeat: no-repeat;
display: flex;
align-items: center;
min-height: 328px;
margin: 0;
border-radius: 20px;
max-width: 100%;
background-size: cover;
width: 50vw;
`

const LegendaEstilizada = styled.figcaption`
font-weight: 400;
font-size: 40px;
line-height: 48px;
color: #FFFFFF;
max-width: 300px;
padding: 0 64px;
font-family: "Gand-regular", sans-serif;
`

function Banner () {
    return(
        <BannerEstilizado url="/imagens/banner.png">
            <LegendaEstilizada>A galeria mais completa de fotos do espaço!</LegendaEstilizada>
        </BannerEstilizado>
    )
}

export default Banner