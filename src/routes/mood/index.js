import { Component } from 'preact';
import classnames from 'classnames';

import commonStyle from '../common';
import style from './mood.scss';

import Logotype from '../../components/SVG/Logotype';
import { Happy, Unhappy, Sad, Satisfied, Neutral } from '../../components/SVG/MoodIcons';

class RateYourDay extends Component {
  constructor (props) {
    super(props);

    this.handleMoodSelection = this.handleMoodSelection.bind(this);
  }

  state = {
    userRating: 0,
  };

  handleMoodSelection = (evt) => {
    evt.preventDefault();
    const moodRating = evt.target.id;

    this.setState({
      userRating: moodRating,
    });
  };

  submitForm = (evt) => {
    evt.preventDefault();

    console.log('send');
  };

  render () {
    const userNotRatedYet = this.state.userRating === 0;

    const appContainerClasses = classnames(commonStyle.appContainer, commonStyle.flexContainer);
    const buttonClasses = classnames(commonStyle.primaryButton, {[commonStyle.isDisabled]: userNotRatedYet});

    return (
      <div className={commonStyle.mainContainer}>
        <div className={appContainerClasses}>
          <Logotype className={style.rateMoodLogotype} />

          <form className={style.rateYourMoodForm} onSubmit={this.submitForm}>
            <p className={style.rateYourMoodHeader}>
              How is your mood?
            </p>
            <div className={style.chooseMoodContainer}>
              <button className='mood' id='1' onClick={this.handleMoodSelection}>
                <Sad className={commonStyle.noEvents} />
              </button>
              <button className='mood' id='2' onClick={this.handleMoodSelection}>
                <Unhappy className={commonStyle.noEvents} />
              </button>
              <button className='mood' id='3' onClick={this.handleMoodSelection}>
                <Neutral className={commonStyle.noEvents} />
              </button>
              <button className='mood' id='4' onClick={this.handleMoodSelection}>
                <Satisfied className={commonStyle.noEvents} />
              </button>
              <button className='mood' id='5' onClick={this.handleMoodSelection}>
                <Happy className={commonStyle.noEvents} />
              </button>
            </div>
            <input type='hidden' required value={this.state.userRating} />
            <button className={buttonClasses}>
              Send Review
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default RateYourDay;
