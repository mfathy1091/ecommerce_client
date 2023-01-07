import React from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FaBolt, FaWrench } from 'react-icons/fa'


import { BsHourglassSplit, BsCalendar3 } from 'react-icons/bs'

const Container = styled.div`
  margin-top: 70px;
  @media(max-width: 768px) {
    margin: 0;
  }
`

const Row = styled.ul`
  margin: 0 10%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media(max-width: 768px) {
    margin: 0;
    flex-direction: column;
    align-items: flex-start;
  }
`

const Item = styled.li`

  flex: 1;
  margin: 0 7px;
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  background-color: #f3f6fb;

@media(max-width: 768px) {
  justify-content: space-between;
  margin: 7px 0;

}
`

const Wrapper = styled.div`
  border-radius: 50px;

  position: relative;
  width: 100%;
`
const Image = styled.div`
background-color: #fff;
img {
  object-fit: cover;

    width: 100%;
  }
`

const Bottom = styled.div`
  background-color: #666666;
  padding: 10px 20px;
`
const Left = styled.div`
  
`
const Right = styled.div`
  
`

const Overlay = styled.div`
width: 100%;
height: 100%;
padding: 40px;
position: absolute;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
`


const Title = styled.h1`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  letter-spacing: 0.5px;
`
const Subtitle = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 700;
  color: #000;
  line-height: 27px;
`


const Categories2 = () => {

  const items = [
    {
      title: "LED Display Module",
      subtitle: "SHOP NOW",
      image: "https://www.myddisplay.com/include/upload/kind/image/20180301/20180301134024_3748.jpg"
    },
    {
      title: "Outdoor Fixed LED Display",
      subtitle: "SHOP NOW",
      image: "https://www.myddisplay.com/include/upload/kind/image/20200327/20200327142536_8371.jpg"
    },
    {
      title: "Outdoor Fixed LED Display",
      subtitle: "SHOP NOW",
      image: 'https://www.myddisplay.com/include/upload/kind/image/20200515/20200515161107_9360.jpg'
    },
  ]

  return (
    <Container>
      <Row>
        {items.map((item, i) => (
          <Item>
            <Wrapper>
              <Image>
                <img src={item.image} alt="Outdoor Fixed LED Display" />
              </Image>
              <Bottom>
                <Left>
                  <Title>{item.title}</Title>
                </Left>
                <Right>

                </Right>
              </Bottom>
            </Wrapper>

            {/* <Overlay>
              <Title>{item.title}</Title>
              <Subtitle>{item.subtitle}</Subtitle>
            </Overlay> */}
          </Item>
        ))}
      </Row>
    </Container>
  )
}

export default Categories2


// https://gizmos.qodeinteractive.com/wp-content/uploads/2022/08/main-home-banner-1-img.png
// https://gizmos.qodeinteractive.com/wp-content/uploads/2022/08/main-home-banner-1-img-600x239.png
// https://gizmos.qodeinteractive.com/wp-content/uploads/2022/08/main-home-banner-1-img-300x119.png
// https://gizmos.qodeinteractive.com/wp-content/uploads/2022/08/main-home-banner-1-img-768x306.png