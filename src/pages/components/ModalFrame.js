import React, { useEffect } from 'react';
import styled from 'styled-components';
import ModalPortal from './ModalPortal';

const ModalFrame = ({ handleModal, children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  return (
    <ModalPortal>
      <Container>
        <Background onClick={handleModal} />
        <ModalBlock>
          <Close onClick={handleModal} />
          <Contents>{children}</Contents>
        </ModalBlock>
      </Container>
    </ModalPortal>
  );
};

export default ModalFrame;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 30;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const Background = styled.div`
  position: fixed;
  z-index: 15;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(0.5px);
  animation: modal-show 200ms;
  @keyframes modal-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalBlock = styled.div`
  position: fixed;
  z-index: 20;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 10px;
  padding: 40px 20px;
  background-color: #ffffff;
  width: 1225px;
  height: 750px;
  @media (max-width: 1200px) {
    width: 1010px;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
  min-height: 35rem;
  animation: modal-show 100ms;
  @keyframes modal-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Close = styled.button`
  position: absolute;
  z-index: 99;
  top: 100px;
  right: 40px;
  width: 50px;
  height: 50px;
  background: url('https://www.stayfolio.com/web/images/btn-close.png')
    no-repeat 50%;
  border: none;
  cursor: pointer;
  @media (max-width: 1024px) {
    position: fixed;
    top: 50px;
    right: 30px;
    background-size: 25px 25px;
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
