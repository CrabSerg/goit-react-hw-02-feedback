import styled from 'styled-components';

export const Value = styled.p`
  width: 100px;
  height: 40px;
  padding: 8px 0;
  border-radius: 20px;
  text-align: center;
  border: 2px solid;
  border-color: ${props => {
    switch (props.value) {
      case 'good':
        return 'green';
      case 'neutral':
        return 'gold';
      case 'bad':
        return 'red';
      default:
        return 'lightgrey';
    }
  }};
  font-size: 16px;
  font-weight: 600;
`;

export const TotalValue = styled.p`
  text-align: center;
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  font-size: 22px;
`;
