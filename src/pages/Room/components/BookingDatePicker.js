import { useEffect } from 'react';
import styled from 'styled-components';
import { Calendar } from 'react-multi-date-picker';

const BookingDatePicker = ({ handleModal, setBookingData, bookingData }) => {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  const clearDatePiker = () => {
    setBookingData([]);
  };

  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];

  const months = [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ];

  return (
    <DatePikerModal>
      <ModalBg onClick={handleModal} />
      <ModalInner>
        <Calendar
          value={bookingData}
          numberOfMonths={2}
          onChange={values => {
            setBookingData(values);
          }}
          weekDays={weekDays}
          months={months}
          range
          hideYear
          disableMonthPicker
          disableYearPicker
        >
          <ClearDatePiker onClick={clearDatePiker}>
            선택날짜 지우기
          </ClearDatePiker>
        </Calendar>
      </ModalInner>
    </DatePikerModal>
  );
};

export default BookingDatePicker;

const DatePikerModal = styled.div`
  position: fixed;
  ${({ theme }) => theme.flexLayout('row', 'center', 'center')};
  width: 100vw;
  height: 100vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100000;
`;

const ModalBg = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 200;
`;

const ModalInner = styled.div`
  position: relative;
  ${({ theme }) => theme.flexLayout('row', 'center', 'center')};
  width: 1130px;
  height: 420px;
  background-color: #fff;
  border-radius: 10px;
  padding: 40px 40px;
  overflow: hidden;
  z-index: 10000000;
  animation: modal-animation 300ms;

  @keyframes modal-animation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .rmdp-wrapper {
    box-shadow: none;
    width: 100%;
  }

  .rmdp-top-class {
    width: 100%;
  }

  .rmdp-header-values {
    span {
      padding-right: 460px;
      font-size: 20px;
      font-weight: 700;
    }
  }

  .rmdp-calendar {
    width: 100%;
  }

  .rmdp-deactive {
    .sd {
      color: #c9c9c9 !important;
    }
  }

  .rmdp-day-picker {
    width: 100%;
    div {
      width: 100%;
      div {
        color: black;
        font-size: 16px;
        font-weight: 500;
      }
    }
  }

  .rmdp-arrow-container {
    display: none !important;
  }

  .rmdp-week {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .rmdp-week-day {
      color: #000;
    }

    .rmdp-day {
      height: 40px;

      &.rmdp-range {
        background-color: #000;
        color: #000;
        span {
          color: #fff;
        }
      }

      &.rmdp-range.start {
        border-bottom-left-radius: 40px;
        border-top-left-radius: 40px;
      }

      &.rmdp-today {
        span {
          background-color: #e6e6e6;
          color: #fff;
          border-radius: 40px;
        }
      }

      &.rmdp-today.rmdp-range {
        &.start {
          border-bottom-left-radius: 40px;
          border-top-left-radius: 40px;
          border-bottom-right-radius: 0;
          border-top-right-radius: 0;
        }

        &.end {
          border-bottom-left-radius: 0;
          border-top-left-radius: 0;
          border-bottom-right-radius: 40px;
          border-top-right-radius: 40px;
        }

        &.start.end {
          border-radius: 40px;
        }
      }

      span {
        color: #000;
        font-size: 16px;
        border-radius: 0;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;

        &:not(.rmdp-disabled):not(.rmdp-day-hidden) {
          &:hover {
            background-color: #333;
          }
        }
      }
    }

    .start {
      border-bottom-left-radius: 40px;
      border-top-left-radius: 40px;
    }

    .end {
      border-bottom-right-radius: 40px;
      border-top-right-radius: 40px;
    }
  }
`;

const ClearDatePiker = styled.button`
  margin-top: 30px;
  font-size: 14px;
  font-weight: 700;
  background-color: white;
  padding: 0;
  border: none;
  text-decoration: underline;
  cursor: pointer;
`;
