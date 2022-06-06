import React, { useState, useEffect } from 'react';
import { API } from '../../config';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import BannerSlider from './components/BannerSlider';
import BookingSummary from './components/BookingSummary';
import RoomsDetail from './components/RoomsDetail';
import DetailDesc from './components/DetailDesc';
import DetailMap from './components/DetailMap';

const Detail = () => {
  const [residenceData, setResidenceData] = useState([]);
  const [bookingData, setBookingData] = useState([]);
  const [checkInData, checkOutData] = bookingData;

  const params = useParams();
  const locationState = useLocation().state;

  useEffect(() => {
    locationState.bookingDays !== 0 &&
      setBookingData([locationState.startDatePick, locationState.endDatePick]);
  }, [locationState]);

  useEffect(() => {
    window.scrollTo(0, 0);

    // const url = `${API.LIST}/${params.id}`;
    const url = '/data/detailData.json';
    axios.get(url).then(response => {
      setResidenceData(response.data.result);
      console.log(response.data.result);
    });
  }, [params.id]);

  const {
    name,
    sub_name,
    region,
    description,
    rooms,
    address,
    phone_number,
    email,
    latitude,
    longitude,
    image,
    places,
  } = residenceData;

  return (
    <DetailLayout>
      <BannerSlider
        name={name}
        sub_name={sub_name}
        image={image}
        region={region}
      />
      <BookingSummary
        name={name}
        setBookingData={setBookingData}
        bookingData={bookingData}
        checkInData={checkInData}
        checkOutData={checkOutData}
        locationState={locationState}
      />
      <RoomsDetail
        rooms={rooms}
        name={name}
        checkInData={checkInData}
        checkOutData={checkOutData}
      />
      <DetailDesc description={description} name={name} sub_name={sub_name} />
      <DetailMap
        address={address}
        name={name}
        phone_number={phone_number}
        email={email}
        latitude={latitude}
        longitude={longitude}
        places={places}
      />
    </DetailLayout>
  );
};

export default Detail;

const DetailLayout = styled.div`
  margin: 0 auto;
`;
