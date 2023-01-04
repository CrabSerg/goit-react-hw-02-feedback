import styled from 'styled-components';

export const Btn = styled.button`
  width: 100px;
  height: 40px;
  padding: 10px;
  border-radius: 20px;
  border: none;
  font-size: 18px;
  font-weight: 600;
  background-color: ${props => {
    switch (props.option) {
      case 'Good':
        return 'lightgreen';
      case 'Neutral':
        return 'yellow';
      case 'Bad':
        return 'tomato';
      default:
        return 'lightgrey';
    }
  }};
  transition: 300ms linear;

  &:hover,
  &:focus {
    background-color: ${props => {
      switch (props.option) {
        case 'Good':
          return 'limegreen';
        case 'Neutral':
          return 'gold';
        case 'Bad':
          return 'red';
        default:
          return 'lightgrey';
      }
    }};
    transform: scale(1.1);
  }
`;
