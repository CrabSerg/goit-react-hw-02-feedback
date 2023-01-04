import PropTypes, { string } from 'prop-types';
import { Box } from 'components/Box';
import { Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box display="flex" justifyContent="center" gridGap="10px">
      {options.map(option => {
        return (
          <Btn
            option={option}
            type="button"
            key={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </Btn>
        );
      })}
    </Box>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
