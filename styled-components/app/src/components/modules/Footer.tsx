import styled from 'styled-components'

// interface

// styled
const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: white;
  padding: 0.5rem;
  border-top: 0.2rem solid #eee;

  p {
    width: 95%;
    text-align: right;
    color: #8b8b8b;
    opacity: 80%;
  }
`

// component
const Footer = () => {
  return (
    <FooterContainer>
      <p>Produced by &copy; yt 2022</p>
    </FooterContainer>
  )
}

export default Footer
