import { Footer as FlowbiteFooter } from "flowbite-react";

export function Footer() {
  const footerStyles = {
    backgroundColor: '#1E90FF', // Fundo azul
    color: 'white', // Texto branco
    textAlign: 'center', // Alinhamento central
    borderTop: '5px solid white',
    marginBottom: '-20px',
  };

  const linkGroupStyles = {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px', // Espaçamento entre os links
    backgroundColor: '#1E90FF', // Cor de fundo do grupo de links
    height: '100px',
    color: 'white',
    paddingTop: '30px',
    
  };

  const linkStyles = {
    color: 'white', // Cor do texto dos links
    fontWeight: 'bold', // Texto em negrito
    textDecoration: 'none', // Remove sublinhado dos links
  };

  return (
    <FlowbiteFooter style={footerStyles}>
      <FlowbiteFooter.LinkGroup style={linkGroupStyles}>
        <FlowbiteFooter.Link href="#" style={linkStyles}>LINKS</FlowbiteFooter.Link>
        <FlowbiteFooter.Link href="#" style={linkStyles}>POLÍTICA DE PRIVACIDADE</FlowbiteFooter.Link>
        <FlowbiteFooter.Link href="#" style={linkStyles}>FALE CONOSCO</FlowbiteFooter.Link>
      </FlowbiteFooter.LinkGroup>
    </FlowbiteFooter>
  );
}

export default Footer;




