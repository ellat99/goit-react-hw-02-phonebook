import { Component } from 'react';
import './App.css';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

class App extends Component {
  state = { ...INITIAL_STATE };

  countPositiveFeedbackPercentage() {
    let { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    return total === 0 ? 0 : ((good / total) * 100).toFixed(0);
  }

  countTotalFeedback() {
    let { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  handleClick = evt => {
    const buttonName = evt.target.innerText;
    let { good, neutral, bad } = this.state;
    if (buttonName === 'Good') good++;
    if (buttonName === 'Neutral') neutral++;
    if (buttonName === 'Bad') bad++;
    this.setState({ good, neutral, bad });
  };

  render() {
    let { good, neutral, bad } = this.state;

    return (
      <main className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.handleClick}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {good === 0 && neutral === 0 && bad === 0 ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          )}
        </Section>
      </main>
    );
  }
}

export default App;