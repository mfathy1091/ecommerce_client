import React, { useState, useEffect } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { publicAxios } from '../api'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 50px;
  height: 100%;

@media (max-width: 768px) {
  padding: 30px 10px;
}
`

const ContainerTitle = styled.div`
  margin: 20px 20px 60px 20px;
`

const Title = styled.h1`
  display: inline-block;
  color: var(--primary-text-color);
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
  position:relative;
  font-family: 'Nunito', sans-serif;

  ::after {
    position: absolute;
    bottom: -35%;
    content: '';
    background: var(--primary-text-color);
    width: 40px;
    height: 3px;
    left: 0;
    right: 0;
    margin: auto;
  }
`

const StyledCarousel = styled(Carousel)`
  width: 100%;
  padding-bottom: 20px;
  ul {
    li {
      display: flex;
      justify-content: space-around;
      padding-left: 5px;
      padding-right: 5px;
    }
  }

  button:nth-child(2), button:nth-child(3) {
    :before {
      color: black;
    }
    :hover {
      background-color: rgba(0, 0, 0, 0.25);
    }
  }

  button:nth-child(2) {
    left: 0;
    z-index: 1;
  }

  button:nth-child(3) {
    right: 0;
    z-index: 1;
  }


`


const ContractItem = styled.div`
  max-height: 120px;
  max-width: 120px;
`


const Image = styled.img`
  object-fit: contain;
  height: 100%;
`

const ContractSlider = () => {

  const items = [
    { image: '/images/contracts/1.jpeg' },
    { image: '/images/contracts/2.jpeg' },
    { image: '/images/contracts/3.jpeg' },
    { image: '/images/contracts/4.jpeg' },
    { image: '/images/contracts/5.jpeg' },
    { image: '/images/contracts/6.jpeg' },
    { image: '/images/contracts/axa.png' },
    { image: '/images/contracts/med-right.png' },
  ]

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return (
    <Container>
      <ContainerTitle>
        <Title>contracts</Title>
      </ContainerTitle>
      <StyledCarousel
        swipeable={true}
        responsive={responsive}
        infinite={true}
        showDots={true}
        autoPlay={false}
        autoPlaySpeed={3000}
      >
        {items.map((item, i) => (
          <ContractItem key={i}>
            <Image src={item.image} key={i} />
          </ContractItem>
        ))}
      </StyledCarousel>
    </Container>

// <div class="swiper-container js-promotion-impression banner-contain swiper-activated item-5 swiper-container-initialized swiper-container-horizontal swiper-container-rtl" data-swiper="mainSlider" id="main-slider">
// <div class="swiper-wrapper" style="transform: translate3d(8640px, 0px, 0px); transition-duration: 300ms;"><div class="swiper-slide swiper-slide-duplicate slide-active swiper-slide-duplicate-active" onclick="ACC.gtm.gtmPromotionClick('8798485218364','','11','HOLIDAY_EDIT_WOMEN');window.location='-c-fo-female';" style="cursor: pointer; width: 1728px;" data-order="4" data-swiper-slide-index="4">
//         <div class="banner bnr-full-img bnr-left">
//               <div class="bnr-media">
//                 <picture>
//                   <source media="(max-width: 767px)" data-srcset="https://img-cdn.magrabi.com/medias/sys_master/root/h05/h1c/9023603441694/Magrabi_HolidayEdit_Ecomm_Banners_Mobile_768x900px_Ar-12/Magrabi-HolidayEdit-Ecomm-Banners-Mobile-768x900px-Ar-12.png 1x, https://img-cdn.magrabi.com/medias/sys_master/root/h05/h1c/9023603441694/Magrabi_HolidayEdit_Ecomm_Banners_Mobile_768x900px_Ar-12/Magrabi-HolidayEdit-Ecomm-Banners-Mobile-768x900px-Ar-12.png 2x">
//                     <source media="(min-width: 1366px)" data-srcset="https://img-cdn.magrabi.com/medias/sys_master/root/h66/he2/9023601803294/Magrabi_HolidayEdit_Ecomm_Banners_Desktop_2048x750px_Ar-09/Magrabi-HolidayEdit-Ecomm-Banners-Desktop-2048x750px-Ar-09.png 1x, https://img-cdn.magrabi.com/medias/sys_master/root/h66/he2/9023601803294/Magrabi_HolidayEdit_Ecomm_Banners_Desktop_2048x750px_Ar-09/Magrabi-HolidayEdit-Ecomm-Banners-Desktop-2048x750px-Ar-09.png 2x">
//                     <source media="(min-width: 1024px)" data-srcset="https://img-cdn.magrabi.com/medias/sys_master/root/hcd/h7b/9023602720798/Magrabi_HolidayEdit_Ecomm_Banners_Tablet_Landscape_1366x700px_Ar-11/Magrabi-HolidayEdit-Ecomm-Banners-Tablet-Landscape-1366x700px-Ar-11.png 1x, https://img-cdn.magrabi.com/medias/sys_master/root/hcd/h7b/9023602720798/Magrabi_HolidayEdit_Ecomm_Banners_Tablet_Landscape_1366x700px_Ar-11/Magrabi-HolidayEdit-Ecomm-Banners-Tablet-Landscape-1366x700px-Ar-11.png 2x">
//                     <source media="(min-width: 768px)" data-srcset="https://img-cdn.magrabi.com/medias/sys_master/root/h6e/h89/9023602327582/Magrabi_HolidayEdit_Ecomm_Banners_Tablet_Portrait_1024x660px_Ar-10/Magrabi-HolidayEdit-Ecomm-Banners-Tablet-Portrait-1024x660px-Ar-10.png 1x, https://img-cdn.magrabi.com/medias/sys_master/root/h6e/h89/9023602327582/Magrabi_HolidayEdit_Ecomm_Banners_Tablet_Portrait_1024x660px_Ar-10/Magrabi-HolidayEdit-Ecomm-Banners-Tablet-Portrait-1024x660px-Ar-10.png 2x">
//                     <img class="lazy" data-src="https://img-cdn.magrabi.com/medias/sys_master/root/h66/he2/9023601803294/Magrabi_HolidayEdit_Ecomm_Banners_Desktop_2048x750px_Ar-09/Magrabi-HolidayEdit-Ecomm-Banners-Desktop-2048x750px-Ar-09.png" alt="HOLIDAY_EDIT_WOMEN" style="width: 100%;">
//                   </picture>
//               </div>
//           <div class="bnr-body">
//             <div class="bnr-header">
//               <div class="bnr-title"></div>
//               <div class="bnr-button">
//                 </div>
//             </div>
//           </div>
//         </div>
//       </div>
//   <div class="swiper-slide swiper-slide-duplicate-next" onclick="ACC.gtm.gtmPromotionClick('8798518182972','','1','YEC_SA_SUN');window.location='-c-gc-yecsa';" style="cursor: pointer; width: 1728px;" data-order="0" data-swiper-slide-index="0">
//         <div class="banner bnr-full-img bnr-left">
//               <div class="bnr-media">
//                 <picture>
//                   <source media="(max-width: 767px)" srcset="https://img-cdn.magrabi.com/medias/sys_master/root/h02/hfe/9026321874974/YEC_AR_Ecomm_SUN_Mobile_768x900/YEC-AR-Ecomm-SUN-Mobile-768x900.png 1x, https://img-cdn.magrabi.com/medias/sys_master/root/h02/hfe/9026321874974/YEC_AR_Ecomm_SUN_Mobile_768x900/YEC-AR-Ecomm-SUN-Mobile-768x900.png 2x">
//                     <source media="(min-width: 1366px)" srcset="https://img-cdn.magrabi.com/medias/sys_master/root/h41/hfd/9026321809438/YEC_AR_Ecomm_SUN_Desktop_2048x750/YEC-AR-Ecomm-SUN-Desktop-2048x750.png 1x, https://img-cdn.magrabi.com/medias/sys_master/root/h41/hfd/9026321809438/YEC_AR_Ecomm_SUN_Desktop_2048x750/YEC-AR-Ecomm-SUN-Desktop-2048x750.png 2x">
//                     <source media="(min-width: 1024px)" srcset="https://img-cdn.magrabi.com/medias/sys_master/root/heb/hfe/9026321940510/YEC_AR_Ecomm_SUN_TabletLandscape_1366x700/YEC-AR-Ecomm-SUN-TabletLandscape-1366x700.png 1x, https://img-cdn.magrabi.com/medias/sys_master/root/heb/hfe/9026321940510/YEC_AR_Ecomm_SUN_TabletLandscape_1366x700/YEC-AR-Ecomm-SUN-TabletLandscape-1366x700.png 2x">
//                     <source media="(min-width: 768px)" srcset="https://img-cdn.magrabi.com/medias/sys_master/root/h42/hb4/9026322006046/YEC_AR_Ecomm_SUN_TabletPortrait_1024x660/YEC-AR-Ecomm-SUN-TabletPortrait-1024x660.png 1x, https://img-cdn.magrabi.com/medias/sys_master/root/h42/hb4/9026322006046/YEC_AR_Ecomm_SUN_TabletPortrait_1024x660/YEC-AR-Ecomm-SUN-TabletPortrait-1024x660.png 2x">
//                     <img src="https://img-cdn.magrabi.com/medias/sys_master/root/h41/hfd/9026321809438/YEC_AR_Ecomm_SUN_Desktop_2048x750/YEC-AR-Ecomm-SUN-Desktop-2048x750.png" alt="YEC_SA_SUN" style="width: 100%;">
//                   </picture>
//               </div>
//           <div class="bnr-body">
//             <div class="bnr-header">
//               <div class="bnr-title"></div>
//               <div class="bnr-button">
//                 </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div class="swiper-slide" onclick="ACC.gtm.gtmPromotionClick('8798518117436','','3','YEC_SA_CL');window.location='-c-gc-yecsacl';" style="cursor: pointer; width: 1728px;" data-order="1" data-swiper-slide-index="1">
//         <div class="banner bnr-full-img bnr-left">
//               <div class="bnr-media">
//                 <picture>
//                   <source media="(max-width: 767px)" srcset="https://img-cdn.magrabi.com/medias/sys_master/root/hfc/h97/9026322890782/YEC_AR_Ecomm_CL_Mobile_768x900/YEC-AR-Ecomm-CL-Mobile-768x900.png 1x, https://img-cdn.magrabi.com/medias/sys_master/root/hfc/h97/9026322890782/YEC_AR_Ecomm_CL_Mobile_768x900/YEC-AR-Ecomm-CL-Mobile-768x900.png 2x">
//                     <source media="(min-width: 1366px)" srcset="https://img-cdn.magrabi.com/medias/sys_master/root/hbc/h98/9026322825246/YEC_AR_Ecomm_CL_Desktop_2048x750/YEC-AR-Ecomm-CL-Desktop-2048x750.png 1x, https://img-cdn.magrabi.com/medias/sys_master/root/hbc/h98/9026322825246/YEC_AR_Ecomm_CL_Desktop_2048x750/YEC-AR-Ecomm-CL-Desktop-2048x750.png 2x">
//                     <source media="(min-width: 1024px)" srcset="https://img-cdn.magrabi.com/medias/sys_master/root/hfd/h94/9026322956318/YEC_AR_Ecomm_CL_TabletLandscape_1366x700/YEC-AR-Ecomm-CL-TabletLandscape-1366x700.png 1x, https://img-cdn.magrabi.com/medias/sys_master/root/hfd/h94/9026322956318/YEC_AR_Ecomm_CL_TabletLandscape_1366x700/YEC-AR-Ecomm-CL-TabletLandscape-1366x700.png 2x">
//                     <source media="(min-width: 768px)" srcset="https://img-cdn.magrabi.com/medias/sys_master/root/h41/h4a/9026323021854/YEC_AR_Ecomm_CL_TabletPortrait_1024x660/YEC-AR-Ecomm-CL-TabletPortrait-1024x660.png 1x, https://img-cdn.magrabi.com/medias/sys_master/root/h41/h4a/9026323021854/YEC_AR_Ecomm_CL_TabletPortrait_1024x660/YEC-AR-Ecomm-CL-TabletPortrait-1024x660.png 2x">
//                     <img class="lazy loaded" alt="YEC_SA_CL" style="width: 100%;" data-ll-status="loaded" src="https://img-cdn.magrabi.com/medias/sys_master/root/hbc/h98/9026322825246/YEC_AR_Ecomm_CL_Desktop_2048x750/YEC-AR-Ecomm-CL-Desktop-2048x750.png">
//                   </picture>
//               </div>
//           <div class="bnr-body">
//             <div class="bnr-header">
//               <div class="bnr-title"></div>
//               <div class="bnr-button">
//                 </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div class="swiper-slide" onclick="ACC.gtm.gtmPromotionClick('8798518543420','','6','YEC_RAYBAN_SA');window.location='-c-gc-yecraybansa';" style="cursor: pointer; width: 1728px;" data-order="2" data-swiper-slide-index="2">
//         <div class="banner bnr-full-img bnr-left">
//               <div class="bnr-media">
//                 <picture>
//                   <source media="(max-width: 767px)" srcset="https://img-cdn.magrabi.com/medias/sys_master/root/ha8/h13/9027206021150/Magrabi_RAYBAN_30OFF_Ecomm_Mobile_768x900px_Ar/Magrabi-RAYBAN-30OFF-Ecomm-Mobile-768x900px-Ar.png 1x, https://img-cdn.magrabi.com/medias/sys_master/root/ha8/h13/9027206021150/Magrabi_RAYBAN_30OFF_Ecomm_Mobile_768x900px_Ar/Magrabi-RAYBAN-30OFF-Ecomm-Mobile-768x900px-Ar.png 2x">
//                     <source media="(min-width: 1366px)" srcset="https://img-cdn.magrabi.com/medias/sys_master/root/h13/h37/9027205955614/Magrabi_RAYBAN_30OFF_Ecomm_Desktop_2048x750px_Ar/Magrabi-RAYBAN-30OFF-Ecomm-Desktop-2048x750px-Ar.png 1x, https://img-cdn.magrabi.com/medias/sys_master/root/h13/h37/9027205955614/Magrabi_RAYBAN_30OFF_Ecomm_Desktop_2048x750px_Ar/Magrabi-RAYBAN-30OFF-Ecomm-Desktop-2048x750px-Ar.png 2x">
//                     <source media="(min-width: 1024px)" srcset="https://img-cdn.magrabi.com/medias/sys_master/root/h56/h14/9027206086686/Magrabi_RAYBAN_30OFF_Ecomm_Tablet_Landscape_1366x700px_Ar/Magrabi-RAYBAN-30OFF-Ecomm-Tablet-Landscape-1366x700px-Ar.png 1x, https://img-cdn.magrabi.com/medias/sys_master/root/h56/h14/9027206086686/Magrabi_RAYBAN_30OFF_Ecomm_Tablet_Landscape_1366x700px_Ar/Magrabi-RAYBAN-30OFF-Ecomm-Tablet-Landscape-1366x700px-Ar.png 2x">
//                     <source media="(min-width: 768px)" srcset="https://img-cdn.magrabi.com/medias/sys_master/root/h68/h17/9027206152222/Magrabi_RAYBAN_30OFF_Ecomm_Tablet_Portrait_1024x660px_Ar/Magrabi-RAYBAN-30OFF-Ecomm-Tablet-Portrait-1024x660px-Ar.png 1x, https://img-cdn.magrabi.com/medias/sys_master/root/h68/h17/9027206152222/Magrabi_RAYBAN_30OFF_Ecomm_Tablet_Portrait_1024x660px_Ar/Magrabi-RAYBAN-30OFF-Ecomm-Tablet-Portrait-1024x660px-Ar.png 2x">
//                     <img class="lazy loaded" alt="YEC_RAYBAN_SA" style="width: 100%;" data-ll-status="loaded" src="https://img-cdn.magrabi.com/medias/sys_master/root/h13/h37/9027205955614/Magrabi_RAYBAN_30OFF_Ecomm_Desktop_2048x750px_Ar/Magrabi-RAYBAN-30OFF-Ecomm-Desktop-2048x750px-Ar.png">
//                   </picture>
//               </div>
//           <div class="bnr-body">
//             <div class="bnr-header">
//               <div class="bnr-title"></div>
//               <div class="bnr-button">
//                 </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div class="swiper-slide swiper-slide-prev" onclick="ACC.gtm.gtmPromotionClick('8798255973436','','10','DAVID_BECKHAM');window.location='/sa-ar/DavidBeckham';" style="cursor: pointer; width: 1728px;" data-order="3" data-swiper-slide-index="3">
//         <div class="banner bnr-full-img bnr-left">
//               <div class="bnr-media">
//                 <picture>
//                   <source media="(max-width: 767px)" srcset="https://img-cdn.magrabi.com/medias/sys_master/root/hc0/h54/9009248272414/Mobile_AR/Mobile-AR.png 1x, https://img-cdn.magrabi.com/medias/sys_master/root/hc0/h54/9009248272414/Mobile_AR/Mobile-AR.png 2x">
//                     <source media="(min-width: 1366px)" srcset="https://img-cdn.magrabi.com/medias/sys_master/root/h81/h55/9009248206878/Desktop_AR/Desktop-AR.png 1x, https://img-cdn.magrabi.com/medias/sys_master/root/h81/h55/9009248206878/Desktop_AR/Desktop-AR.png 2x">
//                     <source media="(min-width: 1024px)" srcset="https://img-cdn.magrabi.com/medias/sys_master/root/hc2/h51/9009248337950/TabletL_AR/TabletL-AR.png 1x, https://img-cdn.magrabi.com/medias/sys_master/root/hc2/h51/9009248337950/TabletL_AR/TabletL-AR.png 2x">
//                     <source media="(min-width: 768px)" srcset="https://img-cdn.magrabi.com/medias/sys_master/root/hb1/h4e/9009248403486/TabletP_AR/TabletP-AR.png 1x, https://img-cdn.magrabi.com/medias/sys_master/root/hb1/h4e/9009248403486/TabletP_AR/TabletP-AR.png 2x">
//                     <img class="lazy loaded" alt="DAVID_BECKHAM" style="width: 100%;" data-ll-status="loaded" src="https://img-cdn.magrabi.com/medias/sys_master/root/h81/h55/9009248206878/Desktop_AR/Desktop-AR.png">
//                   </picture>
//               </div>
//           <div class="bnr-body">
//             <div class="bnr-header">
//               <div class="bnr-title"></div>
//               <div class="bnr-button">
//                 </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div class="swiper-slide swiper-slide-active" onclick="ACC.gtm.gtmPromotionClick('8798485218364','','11','HOLIDAY_EDIT_WOMEN');window.location='-c-fo-female';" style="cursor: pointer; width: 1728px;" data-order="4" data-swiper-slide-index="4">
//         <div class="banner bnr-full-img bnr-left">
//               <div class="bnr-media">
//                 <picture>
//                   <source media="(max-width: 767px)" srcset="https://img-cdn.magrabi.com/medias/sys_master/root/h05/h1c/9023603441694/Magrabi_HolidayEdit_Ecomm_Banners_Mobile_768x900px_Ar-12/Magrabi-HolidayEdit-Ecomm-Banners-Mobile-768x900px-Ar-12.png 1x, https://img-cdn.magrabi.com/medias/sys_master/root/h05/h1c/9023603441694/Magrabi_HolidayEdit_Ecomm_Banners_Mobile_768x900px_Ar-12/Magrabi-HolidayEdit-Ecomm-Banners-Mobile-768x900px-Ar-12.png 2x">
//                     <source media="(min-width: 1366px)" srcset="https://img-cdn.magrabi.com/medias/sys_master/root/h66/he2/9023601803294/Magrabi_HolidayEdit_Ecomm_Banners_Desktop_2048x750px_Ar-09/Magrabi-HolidayEdit-Ecomm-Banners-Desktop-2048x750px-Ar-09.png 1x, https://img-cdn.magrabi.com/medias/sys_master/root/h66/he2/9023601803294/Magrabi_HolidayEdit_Ecomm_Banners_Desktop_2048x750px_Ar-09/Magrabi-HolidayEdit-Ecomm-Banners-Desktop-2048x750px-Ar-09.png 2x">
//                     <source media="(min-width: 1024px)" srcset="https://img-cdn.magrabi.com/medias/sys_master/root/hcd/h7b/9023602720798/Magrabi_HolidayEdit_Ecomm_Banners_Tablet_Landscape_1366x700px_Ar-11/Magrabi-HolidayEdit-Ecomm-Banners-Tablet-Landscape-1366x700px-Ar-11.png 1x, https://img-cdn.magrabi.com/medias/sys_master/root/hcd/h7b/9023602720798/Magrabi_HolidayEdit_Ecomm_Banners_Tablet_Landscape_1366x700px_Ar-11/Magrabi-HolidayEdit-Ecomm-Banners-Tablet-Landscape-1366x700px-Ar-11.png 2x">
//                     <source media="(min-width: 768px)" srcset="https://img-cdn.magrabi.com/medias/sys_master/root/h6e/h89/9023602327582/Magrabi_HolidayEdit_Ecomm_Banners_Tablet_Portrait_1024x660px_Ar-10/Magrabi-HolidayEdit-Ecomm-Banners-Tablet-Portrait-1024x660px-Ar-10.png 1x, https://img-cdn.magrabi.com/medias/sys_master/root/h6e/h89/9023602327582/Magrabi_HolidayEdit_Ecomm_Banners_Tablet_Portrait_1024x660px_Ar-10/Magrabi-HolidayEdit-Ecomm-Banners-Tablet-Portrait-1024x660px-Ar-10.png 2x">
//                     <img class="lazy loaded" alt="HOLIDAY_EDIT_WOMEN" style="width: 100%;" data-ll-status="loaded" src="https://img-cdn.magrabi.com/medias/sys_master/root/h66/he2/9023601803294/Magrabi_HolidayEdit_Ecomm_Banners_Desktop_2048x750px_Ar-09/Magrabi-HolidayEdit-Ecomm-Banners-Desktop-2048x750px-Ar-09.png">
//                   </picture>
//               </div>
//           <div class="bnr-body">
//             <div class="bnr-header">
//               <div class="bnr-title"></div>
//               <div class="bnr-button">
//                 </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div class="swiper-slide swiper-slide-duplicate swiper-slide-next" onclick="ACC.gtm.gtmPromotionClick('8798518182972','','1','YEC_SA_SUN');window.location='-c-gc-yecsa';" style="cursor: pointer; width: 1728px;" data-order="0" data-swiper-slide-index="0">
//         <div class="banner bnr-full-img bnr-left">
//               <div class="bnr-media">
//                 <picture>
//                   <source media="(max-width: 767px)" srcset="https://img-cdn.magrabi.com/medias/sys_master/root/h02/hfe/9026321874974/YEC_AR_Ecomm_SUN_Mobile_768x900/YEC-AR-Ecomm-SUN-Mobile-768x900.png 1x, https://img-cdn.magrabi.com/medias/sys_master/root/h02/hfe/9026321874974/YEC_AR_Ecomm_SUN_Mobile_768x900/YEC-AR-Ecomm-SUN-Mobile-768x900.png 2x">
//                     <source media="(min-width: 1366px)" srcset="https://img-cdn.magrabi.com/medias/sys_master/root/h41/hfd/9026321809438/YEC_AR_Ecomm_SUN_Desktop_2048x750/YEC-AR-Ecomm-SUN-Desktop-2048x750.png 1x, https://img-cdn.magrabi.com/medias/sys_master/root/h41/hfd/9026321809438/YEC_AR_Ecomm_SUN_Desktop_2048x750/YEC-AR-Ecomm-SUN-Desktop-2048x750.png 2x">
//                     <source media="(min-width: 1024px)" srcset="https://img-cdn.magrabi.com/medias/sys_master/root/heb/hfe/9026321940510/YEC_AR_Ecomm_SUN_TabletLandscape_1366x700/YEC-AR-Ecomm-SUN-TabletLandscape-1366x700.png 1x, https://img-cdn.magrabi.com/medias/sys_master/root/heb/hfe/9026321940510/YEC_AR_Ecomm_SUN_TabletLandscape_1366x700/YEC-AR-Ecomm-SUN-TabletLandscape-1366x700.png 2x">
//                     <source media="(min-width: 768px)" srcset="https://img-cdn.magrabi.com/medias/sys_master/root/h42/hb4/9026322006046/YEC_AR_Ecomm_SUN_TabletPortrait_1024x660/YEC-AR-Ecomm-SUN-TabletPortrait-1024x660.png 1x, https://img-cdn.magrabi.com/medias/sys_master/root/h42/hb4/9026322006046/YEC_AR_Ecomm_SUN_TabletPortrait_1024x660/YEC-AR-Ecomm-SUN-TabletPortrait-1024x660.png 2x">
//                     <img src="https://img-cdn.magrabi.com/medias/sys_master/root/h41/hfd/9026321809438/YEC_AR_Ecomm_SUN_Desktop_2048x750/YEC-AR-Ecomm-SUN-Desktop-2048x750.png" alt="YEC_SA_SUN" style="width: 100%;">
//                   </picture>
//               </div>
//           <div class="bnr-body">
//             <div class="bnr-header">
//               <div class="bnr-title"></div>
//               <div class="bnr-button">
//                 </div>
//             </div>
//           </div>
//         </div>
//       </div></div>
// <div class="swiper-button-next" tabindex="0" role="button" aria-label="Next slide" aria-disabled="false"></div>
// <div class="swiper-button-prev" tabindex="0" role="button" aria-label="Previous slide" aria-disabled="true"></div>
// <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 1"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 3"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 4"></span><span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 5"></span></div>
// <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>


  )
}
export default ContractSlider