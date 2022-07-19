import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterLayout>
      <FooterWrap>
        <FooterInner>
          <FooterLogo>
            <FooterTitle>CHECKOUT</FooterTitle>
            <FooterSub>11:00AM</FooterSub>
          </FooterLogo>
          <FooterContent>
            <span>상호 : (주)퇴실 11시</span>
            <span>대표자 : 홍두현</span>
            <br />
            <span>서울시 강남구 테헤란로 위워크 10층</span>
            <span>TEL : 0000-0000</span>
            <span>checkout11@project.com</span>
            <br />
            <span>사업자등록번호 : 000-00-0000</span>
            <span>통신판매업신고 : 제2022-서울선릉-0001호[사업자정보확인]</span>
            <br />
            <span>관광사업자등록 : 일반여행업 2018-000049호(위코드구청)</span>
          </FooterContent>
          <FooterPresent>ⓒ CHECKOUT 11AM</FooterPresent>
          <VerticalLine />
          <FooterListTitle>퇴실시간 11시</FooterListTitle>
          <FooterList>
            <FooterItem>
              <span>ABOUT</span>
              <span>4POINT OF VIEW</span>
              <span>NEWSLETTER</span>
              <span>CAREERS</span>
              <span>CONTACT US</span>
              <span>이용약관</span>
              <span>개인정보 처리방침</span>
            </FooterItem>
          </FooterList>
        </FooterInner>
      </FooterWrap>
    </FooterLayout>
  );
};

export default Footer;

const FooterLayout = styled.footer`
  margin-top: 110px;
  height: 380px;
  min-width: 1000px;
  background-color: #f5f5f5;
`;

const FooterWrap = styled.div`
  max-width: 1800px;
  margin: 0 auto;
`;

const FooterInner = styled.div`
  position: relative;
  padding: 70px 15px;
`;

const FooterLogo = styled.div`
  font-size: 17px;
  font-weight: 700;
`;
const FooterTitle = styled.h3`
  line-height: 1.5;
`;

const FooterSub = styled.h3`
  letter-spacing: 3.5px;
`;

const FooterContent = styled.div`
  margin-top: 30px;
  font-size: 12.5px;
  font-weight: 300;
  letter-spacing: 0.5px;
  span {
    line-height: 2.5;
    margin-right: 20px;
  }
`;

const FooterPresent = styled.div`
  margin-top: 30px;
  font-weight: 200;
  font-size: 11.5px;
`;

const VerticalLine = styled.div`
  position: absolute;
  right: 230px;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 258px;
  background-color: #cccccc;
`;

const FooterList = styled.ul`
  position: absolute;
  bottom: 60px;
  right: 90px;
  font-size: 11px;
  font-weight: 300;
  line-height: 2;
`;

const FooterItem = styled.li`
  display: flex;
  flex-direction: column;
  letter-spacing: 2px;
`;

const FooterListTitle = styled.h3`
  position: absolute;
  top: 60px;
  right: 110px;
  font-size: 15px;
  font-weight: 500;
`;
