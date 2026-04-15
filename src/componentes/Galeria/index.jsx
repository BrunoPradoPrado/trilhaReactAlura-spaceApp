import styled from "styled-components"
import Titulo from "../Titulo"
import Tags from "./Tags"
import Populares from "./Populares"
import Imagem from "./Imagem"

const GaleriaContainer = styled.div`
    display: flex;

`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const SecaoFotos = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`


const Galeria = ( { fotos = [] } ) => {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <SecaoFotos>
                        {fotos.map( foto => <Imagem key={foto.id} foto={foto} />)}
                    </SecaoFotos>
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria