import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import styled from 'styled-components';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function ProductSlide({ productList }) {
  // const { residences_list } = productList;

  const navigate = useNavigate();

  const goToDetail = id => {
    navigate(`/residences/${id}`, { state: { bookingDays: 0 } });
  };

  return (
    <Box>
      <ProductTitle>오직 CHECKOUT 11:AM에서만</ProductTitle>
      <Swiper
        initialSlide={3}
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {productList?.map(
          ({ id, name, region, thumbnail, room_info, price }, index) => {
            return (
              <SwiperSlide key={index} id={id}>
                <ProductBox>
                  <SlideImg
                    src={thumbnail}
                    onClick={() => {
                      goToDetail(id);
                    }}
                  />
                  <ProductName>{name}</ProductName>
                  <ProductDetailBox>
                    <Span>{region}</Span>
                    <Span>
                      &nbsp; • &nbsp;₩
                      {/* {parseInt(room_info[0].price).toLocaleString()} */}
                      {price}
                    </Span>
                  </ProductDetailBox>
                  <Paragraph
                    onClick={() => {
                      goToDetail(id);
                    }}
                  >
                    read more
                  </Paragraph>
                </ProductBox>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </Box>
  );
}
export default ProductSlide;

const Box = styled.div`
  width: 1330px;
  height: 515px;
  margin: auto;
  margin-top: 110px;
  padding: 0px 20px 0px 20px;
  text-align: center;

  .swiper-slide {
    width: 363px;
    height: 443px;
    padding-bottom: 60px;
  }

  .swiper-pagination {
    left: 615px;
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
    right: 595px;
    margin-top: 196px;
    background-image: url(/images/angle-right-solid.svg);
    z-index: 2;
  }

  .swiper-button-prev {
    left: 665px;
    margin-top: 196px;
    background-image: url(/images/angle-left-solid.svg);
  }
`;

const ProductTitle = styled.p`
  margin-bottom: 50px;
  font-size: 16px;
  letter-spacing: 10px;
`;

const ProductBox = styled.div`
  width: 410px;
  cursor: pointer;
`;

const SlideImg = styled.img`
  width: 410px;
  height: 250px;
`;

const ProductName = styled.div`
  margin-top: 30px;
  font-size: 22px;
`;

const ProductDetailBox = styled.div`
  margin-top: 15px;
`;

const Span = styled.span`
  font-size: 14px;
`;

const Paragraph = styled.p`
  width: 63px;
  margin: auto;
  margin-top: 20px;
  padding-bottom: 8px;
  border-bottom: 1px solid black;
  font-size: 13px;
  font-weight: 300;
`;
