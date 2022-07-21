import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API } from '../../config';
import BannerSlider from './components/BannerSlider';
import BookingSummary from './components/BookingSummery';
import RoomService from './components/RoomService';
import ReserveButton from './components/ReserveButton';

const Room = () => {
  const [roomData, setRoomData] = useState([]);

  const params = useParams();

  const {
    room_images,
    name,
    residence_name,
    price,
    description,
    area,
    person,
    max_preson,
    bed,
    feature,
    amenities,
  } = roomData;

  const [bookingData, setBookingData] = useState([]);

  const [checkInData, checkOutData] = bookingData;

  useEffect(() => {
    window.scrollTo(0, 0);

    const url = `${API.LIST}/${params.residence}/room/${params.room}`;

    axios.get(url).then(response => {
      setRoomData(response.data.result);
    });
  }, [params.room, params.residence]);

  return (
    <RoomLayout>
      <PageTitle>BOOKING</PageTitle>
      <BookingSummary
        residenceName={residence_name}
        setBookingData={setBookingData}
        bookingData={bookingData}
        checkInData={checkInData}
        checkOutData={checkOutData}
      />
      <BannerSlider
        name={name}
        price={price}
        person={person}
        maxPreson={max_preson}
        area={area}
        roomImages={room_images}
        description={description}
        bed={bed}
        checkInData={checkInData}
        checkOutData={checkOutData}
      />
      <RoomService feature={feature} amenities={amenities} />
      <ButtonWrapper>
        <ReserveButton>예약하기</ReserveButton>
      </ButtonWrapper>
    </RoomLayout>
  );
};

export default Room;

const RoomLayout = styled.div`
  width: 1290px;
  margin: 0 auto;
`;

const PageTitle = styled.div`
  padding-top: 70px;
  font-size: 18px;
  font-weight: 700;
  font-family: Lato-Bold;
  letter-spacing: 14px;
  color: #000;
  text-align: center;
  text-indent: 14px;
`;

const ButtonWrapper = styled.div`
  width: 400px;
  height: 70px;
  margin: auto;
`;
