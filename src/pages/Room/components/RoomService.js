import styled from 'styled-components';

const RoomService = ({ feature, amenities }) => {
  return (
    <RoomServiceLayout>
      <Features>
        <ServiceTit>FEATURES</ServiceTit>
        <ServiceList>
          {feature?.map((feature, idx) => {
            return <ServiceItem key={idx}>{feature}</ServiceItem>;
          })}
        </ServiceList>
      </Features>
      <Amenities>
        <ServiceTit>AMENITIES</ServiceTit>
        <ServiceList>
          {amenities?.map((amenitiy, idx) => {
            return <ServiceItem key={idx}>{amenitiy}</ServiceItem>;
          })}
        </ServiceList>
      </Amenities>
    </RoomServiceLayout>
  );
};

export default RoomService;

const RoomServiceLayout = styled.div`
  width: 1290px;
  margin: 50px auto;
  border-top: 1px solid #ddd;
`;

const Features = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
`;

const Amenities = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
`;

const ServiceTit = styled.div`
  width: 25%;
  color: #333;
  font-size: 12px;
  letter-spacing: 3.6px;
  font-family: Abel, NanumSquare;
`;

const ServiceList = styled.ul`
  ${({ theme }) => theme.flexLayout('row', 'center', 'flex-start')};
  flex-wrap: wrap;
  width: 75%;
  padding: 40px 0 20px;
`;

const ServiceItem = styled.li`
  width: 96px;
  margin-bottom: 20px;
  font-size: 12px;
  color: #333;
  word-break: keep-all;
`;
