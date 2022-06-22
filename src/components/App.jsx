import {useState} from 'react'
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () =>  good + neutral + bad;
  
  const countPositiveFeedbackPercentage = () => {
  
    const positivePercentage = Math.round((good / countTotalFeedback()) * 100);
    return positivePercentage || 0;
  }
  const onLeaveFeedback = event => {
    const { name } = event.target;
    switch (name) {
      case 'good': setGood(prevState => prevState + 1);
        break;
      
      case 'neutral': setNeutral(prevState => prevState + 1);
        break;
      
      case 'bad': setBad(prevState => prevState + 1);
        break;
      
      default: return;
      
    }
  }
 return (
   <>
        <Section title="Please leave feedback">
          <FeedbackOptions
         options={Object.keys({ good, neutral, bad})}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
  );
}
  
 

