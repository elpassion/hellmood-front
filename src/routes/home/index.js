import { Component } from 'preact';
import classnames from 'classnames';

import commonStyle from '../common';
import style from './home.scss';
import routeMap from '../../config/routeMap';

import Logotype from '../../components/SVG/Logotype';
import Settings from '../../components/SVG/Settings';

class Home extends Component {
  render () {
    const navClasses = classnames(style.navContainer, commonStyle.container);
    const containerClasses = classnames(commonStyle.appContainer, commonStyle.isFixed);
    const buttonContainer = classnames(commonStyle.container, style.homeButtonWrapper);
    return (
      <div className={commonStyle.mainContainer}>
        <div className={containerClasses}>
          <nav className={navClasses}>
            <Logotype />
            <Settings />
          </nav>
          <div className={style.homeSection}>
            <div className={commonStyle.container}>
              <div className={style.moodBlock}>
                <time className={style.moodDate}>4 thu</time>
                <div className={style.averageMood}>
                  <p>Average mood:</p>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 20 20"><defs><path id="a" d="M14,0 C15.103,0 16,0.897 16,2 C16,3.103 15.103,4 14,4 C12.897,4 12,3.103 12,2 C12,0.897 12.897,0 14,0 Z M8,0 C9.103,0 10,0.897 10,2 C10,3.103 9.103,4 8,4 C6.897,4 6,3.103 6,2 C6,0.897 6.897,0 8,0 Z M2,0 C3.103,0 4,0.897 4,2 C4,3.103 3.103,4 2,4 C0.897,4 0,3.103 0,2 C0,0.897 0.897,0 2,0 Z"/></defs><g fill="none" fillRule="evenodd" transform="translate(2.000000, 8.000000)"><mask id="b" fill="#fff"><use xlinkHref="#a"/></mask><use fill="#A9AFC1" xlinkHref="#a"/><g fill="#A7B1D1" mask="url(#b)"><path d="M0 0H21V21H0z" transform="translate(-2.000000, -8.000000)"/></g></g></svg></div>
                <div className={style.moodBlockEmpty}></div>
                <p className={style.averageMoodIcon}>
                  <svg width="72" height="30" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero" fill="none"><circle fill="#FFF" cx="62" cy="10" r="10"/><circle fill="#EA7980" cx="62" cy="10" r="4"/><circle fill="#FFF" cx="10" cy="10" r="10"/><circle fill="#EA7980" cx="10" cy="10" r="4"/><path d="M31 13h10" stroke="#F28684" strokeWidth="2" strokeLinecap="round"/><path d="M26 26c2.963-2 6.296-3 10-3 3.704 0 7.037 1 10 3" stroke="#E0676E" strokeWidth="2" strokeLinecap="round"/></g></svg>
                </p>
              </div>
              <div className={style.moodBlock}>
                <time className={style.moodDate}>4 thu</time>
                <div className={style.averageMood}>
                  <p>Average mood:</p>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 20 20"><defs><path id="a" d="M14,0 C15.103,0 16,0.897 16,2 C16,3.103 15.103,4 14,4 C12.897,4 12,3.103 12,2 C12,0.897 12.897,0 14,0 Z M8,0 C9.103,0 10,0.897 10,2 C10,3.103 9.103,4 8,4 C6.897,4 6,3.103 6,2 C6,0.897 6.897,0 8,0 Z M2,0 C3.103,0 4,0.897 4,2 C4,3.103 3.103,4 2,4 C0.897,4 0,3.103 0,2 C0,0.897 0.897,0 2,0 Z"/></defs><g fill="none" fillRule="evenodd" transform="translate(2.000000, 8.000000)"><mask id="b" fill="#fff"><use xlinkHref="#a"/></mask><use fill="#A9AFC1" xlinkHref="#a"/><g fill="#A7B1D1" mask="url(#b)"><path d="M0 0H21V21H0z" transform="translate(-2.000000, -8.000000)"/></g></g></svg></div>
                <div className={style.moodBlockEmpty}></div>
                <p className={style.averageMoodIcon}>
                  <svg width="72" height="30" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero" fill="none"><circle fill="#FFF" cx="62" cy="10" r="10"/><circle fill="#EA7980" cx="62" cy="10" r="4"/><circle fill="#FFF" cx="10" cy="10" r="10"/><circle fill="#EA7980" cx="10" cy="10" r="4"/><path d="M31 13h10" stroke="#F28684" strokeWidth="2" strokeLinecap="round"/><path d="M26 26c2.963-2 6.296-3 10-3 3.704 0 7.037 1 10 3" stroke="#E0676E" strokeWidth="2" strokeLinecap="round"/></g></svg>
                </p>
              </div>
              <div className={style.moodBlock}>
                <time className={style.moodDate}>4 thu</time>
                <div className={style.averageMood}>
                  <p>Average mood:</p>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 20 20"><defs><path id="a" d="M14,0 C15.103,0 16,0.897 16,2 C16,3.103 15.103,4 14,4 C12.897,4 12,3.103 12,2 C12,0.897 12.897,0 14,0 Z M8,0 C9.103,0 10,0.897 10,2 C10,3.103 9.103,4 8,4 C6.897,4 6,3.103 6,2 C6,0.897 6.897,0 8,0 Z M2,0 C3.103,0 4,0.897 4,2 C4,3.103 3.103,4 2,4 C0.897,4 0,3.103 0,2 C0,0.897 0.897,0 2,0 Z"/></defs><g fill="none" fillRule="evenodd" transform="translate(2.000000, 8.000000)"><mask id="b" fill="#fff"><use xlinkHref="#a"/></mask><use fill="#A9AFC1" xlinkHref="#a"/><g fill="#A7B1D1" mask="url(#b)"><path d="M0 0H21V21H0z" transform="translate(-2.000000, -8.000000)"/></g></g></svg></div>
                <div className={style.moodBlockEmpty}></div>
                <p className={style.averageMoodIcon}>
                  <svg width="72" height="30" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero" fill="none"><circle fill="#FFF" cx="62" cy="10" r="10"/><circle fill="#EA7980" cx="62" cy="10" r="4"/><circle fill="#FFF" cx="10" cy="10" r="10"/><circle fill="#EA7980" cx="10" cy="10" r="4"/><path d="M31 13h10" stroke="#F28684" strokeWidth="2" strokeLinecap="round"/><path d="M26 26c2.963-2 6.296-3 10-3 3.704 0 7.037 1 10 3" stroke="#E0676E" strokeWidth="2" strokeLinecap="round"/></g></svg>
                </p>
              </div>
              <div className={style.moodBlock}>
                <time className={style.moodDate}>4 thu</time>
                <div className={style.averageMood}>
                  <p>Average mood:</p>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 20 20"><defs><path id="a" d="M14,0 C15.103,0 16,0.897 16,2 C16,3.103 15.103,4 14,4 C12.897,4 12,3.103 12,2 C12,0.897 12.897,0 14,0 Z M8,0 C9.103,0 10,0.897 10,2 C10,3.103 9.103,4 8,4 C6.897,4 6,3.103 6,2 C6,0.897 6.897,0 8,0 Z M2,0 C3.103,0 4,0.897 4,2 C4,3.103 3.103,4 2,4 C0.897,4 0,3.103 0,2 C0,0.897 0.897,0 2,0 Z"/></defs><g fill="none" fillRule="evenodd" transform="translate(2.000000, 8.000000)"><mask id="b" fill="#fff"><use xlinkHref="#a"/></mask><use fill="#A9AFC1" xlinkHref="#a"/><g fill="#A7B1D1" mask="url(#b)"><path d="M0 0H21V21H0z" transform="translate(-2.000000, -8.000000)"/></g></g></svg></div>
                <div className={style.moodBlockEmpty}></div>
                <p className={style.averageMoodIcon}>
                  <svg width="72" height="30" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero" fill="none"><circle fill="#FFF" cx="62" cy="10" r="10"/><circle fill="#EA7980" cx="62" cy="10" r="4"/><circle fill="#FFF" cx="10" cy="10" r="10"/><circle fill="#EA7980" cx="10" cy="10" r="4"/><path d="M31 13h10" stroke="#F28684" strokeWidth="2" strokeLinecap="round"/><path d="M26 26c2.963-2 6.296-3 10-3 3.704 0 7.037 1 10 3" stroke="#E0676E" strokeWidth="2" strokeLinecap="round"/></g></svg>
                </p>
              </div>
              <div className={style.moodBlock}>
                <time className={style.moodDate}>4 thu</time>
                <div className={style.averageMood}>
                  <p>Average mood:</p>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 20 20"><defs><path id="a" d="M14,0 C15.103,0 16,0.897 16,2 C16,3.103 15.103,4 14,4 C12.897,4 12,3.103 12,2 C12,0.897 12.897,0 14,0 Z M8,0 C9.103,0 10,0.897 10,2 C10,3.103 9.103,4 8,4 C6.897,4 6,3.103 6,2 C6,0.897 6.897,0 8,0 Z M2,0 C3.103,0 4,0.897 4,2 C4,3.103 3.103,4 2,4 C0.897,4 0,3.103 0,2 C0,0.897 0.897,0 2,0 Z"/></defs><g fill="none" fillRule="evenodd" transform="translate(2.000000, 8.000000)"><mask id="b" fill="#fff"><use xlinkHref="#a"/></mask><use fill="#A9AFC1" xlinkHref="#a"/><g fill="#A7B1D1" mask="url(#b)"><path d="M0 0H21V21H0z" transform="translate(-2.000000, -8.000000)"/></g></g></svg></div>
                <div className={style.moodBlockEmpty}></div>
                <p className={style.averageMoodIcon}>
                  <svg width="72" height="30" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero" fill="none"><circle fill="#FFF" cx="62" cy="10" r="10"/><circle fill="#EA7980" cx="62" cy="10" r="4"/><circle fill="#FFF" cx="10" cy="10" r="10"/><circle fill="#EA7980" cx="10" cy="10" r="4"/><path d="M31 13h10" stroke="#F28684" strokeWidth="2" strokeLinecap="round"/><path d="M26 26c2.963-2 6.296-3 10-3 3.704 0 7.037 1 10 3" stroke="#E0676E" strokeWidth="2" strokeLinecap="round"/></g></svg>
                </p>
              </div>
              <div className={style.moodBlock}>
                <time className={style.moodDate}>4 thu</time>
                <div className={style.averageMood}>
                  <p>Average mood:</p>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 20 20"><defs><path id="a" d="M14,0 C15.103,0 16,0.897 16,2 C16,3.103 15.103,4 14,4 C12.897,4 12,3.103 12,2 C12,0.897 12.897,0 14,0 Z M8,0 C9.103,0 10,0.897 10,2 C10,3.103 9.103,4 8,4 C6.897,4 6,3.103 6,2 C6,0.897 6.897,0 8,0 Z M2,0 C3.103,0 4,0.897 4,2 C4,3.103 3.103,4 2,4 C0.897,4 0,3.103 0,2 C0,0.897 0.897,0 2,0 Z"/></defs><g fill="none" fillRule="evenodd" transform="translate(2.000000, 8.000000)"><mask id="b" fill="#fff"><use xlinkHref="#a"/></mask><use fill="#A9AFC1" xlinkHref="#a"/><g fill="#A7B1D1" mask="url(#b)"><path d="M0 0H21V21H0z" transform="translate(-2.000000, -8.000000)"/></g></g></svg></div>
                <div className={style.moodBlockEmpty}></div>
                <p className={style.averageMoodIcon}>
                  <svg width="72" height="30" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero" fill="none"><circle fill="#FFF" cx="62" cy="10" r="10"/><circle fill="#EA7980" cx="62" cy="10" r="4"/><circle fill="#FFF" cx="10" cy="10" r="10"/><circle fill="#EA7980" cx="10" cy="10" r="4"/><path d="M31 13h10" stroke="#F28684" strokeWidth="2" strokeLinecap="round"/><path d="M26 26c2.963-2 6.296-3 10-3 3.704 0 7.037 1 10 3" stroke="#E0676E" strokeWidth="2" strokeLinecap="round"/></g></svg>
                </p>
              </div>
              <div className={style.moodBlock}>
                <time className={style.moodDate}>4 thu</time>
                <div className={style.averageMood}>
                  <p>Average mood:</p>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 20 20"><defs><path id="a" d="M14,0 C15.103,0 16,0.897 16,2 C16,3.103 15.103,4 14,4 C12.897,4 12,3.103 12,2 C12,0.897 12.897,0 14,0 Z M8,0 C9.103,0 10,0.897 10,2 C10,3.103 9.103,4 8,4 C6.897,4 6,3.103 6,2 C6,0.897 6.897,0 8,0 Z M2,0 C3.103,0 4,0.897 4,2 C4,3.103 3.103,4 2,4 C0.897,4 0,3.103 0,2 C0,0.897 0.897,0 2,0 Z"/></defs><g fill="none" fillRule="evenodd" transform="translate(2.000000, 8.000000)"><mask id="b" fill="#fff"><use xlinkHref="#a"/></mask><use fill="#A9AFC1" xlinkHref="#a"/><g fill="#A7B1D1" mask="url(#b)"><path d="M0 0H21V21H0z" transform="translate(-2.000000, -8.000000)"/></g></g></svg></div>
                <div className={style.moodBlockEmpty}></div>
                <p className={style.averageMoodIcon}>
                  <svg width="72" height="30" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero" fill="none"><circle fill="#FFF" cx="62" cy="10" r="10"/><circle fill="#EA7980" cx="62" cy="10" r="4"/><circle fill="#FFF" cx="10" cy="10" r="10"/><circle fill="#EA7980" cx="10" cy="10" r="4"/><path d="M31 13h10" stroke="#F28684" strokeWidth="2" strokeLinecap="round"/><path d="M26 26c2.963-2 6.296-3 10-3 3.704 0 7.037 1 10 3" stroke="#E0676E" strokeWidth="2" strokeLinecap="round"/></g></svg>
                </p>
              </div>
            </div>
          </div>
          <div className={buttonContainer}>
            <a
              href={routeMap.rateYourDay}
              className={commonStyle.primaryButton}
            >
              Add Review
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
