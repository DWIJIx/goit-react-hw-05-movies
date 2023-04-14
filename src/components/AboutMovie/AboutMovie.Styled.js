import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 15px;
    flex-direction: row;
  }

  @media screen and (min-width: 1280px) {
    gap: 30px;
  }
`;

export const BackButton = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  margin-top: -25px;
  margin-bottom: 20px;
  width: fit-content;
  padding: 7px 20px;
  border-radius: 4px;
  background-color: grey;
  color: #ffffff;
  font-size: 14px;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
`;
