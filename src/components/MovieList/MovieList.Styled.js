import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

export const Item = styled.li`
  max-width: 200px;
  height: 310px;
  padding: 10px;
  background-color: lightgrey;
  border-radius: 3px;
  overflow-wrap: break-word;

  &:hover {
    transform: scale(1.04);
  }

  h3 {
    margin-top: 10px;
    margin-bottom: 0;
    color: black;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
