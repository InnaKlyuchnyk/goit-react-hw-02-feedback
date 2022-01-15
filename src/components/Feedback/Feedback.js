import { Component } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

import { GlobalStyle } from "../constans/GlobalStyle";

export default class Feedback extends Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };
  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };

  handleGood = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleNeutral = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handleBad = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    const positivePercentage = Math.round((this.state.good * 100) / total);

    return (
      <div>
        <Section title="Please leave feedback">
          {" "}
          <FeedbackOptions
            onGood={this.handleGood}
            onNeutral={this.handleNeutral}
            onBad={this.handleBad}
          />
        </Section>

        <Section title="Statistics">
          {total === 0 && <Notification message="There is no feedback" />}

          {total > 0 && (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
        <GlobalStyle />
      </div>
    );
  }
}
