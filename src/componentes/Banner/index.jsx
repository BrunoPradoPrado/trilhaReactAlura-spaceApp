import styled from "styled-components"

const BannerEstilizado = styled.div`
  min-height: 320px;
  flex      : 1;
  position  : relative;

  background-image   : url(${props => props.$imagem});
  background-size    : cover;
  background-position: center;
  background-repeat  : no-repeat;

  border-radius: 32px;

  @media (max-width: 768px) {
    height: 200px;
    border-radius: 16px;
  }
`

const TituloBanner = styled.h1`
  font-family: 'GandhiSansRegular';
  color      : #ffffff;

  font-size  : 40px;
  line-height: 1.2;
  font-weight: 400;

  max-width  : 301px;

  position   : absolute;
  top        : 50%;
  left       : 5%;
  transform  : translateY(-50%);

  margin     : 0;

  @media (max-width: 768px) {
    font-size: 24px;
    max-width: 90%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
  }
`


const Banner = ( { texto, imagem } ) => {
  return (
    <BannerEstilizado $imagem={imagem}>
        <TituloBanner> {texto} </TituloBanner>
    </BannerEstilizado>
    
  )
}

export default Banner
