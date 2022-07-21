import styled from 'styled-components';

function MainBanner() {
  return (
    <Box>
      <Span>MAKEFOLIO X 서유작업실</Span>
      <SlideImg />
    </Box>
  );
}

export default MainBanner;

const Box = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  margin-top: 70px;
  cursor: pointer;
`;

const Span = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  color: white;
  font-size: 24px;
  transform: translate(-50%, -50%);
`;

const SlideImg = styled.div`
  width: 100%;
  height: 350px;
  background-size: cover;
  background-image: url('https://images.pexels.com/photos/281513/pexels-photo-281513.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500');
`;
