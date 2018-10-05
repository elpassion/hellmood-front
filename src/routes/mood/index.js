import { Component } from 'preact';
import classnames from 'classnames';

import commonStyle from '../common';
import style from './mood.scss';

import Logotype from '../../components/SVG/Logotype';

class RateYourDay extends Component {
  render () {
    const appContainerClasses = classnames(commonStyle.appContainer, commonStyle.flexContainer);

    return (
      <div className={commonStyle.mainContainer}>
        <div className={appContainerClasses}>
          <Logotype className={style.rateMoodLogotype} />

          <form className={style.rateYourMoodForm} onSubmit={this.submitForm}>
            <p className={style.rateYourMoodHeader}>
              How is your mood?
            </p>
            <div className={style.chooseMoodContainer}>
              <div className='mood' id='1'>
                1
              </div>
              <div className='mood' id='2'>
                2
              </div>
              <div className='mood' id='3'>
                3
              </div>
              <div className='mood' id='4'>
                4
              </div>
              <div className='mood' id='5'>
                5
              </div>
            </div>
            <button className={commonStyle.primaryButton}>
              Send Review
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default RateYourDay;
