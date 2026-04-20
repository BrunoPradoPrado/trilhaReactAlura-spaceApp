import styled         from "styled-components"
import Titulo         from "../Titulo"
import Tags           from "./Tags"
import Populares      from "./Populares"
import Imagem         from "./Imagem"
import BarraPopulares from "./BarraPopulares"

const GaleriaContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
  }
`

const SecaoFluida = styled.section`
  flex-grow: 1;
  margin-right: 1rem;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`

const SecaoFotos = styled.section`
  display              : grid;
  grid-template-columns: repeat(2, 1fr);
  gap                  : 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`



const Galeria = ( { fotos = [], tagSelecionada, onSelecionarTag } ) => {
    return (
        <>
            <Tags
            tagSelecionada  = {tagSelecionada}
            onSelecionarTag = {onSelecionarTag}
            />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <SecaoFotos>
                        {fotos.map( foto => <Imagem key={foto.id} foto={foto} />)}
                    </SecaoFotos>
                </SecaoFluida>
                <BarraPopulares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria