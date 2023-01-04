import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import { Value, TotalValue } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <Box display="flex" justifyContent="center" gridGap="10px" mb="15px">
        <Value value="good">Good: {good}</Value>
        <Value value="neutral">Neutral: {neutral}</Value>
        <Value value="bad">Bad: {bad}</Value>
      </Box>

      <TotalValue>Total: {total}</TotalValue>
      <TotalValue>Positive Feedback: {positivePercentage} %</TotalValue>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
