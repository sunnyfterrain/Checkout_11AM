import { useState } from 'react';
import styled from 'styled-components';
import BookingDatePicker from './BookingDatePicker';
import ReserveButton from './ReserveButton';

const BookingSummary = ({
  setBookingData,
  bookingData,
  checkOutData,
  checkInData,
  residenceName,
}) => {
  const [modalDatePiker, setModalDatePiker] = useState(false);

  const handleModal = () => {
    setModalDatePiker(!modalDatePiker);
  };

  return (
    <BookingSummaryLayout>
      <ResidenceName>{residenceName}</ResidenceName>
      <Date>
        <DatePiker onClick={handleModal}>
          {checkOutData
            ? `${checkInData.format('YYYY/MM/DD')} - ${checkOutData.format(
                'YYYY/MM/DD'
              )} | ${checkInData.daysLeft - checkOutData.daysLeft}박`
            : `날짜를 선택해주세요.`}
          <ArrowDown
            src="https://www.stayfolio.com/web/images/arw_select.png"
            alt="arrowDown"
          />
        </DatePiker>
      </Date>
      {modalDatePiker && (
        <BookingDatePicker
          handleModal={handleModal}
          setBookingData={setBookingData}
          bookingData={bookingData}
        />
      )}
      <BookingBtnWrapper>
        <ReserveButton>예약하기</ReserveButton>
      </BookingBtnWrapper>
    </BookingSummaryLayout>
  );
};

export default BookingSummary;

const BookingSummaryLayout = styled.div`
  ${({ theme }) => theme.flexLayout('row', 'center', 'space-between')};
  width: 1290px;
  height: 60px;
  margin: 60px auto 0;
  border-bottom: 2px solid #ddd;
`;

const ResidenceName = styled.div`
  font-size: 26px;
  font-weight: 500;
  color: #000;
`;

const Date = styled.div`
  display: flex;
`;

const DatePiker = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
`;

const ArrowDown = styled.img`
  width: 20px;
  height: 20px;
`;

const BookingBtnWrapper = styled.div`
  width: 240px;
  height: 40px;
`;
