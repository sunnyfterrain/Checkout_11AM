import React from 'react';
import styled from 'styled-components';

const CardList = ({
  id,
  name,
  category,
  region,
  room_info,
  thumbnail,
  goToDetail,
}) => {
  return (
    <CardListLayout
      onClick={() => {
        goToDetail(id);
      }}
    >
      <CardTitle>{name}</CardTitle>
      <CardSub>{category}</CardSub>
      <CardInfo>
        <CardLocation>{`제주/${region}`}</CardLocation>
        <CardStandard>
          기준 인원 {room_info[0].person}명 최대 인원
          {room_info[0].max_person}
        </CardStandard>
        <CardPrice>
          {Math.floor(room_info[0].price).toLocaleString('ko-KR')}원
        </CardPrice>
        <CardButton>예약하기</CardButton>
      </CardInfo>
      <CardImage src={thumbnail} alt={name} />
    </CardListLayout>
  );
};

export default CardList;

const CardListLayout = styled.li`
  position: relative;
  width: calc(50% - 25px);
  height: 350px;
  padding-top: 70px;
  margin-bottom: 80px;
  cursor: pointer;
`;

const CardTitle = styled.p`
  font-size: 28px;
  font-weight: 700;
`;

const CardSub = styled.p`
  font-size: 14px;
  margin-top: 5px;
`;

const CardImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 400px;
  height: 230px;
  background: #e9e9e9;
`;

const CardInfo = styled.ul`
  position: absolute;
  bottom: 10px;
  left: 0;

  * {
    font-size: 14px;
  }
`;

const CardLocation = styled.li`
  margin-bottom: 10px;
`;

const CardStandard = styled.li`
  margin-bottom: 10px;
`;

const CardPrice = styled.li`
  margin-bottom: 20px;
`;

const CardButton = styled.li`
  position: relative;
  display: inline-block;
  font-weight: 700;
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 1px;
    background: #000;
    vertical-align: top;
  }
`;
