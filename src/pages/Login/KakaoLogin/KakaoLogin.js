import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { API } from '../../../config';

const KakaoLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryString = location.search;
  const accessCode = new URLSearchParams(queryString).get('code');

  const sendCodeToBack = () => {
    const option = {
      url: `${API.KAKAO_LOGIN}?code=${accessCode}`,
      method: 'GET',
    };
    axios(option).then(res => {
      if (res.status === 200) {
        localStorage.setItem(USER_TOKEN, res.data.token);
        navigate('/');
      } else {
        navigate('/login');
        alert('로그인이 실패하였습니다.');
      }
    });
  };

  useEffect(() => {
    sendCodeToBack();
  }, []);

  return (
    <KakaoLoginLayout>
      <SpinnerContainer>
        <Spinner />
        <Loading>로그인중입니다</Loading>
      </SpinnerContainer>
    </KakaoLoginLayout>
  );
};

export default KakaoLogin;

const USER_TOKEN = 'checkout_user';

const SpinnerContainer = styled.div`
  ${props => props.theme.flex.flexLayout()}
  height: 100vh;
`;

const Spinner = styled.div`
  width: 60px;
  height: 60px;
  border: 5px solid lightgray;
  border-radius: 50%;
  border-top: 5px solid white;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const KakaoLoginLayout = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Loading = styled.h1`
  position: absolute;
  left: -35%;
  top: 130%;
  width: 200px;
  font-size: 11px;
`;
