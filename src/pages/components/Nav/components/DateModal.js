import { useState } from 'react';
import styled from 'styled-components';
import { Calendar } from 'react-multi-date-picker';
import { useNavigate } from 'react-router-dom';

import qs from 'qs';
import ModalFrame from '../../ModalFrame';

const DateModal = ({ handleModal }) => {
  const [dates, setDates] = useState([]);
  const navigate = useNavigate();
  const goToPage = () => {
    const firstDate = dates[0].format('YYYY-MM-DD');
    const lastDate = dates[1].format('YYYY-MM-DD');
    const dateQueryString = qs.stringify(
      { check_in: `${firstDate}`, check_out: `${lastDate}` },
      { indices: true }
    );
    if (dates.length > 1) {
      navigate(`list?${dateQueryString}`, {
        state: { startDatePick: firstDate, endDatePick: lastDate },
      });
      handleModal();
    }
  };

  return (
    <ModalFrame handleModal={handleModal}>
      <DateModalLayout>
        <DateTitle>언제 떠날까요?</DateTitle>
        <LocalContentWrap>
          <CalendarWrap>
            <Calendar
              value={dates}
              onChange={dateObjects => {
                setDates(dateObjects);
              }}
              numberOfMonths={2}
              weekDays={WEEKDAYS}
              months={MONTH}
              hideYear
              range
            />
          </CalendarWrap>
          <SearchBtn onClick={goToPage}>SEARCH</SearchBtn>
        </LocalContentWrap>
      </DateModalLayout>
    </ModalFrame>
  );
};

export default DateModal;

const MONTH = [
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

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];

const DateModalLayout = styled.div`
  z-index: 30;
  padding: 0 20px;
  width: 100%;
`;

const DateTitle = styled.h1`
  padding: 59px 0 50px;
  font-size: 36px;
  font-weight: 700;
  @media (max-width: 1024px) {
    font-size: 20px;
    padding: 30px 0 25px;
  }
`;

const LocalContentWrap = styled.section`
  border-top: 2px solid #e6e6e6;
  text-align: center;
  @media (max-width: 1024px) {
    padding-top: 20px;
    border-top: 1px solid #e6e6e6;
  }
`;

const SearchBtn = styled.button`
  border-radius: 100px;
  width: 187px;
  height: 64px;
  margin: 50px auto;
  padding: 0 70px 0 40px;
  background: url('https://www.stayfolio.com/web/images/arw-search.png')
    no-repeat 18px 15px;
  background-position: 140px 25px;
  background-color: #000000;
  box-shadow: 13px 15px 30px 0 rgb(0 0 0 /40%);
  border: none;
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 2px;
  cursor: pointer;
  @media (max-width: 1024px) {
    margin: 25px auto;
    width: 147px;
    height: 48px;
    background: url('https://www.stayfolio.com/web/images/arw-search.png')
      no-repeat 110px 50%;
    background-size: 15px 12px;
    background-color: #000000;
    font-size: 11px;
  }
`;

const CalendarWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0;
  border-bottom: 2px solid #e6e6e6;

  .rmdp-shadow {
    box-shadow: none;
  }
  .rmdp-wrapper {
    .rmdp-header {
      margin-bottom: 20px;
      font-size: 20px;
      font-weight: 700;
      .rmdp-header-values {
        color: #484848;
      }

      .rmdp-arrow-container {
        .rmdp-arrow {
          border: solid #000;
          border-width: 0 1px 1px 0;
          transform: scale(2.5);
        }
        &:hover {
          background: none;
          box-shadow: none;
        }
      }

      .rmdp-right {
        transform: rotate(-45deg);
        top: 140px;
        right: -30px;
      }

      .rmdp-left {
        transform: rotate(135deg);
        top: 140px;
        left: -30px;
      }
    }
    .rmdp-week {
      margin: 0 10px;

      .rmdp-week-day {
        width: 73px;
        color: black;
        font-size: 17px;
        color: #484848;
      }

      .rmdp-day {
        font-size: 50px;
        width: 73px;
        height: 38px;
        color: #484848;

        .sd {
          font-size: 18px;
          &:hover {
            background: none;
          }
        }
        &:hover {
          background-color: #e4e7e7;
        }
      }

      .rmdp-range {
        color: #fff;
      }

      .rmdp-today span {
        background-color: #e6e6e6;
        border-radius: 100px 100px 100px 100px;
      }

      .start {
        border-radius: 100px 0 0 100px;
      }

      .end {
        border-radius: 0 100px 100px 0;
      }
    }
  }

  .rmdp-range {
    background-color: #000;
  }

  @media (max-width: 1204px) {
    .rmdp-wrapper {
      .rmdp-week {
        margin: 0 10px;

        .rmdp-week-day {
          width: 60px;
        }

        .rmdp-day {
          width: 60px;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .rmdp-wrapper {
      .rmdp-week {
        margin: 0 8px;

        .rmdp-week-day {
          width: 44px;
        }

        .rmdp-day {
          width: 44px;
        }
      }
    }
  }
`;
