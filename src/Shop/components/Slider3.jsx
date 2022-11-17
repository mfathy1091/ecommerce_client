import React from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const Slider = styled.div`
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  opacity: ${props=>props.inView ? '1' : '0'};
  transform: scale(${props=>props.inView ? '100%' : '85%'});
  transition: 1s;

  @media(max-width: 768px) {
    flex-direction: column;
  }
`

const Image = styled.img`
  width: 50%;

  @media(max-width: 768px) {
    width: 100%;
  }
`

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
`



const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 2px;
`
const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: rgb(153, 153, 153);
  line-height: 27px;
  text-align: center;
  margin: 30px 0;
  @media(max-width: 768px) {
    margin: 10px 0;
  }
`

const StyledLink = styled(Link)`
  font-size: 14px;
  font-weight: 400;
  color: rgb(153, 153, 153);
  text-decoration: underline;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: #000;
    font-weight: 500;
    border-radius: 8px;
    background-color: #cabdbd;
    padding: 8px;
    text-decoration: none;
  }
`

const Slider3 = ({ imageSrc, title, subtitle, flipped, url }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.4,
  });
  
  const renderContent = () => {
    if(flipped) {
      return <>
        <Image src={imageSrc} alt="glasses" />
        <Content >
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <StyledLink to={url}>See Details</StyledLink>
        </Content>
      </>
    } else {
      return <>
        <Content >
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <StyledLink to={url} >See Details</StyledLink>
        </Content>
        <Image src={imageSrc} alt="glasses" />
      </>
    }
  }

  return (
    <Slider ref={ref} inView={inView}>{renderContent()}</Slider>
  )
}

export default Slider3