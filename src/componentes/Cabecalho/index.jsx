import styled     from "styled-components"
import CampoTexto from "componentes/CampoTexto"

const HeaderEstilizado = styled.header`
  padding: 4rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    max-width: 212px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    padding: 2rem 1rem;

    img {
      max-width: 160px;
    }
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