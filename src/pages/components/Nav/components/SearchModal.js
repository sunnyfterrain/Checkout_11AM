import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import qs from 'qs';
import ModalFrame from '../../ModalFrame';

const SearchModal = ({ handleModal }) => {
  const [isActive, setIsActive] = useState('');
  const [value, setValue] = useState({
    filter: '',
    input: '',
  });

  const navigate = useNavigate();

  const handleActive = (cityName, idx) => {
    setIsActive(idx);
    setValue(prevState => {
      return { ...prevState, filter: cityName };
    });
  };

  const handleInput = e => {
    setValue(prevState => {
      return { ...prevState, input: e.target.value };
    });
  };

  const handleSearchBtn = e => {
    e.preventDefault();
    const searchQueryString = qs.stringify(
      { region: `${value.input || value.filter}` },
      { indices: false }
    );
    if (value.filter === '제주전체') {
      navigate('/list?limit=10&offset=0');
    } else {
      navigate(`/list?${searchQueryString}`);
    }
    handleModal();
  };

  return (
    <ModalFrame handleModal={handleModal}>
      <SearchModalLayout>
        <SearchTitle>어디로 떠날까요?</SearchTitle>
        <SearchContentWrap>
          <ContentSearch>
            <SearchInput
              name="input"
              placeholder="원하는 스테이/지역을 검색해 보세요."
              autoComplete="off"
              onChange={handleInput}
            />
          </ContentSearch>
          <SearchLocation>
            <LocationTitle>제주</LocationTitle>
            <LocationList>
              {CITY_NAME.map((city, idx) => {
                return (
                  <LocationItem
                    onClick={() => {
                      handleActive(city.name, idx);
                    }}
                    key={city.id}
                    active={idx === isActive}
                  >
                    {city.name}
                  </LocationItem>
                );
              })}
            </LocationList>
          </SearchLocation>
          <SearchBtn onClick={handleSearchBtn}>SEARCH</SearchBtn>
        </SearchContentWrap>
      </SearchModalLayout>
    </ModalFrame>
  );
};

export default SearchModal;

const CITY_NAME = [
  { id: 1, name: '제주전체' },
  { id: 2, name: '제주시' },
  { id: 3, name: '서귀포시' },
  { id: 4, name: '동부' },
  { id: 5, name: '서부' },
];

const SearchModalLayout = styled.div`
  padding: 0 20px;
  width: 100%;
`;

const SearchTitle = styled.h1`
  padding: 59px 0 50px;
  font-size: 36px;
  font-weight: 700;
  @media (max-width: 1024px) {
    font-size: 20px;
    padding: 30px 0 25px;
  }
`;

const SearchContentWrap = styled.form`
  border-top: 2px solid #e6e6e6;
  text-align: center;
  @media (max-width: 1024px) {
    padding-top: 20px;
    border-top: 1px solid #e6e6e6;
  }
`;

const ContentSearch = styled.div`
  display: flex;
  align-items: center;
  width: 580px;
  height: 64px;
  margin: 80px auto 0;
  padding: 0 20px 0 60px;
  border-radius: 100px;
  background: url('https://www.stayfolio.com/web/images/ico-search2.png')
    no-repeat 20px 50%;
  background-size: 30px 30px;
  background-color: #f5f5f5;
  @media (max-width: 1024px) {
    width: 100%;
    height: 45px;
    margin-top: 15px;
    padding: 0 10px 0 45px;
    background: url('https://www.stayfolio.com/web/images/ico-search2.png')
      no-repeat 15px 50%;
    background-size: 22px 22px;
    background-color: #f5f5f5;
  }
`;

const SearchInput = styled.input`
  width: 500px;
  height: 45px;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 18px;
  &::placeholder {
    color: #c3c3c3;
    font-size: 15px;
  }
`;

const SearchLocation = styled.div`
  padding: 70px 2%;
  border-bottom: 2px solid #e6e6e6;
  @media (max-width: 1024px) {
    padding-bottom: 20px;
    border-bottom: 1px solid #e6e6e6;
  }
`;

const LocationTitle = styled.h3`
  font-size: 23px;
  font-weight: 700;
  margin-bottom: 30px;
  @media (max-width: 1024px) {
    font-size: 15px;
  }
`;

const LocationList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LocationItem = styled.li`
  padding: 3px 23px 0;
  line-height: 40px;
  background-color: ${({ active }) => active && '#000'};
  color: ${({ active }) => active && '#fff'};
  box-shadow: ${({ active }) => active && '13px 15px 30px 0 rgb(0 0 0 /40%)'};
  border-radius: 100px;
  cursor: pointer;
  @media (max-width: 1024px) {
    font-size: 13px;
    padding: 0 13px;
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
