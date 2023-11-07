import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Notification from "./Notification/Notification";
import Section from "./Section/Section";



class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  // =====================================================================================================================
  // custom method
  handleIncrm = (option) => {
    this.setState(preventState => ({
      [option]: preventState[option] + 1,
    }))
  };

  // =================================================================================================================
  // counting
  countTotalFeedback = () => {
    const total = Object.values(this.state);
    return total.reduce((acc, vote) => vote + acc, 0);
  };
  
  countPositiveFeedbackPercentage = (total) => {
    const countPositive = Math.round((this.state.good / total) * 100);
    return countPositive;
  };

  // =====================================================================================================================
  render() {
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage(total);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleIncrm}
          />
        </Section>

        <Section title="Statistics">
          {(total) !== 0 ?
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positive}
            />
            : <Notification message="There is no feedback"></Notification>}
        </Section>
      </>
    );
  };
}

export default App;


