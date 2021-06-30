import styled from 'styled-components';

const AppContainer = styled.div`
  width: 285px;
  padding: 1rem 0;

  @media (min-width: 414px) {
    width: 330px;
  }

  @media (min-width: 834px) {
    width: 680px;
  }
`;

export default AppContainer;
