import styled from "styled-components"

const BannerEstilizado = styled.div`
  width: 100%;
  height: 320px;
  flex: 1;
  position: relative;

  background-image: url('/assets/banner.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border-radius: 32px;
`

const TituloBanner = styled.h1`
  font-family: 'GandhiSansRegular';
  color: #ffffff;

  font-size: 40px;
  line-height: 1.2;
  font-weight: 400;

  max-width: 301px;

  position: absolute;
  top: 50%;
  left: 8%;
  transform: translateY(-50%);

  margin: 0;
`


const Banner = () => {
  return (
    <BannerEstilizado>
        <TituloBanner>A galeria mais completa de fotos do espaço!</TituloBanner>
    </BannerEstilizado>
    
  )
}

export default Banner
