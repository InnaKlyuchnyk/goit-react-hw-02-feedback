import PropTypes from "prop-types";
import { StatisticsList, StatListItem } from "./StstusticsList.styled";

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <StatisticsList>
      <StatListItem>Good: {good}</StatListItem>
      <StatListItem>Neutral: {neutral}</StatListItem>
      <StatListItem>Bad: {bad}</StatListItem>
      <StatListItem>Total: {total}</StatListItem>
      <StatListItem>Positive feedback: {positivePercentage}%</StatListItem>
    </StatisticsList>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
