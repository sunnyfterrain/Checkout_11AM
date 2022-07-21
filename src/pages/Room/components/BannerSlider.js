import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const BannerSlider = ({
  name,
  person,
  maxPerson,
  area,
  roomImages,
  description,
  bed,
  price,
  checkInData,
  checkOutData,
}) => {
  const bookingDays = checkInData?.daysLeft - checkOutData?.daysLeft;
  return (
    <BannerSliderLayout>
      <InfoWrapper>
        <RoomInfoTitle>ROOM INFORMATION</RoomInfoTitle>
        <RoomName>{name}</RoomName>
        <RoomPrice>
          {checkOutData ? `₩ ${bookingDays * price} / ${bookingDays}박` : '-'}
        </RoomPrice>
        <RoomDesc>{description}</RoomDesc>
        <RoomInfoEtc>
          <RoomOptions>체크인 15:00 / 체크아웃 11:00</RoomOptions>
          <RoomOptions>
            기준 인원 {person} (최대 인원 {maxPerson})
          </RoomOptions>
          <RoomOptions>객실면적 {area}㎡</RoomOptions>
          <RoomOptions>침대 {bed}</RoomOptions>
        </RoomInfoEtc>
      </InfoWrapper>
      <BannerWrapper>
        <StyledSwiper
          className="banner"
          spaceBetween={0}
          slidesPerView={1}
          navigation
          loop={true}
          modules={[Navigation]}
        >
          {roomImages?.map((image, idx) => {
            return (
              <SwiperSlide key={idx}>
                <RoomImage src={image} alt="roomImages" />
              </SwiperSlide>
            );
          })}
        </StyledSwiper>
      </BannerWrapper>
    </BannerSliderLayout>
  );
};

export default BannerSlider;

const BannerSliderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1290px;
  margin: 50px auto 0;
`;

const BannerWrapper = styled.div`
  width: 960px;
  height: 540px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const RoomInfoTitle = styled.p`
  font-size: 12px;
  letter-spacing: 3.6px;
`;

const RoomName = styled.div`
  margin-top: 20px;
  font-size: 30px;
  line-height: 1.2;
`;

const RoomPrice = styled.p`
  font-size: 18px;
  margin-top: 25px;
`;

const RoomDesc = styled.div`
  margin-top: 30px;
  padding-right: 20px;
  padding-bottom: 30px;
  font-size: 14px;
  color: #333;
  line-height: 1.7;
`;

const RoomInfoEtc = styled.ul`
  margin-top: 30px;
`;

const RoomOptions = styled.li`
  font-size: 14px;
  color: #333;
  padding: 5px 0;
`;

const RoomImage = styled.img`
  width: 100%;
  height: 540px;
  object-fit: cover;
`;

const StyledSwiper = styled(Swiper)`
  .swiper-button-prev,
  .swiper-button-next {
    width: 60px;
    height: 60px;
    font-size: 10px;
    background-color: black;
    opacity: 0.5;
    color: white;
    :hover {
      opacity: 1;
    }
  }
  .swiper-button-prev {
    background-image: url(https://www.stayfolio.com/web/images/journal-detail-arrow-left.png);
    left: 0;
  }
  .swiper-button-next {
    background-image: url(https://www.stayfolio.com/web/images/journal-detail-arrow-right.png);
    right: 0;
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }
`;
