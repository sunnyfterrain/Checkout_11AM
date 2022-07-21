import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper';
import styled from 'styled-components';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function PromotionSlide({ promotionList }) {
  const navigate = useNavigate();

  const goToDetail = id => {
    navigate(`/residences/${id}`, { state: { bookingDays: 0 } });
  };

  return (
    <Box>
      <SlideBox
        initialSlide={1}
        spaceBetween={30}
        effect="fade"
        navigation={true}
        loop={true}
        pagination={{
          type: 'fraction',
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {promotionList?.map(
          (
            {
              id,
              thumbnail,
              name,
              region,
              sub_Name,
              price,
              category,
              person,
              max_person,
            },
            index
          ) => {
            return (
              <SwiperSlide key={index} id={id}>
                <PromotionBox
                  onClick={() => {
                    goToDetail(id);
                  }}
                >
                  <Title>PROMOTION</Title>
                  <SubTitle>{sub_Name}</SubTitle>
                  <ContentBox>
                    <ProductName>{name}</ProductName>
                    <ContentSubBox>
                      <Span>
                        {region} • {category}
                      </Span>
                      <Paragraph>
                        {/* 최소 {room_info[0].person}명 / 최대
                        {room_info[0].max_person}명
                        <br />₩ {parseInt(room_info[0].price).toLocaleString()} */}
                        최소 {person}명 / 최대
                        {max_person}명
                        <br />₩ {price}
                      </Paragraph>
                    </ContentSubBox>
                  </ContentBox>
                </PromotionBox>
                <SlideImg
                  src={thumbnail}
                  onClick={() => {
                    goToDetail(id);
                  }}
                />
              </SwiperSlide>
            );
          }
        )}
      </SlideBox>
    </Box>
  );
}

export default PromotionSlide;

const Box = styled.div`
  width: 100%;
  height: 760px;
  margin: auto;
  padding-top: 110px;
  padding-bottom: 110px;
  background-color: #f5f5f5;

  .swiper-pagination {
    bottom: 6px;
    left: -5px;
    width: 50px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    width: 9px;
    height: 20px;

    &::after {
      display: none;
    }
  }

  .swiper-button-next {
    left: 80px;
    top: 100%;
    background-image: url(/images/angle-right-solid.svg);
    z-index: 2;
  }

  .swiper-button-prev {
    left: 60px;
    top: 100%;
    background-image: url(/images/angle-left-solid.svg);
  }
`;

const SlideBox = styled(Swiper)`
  width: 1290px;
  height: 540px;
  text-align: right;
`;

const PromotionBox = styled.div`
  position: absolute;
  height: 540px;
  background-color: #f5f5f5;
  text-align: left;
  cursor: pointer;
`;

const Title = styled.div`
  margin-bottom: 80px;
  font-size: 12px;
  letter-spacing: 10px;
`;

const SubTitle = styled.p`
  width: 225px;
  font-size: 30px;
  font-weight: 500;
  line-height: 1.4;
`;

const ContentBox = styled.div`
  position: absolute;
  bottom: 40px;
  line-height: 1.8;
`;

const ContentSubBox = styled.div`
  margin-top: 20px;
  font-weight: 400;
`;

const Span = styled.span`
  font-size: 14px;
`;

const Paragraph = styled.p`
  font-size: 14px;
`;

const SlideImg = styled.img`
  width: 960px;
  height: 540px;
  cursor: pointer;
`;

const ProductName = styled.p`
  height: 30px;
  font-size: 22px;
  font-weight: 500;
`;
