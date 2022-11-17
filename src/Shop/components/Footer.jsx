import React from 'react'
import styled from 'styled-components'
import { Facebook, EmailOutlined, Phone, Room } from '@material-ui/icons'
import { mobile } from "../responsive"

const Container = styled.div`
  display: flex;
  background-color: #f7f7f7;;
  /* #cabdbd */
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  ${mobile({
  flexDirection: 'column'
})}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({
  display: 'none'
})}
`

const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({
  backgroundColor: '#fff'
})}
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`
const Payment = styled.img`
  height: 30px;

`

const Footer = (props, ref) => {
  return (
    <Container ref={ref}>
      <Left>
        <Logo>CARERA</Logo>
        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Sunglasses</ListItem>
          <ListItem>Accesories</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room /> 29 elbkbashy elesawy st., Alexandria, Egypt
        </ContactItem>
        <ContactItem>
          <Phone /> (+2) 012 8083 8383
        </ContactItem>
        <ContactItem>
          <EmailOutlined /> carera.vision.alex.1@gmail.com
        </ContactItem>
        <Payment src="https://www.pngitem.com/pimgs/m/5-55223_visa-mastercard-logo-png-transparent-png.png" />
      </Right>
    </Container>

  )
}

export default React.forwardRef(Footer);