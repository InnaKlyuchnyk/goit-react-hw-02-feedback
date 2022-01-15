import PropTypes from "prop-types";
import { Button, ButtonContainer } from "./FeedbackOptions.styled";

export default function FeedbackOptions({ onGood, onNeutral, onBad }) {
  return (
    <ButtonContainer>
      <Button type="button" onClick={onGood}>
        Good
      </Button>
      <Button type="button" onClick={onNeutral}>
        Neutral
      </Button>
      <Button type="button" onClick={onBad}>
        Bad
      </Button>
    </ButtonContainer>
  );
}

FeedbackOptions.propTypes = {
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,
};
