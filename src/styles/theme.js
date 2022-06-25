import { css } from 'styled-components';

const theme = {
  background: '#FFFEFC',
  fontMd: 500,
  fontBd: 700,
  flexLayout: (direction = 'row', align = 'center', justify = 'center') => css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `,
};

export default theme;
