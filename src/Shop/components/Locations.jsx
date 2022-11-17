import React from 'react'
import styled from 'styled-components'
import { MdLocationOn } from 'react-icons/md'

const Container = styled.div`
padding: 50px 20px;
  flex-direction: column;
  justify-content: space-around;
  background-color: #08081d;
`

const ContainerTitle = styled.h1`
  text-align: center;
  font-size: 16px;
  
  font-weight: 600;
  letter-spacing: 2px;
  color: rgb(220, 220, 220);
  padding-bottom: 50px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #08081d;
  @media(max-width: 768px) {
  flex-direction: column;
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
  margin: 20px;
}
`

const Title = styled.h1`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: #1abc9c;
`
const Subtitle = styled.ul`
  font-size: 16px;
  font-weight: 400;
  color: rgb(200, 200, 200);
  line-height: 27px;
  text-align: left;
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
      <ContainerTitle>
        OUR BRANCHES
      </ContainerTitle>
      <Wrapper>
        <LocationContainer>
          <Title>
            Sidi Bisher
          </Title>

          <ContactItem>
            <MdLocationOn /> 
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
            <MdLocationOn /> 
            <Subtitle>
              <li>8 Ahmed Shawky st.</li> 
              <li>Alexandria</li> 
            </Subtitle>
          </ContactItem>
        </LocationContainer>
        <LocationContainer>
          <Title>
            Sidi Krir vilage
          </Title>
          <ContactItem>
            <MdLocationOn /> 
            <Subtitle>
              <li>25 Alexandria - Matrouh st.</li> 
              <li>Alexandria</li> 
            </Subtitle>
          </ContactItem>

        </LocationContainer>
      </Wrapper>
    </Container>
  )
}

export default Locations
