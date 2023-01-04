import React, { Component } from 'react';
import { GlobalStyle } from '../GlobalStyles';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './FeedbackStatistics/Statistics';
import { Notification } from './Notification/Notification';
import { Box } from './Box';

export class App extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  countValue = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((previous, current) => previous + current);

  countPositiveFeedbackPercentage = () =>
    (
      (this.state.Good /
        Object.values(this.state).reduce(
          (previous, current) => previous + current
        )) *
      100
    ).toFixed(0);

  render() {
    return (
      <Box m="0 auto" p="40px" width="600px">
        <Box mb="40px">
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.countValue}
            />
          </Section>
        </Box>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.Good}
              neutral={this.state.Neutral}
              bad={this.state.Bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>

        <GlobalStyle />
      </Box>
    );
  }
}
