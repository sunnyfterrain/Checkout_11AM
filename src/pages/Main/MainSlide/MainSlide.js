import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import MAIN_SLIDE_DATA from './MainSlideData';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function MainSlide() {
  return (
    <Box
      pagination={{
        type: 'fraction',
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      loop={true}
      className="mySwiper"
    >
      {MAIN_SLIDE_DATA.map(({ id, image, content, event }) => {
        return (
          <SwiperSlide key={id}>
            <ContentBox>
              <Content>{content}</Content>
              <Event>{event}</Event>
              <More>
                <Link to="/list">read more</Link>
              </More>
            </ContentBox>
            <Link to="/list">
              <SlideImg key={id} src={image} />
            </Link>
          </SwiperSlide>
        );
      })}

      <ButtonBox />
    </Box>
  );
}
export default MainSlide;

const Box = styled(Swiper)`
  max-width: 1800px;
  min-width: 1440px;
  height: 850px;
  margin: auto;

  .swiper-button-next,
  .swiper-button-prev {
    width: 9px;
    height: 20px;
    margin-top: 300;

    &::after {
      display: none;
    }
  }

  .swiper-button-next {
    left: 190px;
    top: 95.5%;
    background-image: url(https://www.stayfolio.com/_next/static/media/arw-wh.c11cc016561769ca62365f798284b5b7.png);
    transform: scaleX(-1);
  }

  .swiper-button-prev {
    top: 95.5%;
    left: 150px;
    background-image: url(https://www.stayfolio.com/_next/static/media/arw-wh.c11cc016561769ca62365f798284b5b7.png);
  }

  .swiper-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    bottom: 0;
    width: 115px;
    height: 100px;
    color: white;
    opacity: 0.8;
  }
`;

const SlideImg = styled.img`
  width: 100%;
  height: 850px;
  object-fit: cover;
  cursor: pointer;
`;

const ButtonBox = styled.div`
  position: absolute;
  left: 115px;
  bottom: 0px;
  width: 115px;
  height: 100px;
  background-color: black;
  border-left: 1px solid #2f2b2a;
  opacity: 0.8;
  z-index: 1;
`;

const ContentBox = styled.div`
  position: absolute;
  top: 50%;
  right: -90px;
  width: 320px;
  height: 300px;
  padding-top: 85px;
  padding-bottom: 30px;
  background-color: white;
  text-align: center;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;
const Content = styled.p`
  width: 170px;
  margin: auto;
  line-height: 1.8;
`;

const Event = styled.p`
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 11px;
  letter-spacing: 5px;
`;

const More = styled.p`
  width: 63px;
  margin: auto;
  margin-top: 20px;
  padding-bottom: 8px;
  border-bottom: 1px solid black;
  font-size: 13px;
  font-weight: 300;
`;
