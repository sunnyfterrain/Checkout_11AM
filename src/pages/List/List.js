import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { API } from '../../config';
import CardList from './Card/CardList';
import Filter from './Filter/Filter';
import styled from 'styled-components';
import { DateObject } from 'react-multi-date-picker';

const DATE_OBJECT = [
  new DateObject().subtract(0, 'days'),
  new DateObject().add(0, 'days'),
];

const List = () => {
  const [personCount, setPersonCount] = useState(0);
  const [cardList, setCardList] = useState([]);
  const [startDatePick, setStartDatePick] = useState('');
  const [endDatePick, setEndDatePick] = useState('');
  const [stayType, setStayType] = useState();
  const [countModalActive, setCountModalActive] = useState(false);
  const [stayModalActive, setStayModalActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [selectLocation, setSelectLocation] = useState('');
  const [limit, setLimit] = useState(10);
  const location = useLocation();
  const regionValue = location.search.slice(8, location.search.length);
  const [queryArray, setQueryArray] = useState({
    search: '',
    person: 0,
    stayType: '',
    startDatePick: '',
    endDatePick: '',
    region: `${regionValue}`,
  });
  const navigate = useNavigate();
  const [values, setValues] = useState(DATE_OBJECT);

  const urlApi = `?limit=${limit}&offset=0${
    queryArray.person ? `&people=${queryArray.person}` : ''
  }${queryArray.stayType ? `&category=${queryArray.stayType}` : ''}${
    queryArray.region ? `&region=${queryArray.region}` : ''
  }${
    queryArray.startDatePick
      ? `&check_in=${queryArray.startDatePick}&check_out=${queryArray.endDatePick}`
      : ''
  }${queryArray.search ? `&search=${queryArray.search}` : ''}`;

  useEffect(() => {
    if (location.state) {
      setStartDatePick(location.state.startDatePick);
      setEndDatePick(location.state.endDatePick);
    }
  }, [location.state]);

  useEffect(() => {
    // fetch(`${API.LIST}${location.search}`)
    // mockData
    fetch('data/mockData.json')
      .then(res => res.json())
      .then(data => setCardList(data.residences_list));
  }, [location.search]);

  useEffect(() => {
    navigate(`/list${urlApi}`);
  }, [navigate, urlApi]);

  useEffect(() => {
    setQueryArray(prev => ({
      ...prev,
      startDatePick,
      endDatePick,
    }));
  }, [startDatePick, endDatePick]);

  const goToDetail = id => {
    navigate(
      `/residences/${id}${
        queryArray.startDatePick
          ? `?check_in=${queryArray.startDatePick}&check_out=${queryArray.endDatePick}`
          : ''
      }`,
      {
        state: {
          startDatePick: values[0].format('YYYY/MM/DD'),
          endDatePick: values[1].format('YYYY/MM/DD'),
          bookingDays: values[0].daysLeft - values[1].daysLeft,
        },
      }
    );
  };

  const handleSearch = e => {
    e.preventDefault();
    if (searchValue === '') {
      return;
    } else {
      const searchData = {
        value: searchValue,
      };
      setQueryArray(prev => ({ ...prev, search: searchData.value }));
      setSearchValue('');
    }
  };

  const handleSearchValue = e => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const handlePersonSubmit = e => {
    const { value } = e.target;
    setQueryArray(prev => ({ ...prev, person: value }));
    handleCountModal();
  };

  const handleStaySubmit = e => {
    const { value } = e.target;
    setQueryArray(prev => ({ ...prev, stayType: value }));
    handleStayModal();
  };

  const handleDate = () => {
    setStartDatePick(
      `${values[0].year}-${values[0].month.number}-${values[0].day}`
    );
    setEndDatePick(
      `${values[1].year}-${values[1].month.number}-${values[1].day}`
    );
  };

  const increaseCount = () => {
    setPersonCount(() => personCount + 1);
  };

  const decreaseCount = () => {
    if (personCount === 0) {
      return;
    }
    setPersonCount(() => personCount - 1);
  };

  const handleStayType = e => {
    setStayType(e.target.value);
  };

  const handleCountModal = () => {
    setStayModalActive(false);
    setCountModalActive(!countModalActive);
  };

  const handleStayModal = () => {
    setCountModalActive(false);
    setStayModalActive(!stayModalActive);
  };

  const handleResetButton = () => {
    setQueryArray({
      search: '',
      person: '',
      stayType: '',
      startDatePick: '',
      endDatePick: '',
    });
    setPersonCount(0);
    setStayType();
    setSelectLocation('');
  };

  const handleLocationValue = e => {
    const { value } = e.target;
    setQueryArray(prev => ({ ...prev, region: value }));
    setSelectLocation(value);
  };

  return (
    <ListWrap>
      <ListTitle>Find Check-In</ListTitle>
      <SubListTitle>머무는 것 자체로 여행이 되는 공간</SubListTitle>
      <Filter
        personCount={personCount}
        setPersonCount={setPersonCount}
        handlePersonSubmit={handlePersonSubmit}
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
        countModalActive={countModalActive}
        stayType={stayType}
        handleStayType={handleStayType}
        handleStaySubmit={handleStaySubmit}
        handleCountModal={handleCountModal}
        stayModalActive={stayModalActive}
        handleStayModal={handleStayModal}
        handleDate={handleDate}
        startDatePick={startDatePick}
        endDatePick={endDatePick}
        values={values}
        setValues={setValues}
        handleSearch={handleSearch}
        handleSearchValue={handleSearchValue}
        searchValue={searchValue}
        handleResetButton={handleResetButton}
        selectLocation={selectLocation}
        handleLocationValue={handleLocationValue}
      />
      <CardWrap>
        {cardList.map((card, index) => (
          <CardList key={index} {...card} goToDetail={goToDetail} />
        ))}
      </CardWrap>
      <MoreCardButton
        onClick={() => {
          setLimit(limit + 10);
        }}
      >
        더보기
      </MoreCardButton>
    </ListWrap>
  );
};

export default List;

const ListWrap = styled.div`
  width: 1290px;
  margin: 0 auto;
`;

const ListTitle = styled.p`
  margin-top: 70px;
  padding-top: 70px;
  font-size: 18px;
  font-weight: 500;
  color: #000;
  text-align: center;
  letter-spacing: 10px;
`;

const SubListTitle = styled.p`
  margin-top: 20px;
  text-align: center;
`;

const CardWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: solid #e9e9e9;
  border-width: 2px 0 1px;
  margin-top: 80px;
`;

const MoreCardButton = styled.button`
  display: block;
  font-size: 14px;
  width: 150px;
  background: #000;
  color: #fff;
  border: #000;
  padding: 8px 0;
  border-radius: 20px;
  margin: 40px auto 0;
  cursor: pointer;
`;
