import styled from 'styled-components';

function MainRecommend() {
  return (
    <Box>
      <RecommendBox>
        <Title>유니크한 숙소 공간을 추천해 주세요.</Title>
        <br />
        <Paragraph>
          CHECK OUT 11:00 AM 는 여행자와 창작사 사이에서 <br />
          혁신적인 스테이 모델을 지속적으로 소개하고 있습니다.
        </Paragraph>
        <ViewMore>read more</ViewMore>
      </RecommendBox>
      <MarketingBox>
        <Title>FINE STAY AGENCY STAYFOLIO</Title>
        <br />
        <Paragraph>
          콘텐츠 제작, 마케팅 전략, 예약시스템
          <br /> 비즈니스 모델의 경쟁력을 높이는 호스트 솔루션을 만나보세요.
        </Paragraph>
        <ViewMore>read more</ViewMore>
      </MarketingBox>
    </Box>
  );
}

export default MainRecommend;

const Box = styled.div`
  display: flex;
  width: 1290px;
  height: 203px;
  margin: auto;
  margin-top: 110px;
  text-align: center;
  border: 1px solid #c0c0c0;
`;

const RecommendBox = styled.div`
  width: 644px;
  height: 203px;
  padding: 35px 0px 35px 0px;
  cursor: pointer;
`;

const MarketingBox = styled.div`
  width: 643px;
  height: 203px;
  padding: 35px 0px 35px 0px;
  border-left: 1px solid #c0c0c0;
  cursor: pointer;
`;

const Title = styled.p`
  font-size: 22px;
  line-height: 1.3;
`;

const Paragraph = styled.p`
  color: #666;
  font-size: 14px;
  line-height: 1.5;
`;

const ViewMore = styled.p`
  width: 63px;
  margin: auto;
  padding-top: 23px;
  padding-bottom: 8px;
  font-size: 13px;
  font-weight: 300;
  border-bottom: 1px solid black;
`;
