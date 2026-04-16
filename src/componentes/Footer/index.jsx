import styled from "styled-components"

const FooterEstilizado = styled.footer`
  background-color: #03122a;
  padding         : 24px 32px;

  display        : flex;
  align-items    : center;
  justify-content: space-between;
`

const RedesSociais = styled.div`
  display: flex;
  gap    : 24px;

  img {
    width : 24px;
    height: 24px;
    cursor: pointer;
  }
`

const TextoFooter = styled.p`
  color    : #ffffff;
  font-size: 14px;
  margin   : 0;
  opacity  : 0.8;
`

const Footer = () => {
  return (
    <FooterEstilizado>
      <RedesSociais>
        <img src = "/imagens/sociais/facebook.svg"  alt = "Facebook"  />
        <img src = "/imagens/sociais/twitter.svg"   alt = "Twitter"   />
        <img src = "/imagens/sociais/instagram.svg" alt = "Instagram" />
      </RedesSociais>

      <TextoFooter>
        Desenvolvido por Bruno do Prado - aluno Alura
      </TextoFooter>
    </FooterEstilizado>
  )
}

export default Footer