import React from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer';

const Slider = styled.div`
  display: flex;
  align-items: center;

  opacity: ${props=>props.inView ? '1' : '0'};
  transform: scale(${props=>props.inView ? '100%' : '85%'});
  transition: 1s;
`

const SliderImage = styled.img`
  width: 60%;
`

const SliderContent = styled.div`
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

const Slider2 = ({ imageSrc, title, subtitle, flipped }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.4,
  });
  
  const renderContent = () => {
    if(flipped) {
      return <>
        <SliderImage src={imageSrc} alt="glasses" />
        <SliderContent >
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </SliderContent>
      </>
    } else {
      return <>
        <SliderContent >
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </SliderContent>
        <SliderImage src={imageSrc} alt="glasses" />
      </>
    }
  }

  return (
    <Slider ref={ref} inView={inView}>{renderContent()}</Slider>
  )
}

export default Slider2