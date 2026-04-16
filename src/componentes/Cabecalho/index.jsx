import styled     from "styled-components"
import CampoTexto from "componentes/CampoTexto"

const HeaderEstilizado = styled.header`
    padding        : 4rem 1.5rem;
    display        : flex;
    justify-content: space-between;
    img {
        max-width  : 212px;
    }
`

const Cabecalho = () => {
    return (
        <HeaderEstilizado>
            <img src = "/imagens/logo.png" alt="" />
            <CampoTexto />
        </HeaderEstilizado>
    )
}

export default Cabecalho