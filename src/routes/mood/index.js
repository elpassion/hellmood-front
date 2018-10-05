import { Component } from 'preact';
import classnames from 'classnames';

import commonStyle from '../common';
import style from './mood.scss';

import Logotype from '../../components/SVG/Logotype';
import { Happy, Unhappy, Sad, Satisfied, Neutral } from '../../components/SVG/MoodIcons';
import axios from 'axios';
import {route} from 'preact-router';
import routeMap from '../../config/routeMap';
import {inject, observer} from 'mobx-react';

@inject('authStore')
@observer
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
    const myToken = this.props.authStore.token;
    evt.preventDefault();

    axios.post(`${process.env.PREACT_APP_API_URL}/api/v1/create`, {
      headers: myToken,
      params: {
        rate: this.state.userRating,
      },
    })
      .then(response => {
        console.log(response);
      })
      .catch(function (error) {
        return error;
      })
      .then(() => {
        console.log('done');
      });
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
              <button
                id='1'
                onClick={this.handleMoodSelection}
                className={classnames(commonStyle.moodIconWrapper, {[commonStyle.isSad]: this.state.userRating === '1'})}
              >
                <Sad className={commonStyle.noEvents} />
              </button>
              <button
                id='2'
                onClick={this.handleMoodSelection}
                className={classnames(commonStyle.moodIconWrapper, {[commonStyle.isUnhappy]: this.state.userRating === '2'})}
              >
                <Unhappy className={commonStyle.noEvents} />
              </button>
              <button
                id='3'
                onClick={this.handleMoodSelection}
                className={classnames(commonStyle.moodIconWrapper, {[commonStyle.isNeutral]: this.state.userRating === '3'})}
              >
                <Neutral className={commonStyle.noEvents} />
              </button>
              <button
                id='4'
                onClick={this.handleMoodSelection}
                className={classnames(commonStyle.moodIconWrapper, {[commonStyle.isSatisfied]: this.state.userRating === '4'})}
              >
                <Satisfied className={commonStyle.noEvents} />
              </button>
              <button
                id='5'
                onClick={this.handleMoodSelection}
                className={classnames(commonStyle.moodIconWrapper, {[commonStyle.isHappy]: this.state.userRating === '5'})}
              >
                <Happy className={commonStyle.noEvents} />
              </button>
            </div>
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
