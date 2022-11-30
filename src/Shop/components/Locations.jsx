import React from 'react'
import styled from 'styled-components'
import { MdLocationOn } from 'react-icons/md'

const Container = styled.div`
  background-color: #fff;
  width: 90%;
  height: 100%;
  max-width: 1200px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media(max-width: 768px) {
    
  }
`


const Left = styled.div`
  width: 70%;
  height: 600px;
  background: url("/images/home-15.jpg") no-repeat center / cover;
  border-radius: 8px;

  @media(max-width: 768px) {

  }
`

const Right = styled.div`
  margin: -10%;
  width: 70%;
  min-height: 400px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  opacity: 1;
  border: 1px solid rgba(0, 0, 0, 0.05);
  gap: 40px;
  border-radius: 8px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);



  @media(max-width: 768px) {
    top: 50%;
    left: 0;
    right: 0;
    margin:  10% 10%;
    width: 80%;
    height: 100%;
  }
`

const ContainerTitle = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 3px;
  position: relative;

  @media(max-width: 768px) {
    font-size: 20px;

  }
`

const Wrapper = styled.div`
  display: flex;
  gap:40px;
  @media(max-width: 768px) {
    flex-direction: column;
    gap: 0px;
    
  }
`

const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 5px;
  @media(max-width: 768px) {
  justify-content: space-between;
  margin-bottom: 10px;
}
`

const Title = styled.h1`
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: #333;
  position: relative;
  margin-bottom: 20px;
  letter-spacing: 0.5px;

  ::after {
    position: absolute;
    bottom: -40%;
    content: '';
    background: var(--primary-color);
    width: 30px;
    height: 2px;
    left: 0;
  }
`

const Subtitle = styled.ul`
  > * {
    font-size: 16px;
    font-weight: 400;
    color: #333	;
    line-height: 27px;
    text-align: left;
  }
  

  @media(max-width: 768px) {
    margin: 10px 0;
  }
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgb(200, 200, 200);

  svg {
    font-size: 20px;
  }
`




const Locations = () => {
  return (
    <Container>
      <Left></Left>
      <Right>
        <ContainerTitle>
          OUR BRANCHES
        </ContainerTitle>
        <Wrapper>


          <LocationContainer>
            <Title>
              Sidi Bisher
            </Title>

            <ContactItem>
              {/* <MdLocationOn />  */}
              <Subtitle>
                <li>629 Elbkbashy Elesawy st.</li>
                <li>Alexandria</li>
              </Subtitle>
            </ContactItem>
          </LocationContainer>
          <LocationContainer>
            <Title>
              Mostafa Kamel
            </Title>
            <ContactItem>
              {/* <MdLocationOn />  */}
              <Subtitle>
                <li>8 Ahmed Shawky st.</li>
                <li>Alexandria</li>
              </Subtitle>
            </ContactItem>
          </LocationContainer>
          <LocationContainer>
            <Title>
              Agami
            </Title>
            <ContactItem>
              {/* <MdLocationOn />  */}
              <Subtitle>
                <li>25 Alexandria - Matrouh st.</li>
                <li>Alexandria</li>
              </Subtitle>
            </ContactItem>

          </LocationContainer>
        </Wrapper>
      </Right>
    </Container>
  )
}

export default Locations
