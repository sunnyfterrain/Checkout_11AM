import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import { RiMapPin2Line } from 'react-icons/ri';
import { AiOutlineCalendar } from 'react-icons/ai';
import Swal from 'sweetalert2';
import SearchModal from './components/SearchModal';
import LocationModal from './components/DateModal';

const Nav = () => {
  const [searchModalOn, setSearchModalOn] = useState(false);
  const [localModalOn, setLocalModalOn] = useState(false);
  const navigate = useNavigate();

  const isLogin = localStorage.getItem(LOGIN_TOKEN);

  const logout = () => {
    localStorage.removeItem(LOGIN_TOKEN);
    navigate('/login');
  };

  const handleSearchModal = () => {
    setSearchModalOn(!searchModalOn);
  };

  const handleLocalModal = () => {
    setLocalModalOn(!localModalOn);
  };

  const goToPage = id => {
    if (id === 1) {
      navigate('/list');
    } else if (id === 5) {
      navigate('/login');
    } else {
      Swal.fire({
        text: '아직 서비스가 지원되지 않습니다',
        icon: 'info',
        iconColor: '#484848',
        confirmButtonColor: '#000',
        confirmButtonText: '확인',
      });
    }
  };

  return (
    <>
      {searchModalOn && <SearchModal handleModal={handleSearchModal} />}
      {localModalOn && <LocationModal handleModal={handleLocalModal} />}
      <NavLayout>
        <NavWrapper>
          <Link to="/">
            <NavTitleWrap>
              <Logo>CHECK</Logo>
              <Logo space>O U T</Logo>
              <LogoSub>11:00AM</LogoSub>
            </NavTitleWrap>
          </Link>
          <NavSearchWrap>
            <NavSearchBtn>
              <RiMapPin2Line size={25} />
              <Button onClick={handleSearchModal}>어디로 떠날까요?</Button>
            </NavSearchBtn>
            <NavSearchBtn>
              <Vertical size="short" />
            </NavSearchBtn>
            <NavSearchBtn>
              <AiOutlineCalendar size={25} />
              <Button onClick={handleLocalModal}>언제 떠날까요?</Button>
            </NavSearchBtn>
          </NavSearchWrap>
          <NavMenuWrap>
            <NavMenuList vertical>
              {NAV_LIST.map(list => {
                return (
                  <NavMenuItem
                    key={list.id}
                    onClick={() => {
                      goToPage(list.id);
                    }}
                  >
                    {list.name}
                  </NavMenuItem>
                );
              })}
            </NavMenuList>
            <NavMenuList>
              {isLogin ? (
                <NavMenuItem onClick={logout}>LOGOUT</NavMenuItem>
              ) : (
                <NavMenuItem
                  onClick={() => {
                    goToPage(5);
                  }}
                >
                  LOGIN
                </NavMenuItem>
              )}

              <NavMenuItem>
                <Toggle />
              </NavMenuItem>
            </NavMenuList>
          </NavMenuWrap>
        </NavWrapper>
      </NavLayout>
      <NavGap />
    </>
  );
};

export default Nav;

const LOGIN_TOKEN = 'checkout_user';

const NAV_LIST = [
  { id: 1, name: 'FIND STAY' },
  { id: 2, name: 'PROMOTION' },
  { id: 3, name: 'JOURNAL' },
  { id: 4, name: 'PRE-ORDER' },
];
const AlignCenter = css`
  display: flex;
  align-items: center;
`;

const NavLayout = styled.header`
  position: fixed;
  z-index: 10000;
  width: 100%;
  height: 76px;
  background-color: #ffffff;
`;

const NavWrapper = styled.nav`
  ${AlignCenter}
  justify-content: space-between;
  position: relative;
  padding: 0 20px;
  height: 100%;
  margin: 0 auto;
  max-width: 1800px;
  border-bottom: 1px solid #e8e8e8;
`;

const NavTitleWrap = styled.div`
  text-align: center;
  line-height: 1.1;
  font-weight: ${({ theme }) => theme.fontBd};
`;

const Logo = styled.h1`
  font-family: 'Tomorrow', sans-serif;
  font-size: 18px;
  letter-spacing: ${({ space }) => (space ? '8.5px' : '5px')};
  text-indent: ${({ space }) => space || '-3px'};
`;

const LogoSub = styled.h3`
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 7px;
  text-indent: -1px;
`;

const Vertical = styled.div`
  width: 1px;
  height: 15px;
  background-color: #888888;
  margin: 0 23px;
`;

const NavMenuList = styled.ul`
  ${AlignCenter};
  font-weight: 700;
  font-size: 16px;
  height: 25px;
  border-right: ${({ vertical }) => vertical && '1px solid #dddddd'};
  padding-right: ${({ vertical }) => vertical && '25px'};
  margin-right: ${({ vertical }) => vertical && '15px'};
`;

const NavSearchWrap = styled.div`
  ${AlignCenter}
`;

const NavSearchBtn = styled.div`
  ${AlignCenter}
`;

const NavMenuItem = styled.li`
  ${AlignCenter}
  margin-left: 23px;
  cursor: ${({ onClick }) => onClick && 'pointer'};
`;

const NavMenuWrap = styled.div`
  ${AlignCenter}
`;

const Button = styled.button`
  border: none;
  background: none;
  font-size: 16px;
  padding: 10px 0 10px 5px;
  cursor: pointer;
`;

const Toggle = styled.div`
  width: 58px;
  height: 20px;
  background: url('https://www.stayfolio.com/web/images/toggle-ko.png');
  background-repeat: no-repeat;
  background-size: contain;
`;

const NavGap = styled.div`
  padding-top: 76px;
`;
