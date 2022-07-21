import styled from 'styled-components';
import Swal from 'sweetalert2';

const ReserveButton = () => {
  const handleButton = () => {
    const userToken = localStorage.getItem('checkout_user');

    userToken
      ? Swal.fire({
          text: '예약되었습니다',
          icon: 'info',
          iconColor: '#484848',
          confirmButtonColor: '#000',
          confirmButtonText: '확인',
        })
      : Swal.fire({
          text: '먼저 로그인 해주세요',
          icon: 'info',
          iconColor: '#484848',
          confirmButtonColor: '#000',
          confirmButtonText: '확인',
        });
  };

  return <BookingButton onClick={handleButton}>예약하기</BookingButton>;
};

export default ReserveButton;

const BookingButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: black;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;
