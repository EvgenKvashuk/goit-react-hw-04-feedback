import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Notification from "./Notification/Notification";
import Section from "./Section/Section";
import { useState } from "react";



const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrm = (e) => {
    if (e === "good") {
      setGood(good + 1);
    };
    if (e === "neutral") {
      setNeutral(neutral + 1);
    };
    if (e === "bad") {
      setBad(bad + 1);
    };
  };

  const total = good + neutral + bad;
  const positive = Math.round((good / total) * 100);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleIncrm}
        />
      </Section>

      <Section title="Statistics">
        {(total) !== 0 ?
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positive}
          />
          : <Notification message="There is no feedback"></Notification>}
      </Section>
    </>
  );
};

export default App;