import { Component } from 'preact';
import classnames from 'classnames';
import commonStyle from '../common';
import style from './home.scss';

class Home extends Component {
  render () {
    return (
      <div className={commonStyle.mainContainer}>
        <div className={commonStyle.appContainer}>
          <nav>
            <div className={style.navContainer}>
              <svg xmlns="http://www.w3.org/2000/svg" width="109px" height="42px" viewBox="0 0 109 42"><g fill="none" fill-rule="evenodd"><path fill="#1FC237" d="M41.9990009,21.1957157 C41.8947201,32.7910211 32.409028,42.1140918 20.814546,41.9989448 C9.2084773,41.8953124 -0.103413449,32.4148741 0.000867368294,20.8080541 C0.105148185,9.20891051 9.5985648,-0.110321981 21.1930468,0.000986808891 C32.791391,0.100780897 42.1110062,9.59657216 41.9990009,21.1957157"/><path fill="#FFF" d="M20.31808 26.6128L20.31808 29.77312 10 29.77312 10 13 20.19904 13 20.19904 16.16416 13.29088 16.16416 13.29088 19.73152 19.6 19.73152 19.6 22.8496 13.29088 22.8496 13.29088 26.6128zM32.64224 26.6128L32.64224 29.77312 23 29.77312 23 13 26.28704 13 26.28704 26.6128z"/><path fill="#1C1C41" fill-rule="nonzero" d="M66.32,12.768 L66.32,28 L63.33888,28 L63.33888,18.12096 L59.05216,25.19296 L58.704,25.19296 L54.41728,18.14272 L54.41728,28 L51.4144,28 L51.4144,12.768 L54.50432,12.768 L58.87808,19.97056 L63.23008,12.768 L66.32,12.768 Z M78.6506667,26.65088 C77.5336478,27.7533922 76.1700348,28.30464 74.5597867,28.30464 C72.9495387,28.30464 71.5895523,27.7497655 70.4797867,26.64 C69.3700212,25.5302345 68.8151467,24.1702481 68.8151467,22.56 C68.8151467,20.9497519 69.3700212,19.5897655 70.4797867,18.48 C71.5895523,17.3702345 72.9495387,16.81536 74.5597867,16.81536 C76.1700348,16.81536 77.5336478,17.3702345 78.6506667,18.48 C79.7676857,19.5897655 80.3261867,20.9497519 80.3261867,22.56 C80.3261867,24.1702481 79.7676857,25.5338611 78.6506667,26.65088 Z M72.4490667,24.71424 C73.0148296,25.2800028 73.7183959,25.56288 74.5597867,25.56288 C75.4011776,25.56288 76.1047439,25.2800028 76.6705067,24.71424 C77.2362696,24.1484772 77.5191467,23.4304044 77.5191467,22.56 C77.5191467,21.6895956 77.2362696,20.9715228 76.6705067,20.40576 C76.1047439,19.8399972 75.4011776,19.55712 74.5597867,19.55712 C73.7183959,19.55712 73.0184562,19.8399972 72.4599467,20.40576 C71.9014373,20.9715228 71.6221867,21.6895956 71.6221867,22.56 C71.6221867,23.4304044 71.8978107,24.1484772 72.4490667,24.71424 Z M91.9387735,26.65088 C90.8217546,27.7533922 89.4581416,28.30464 87.8478935,28.30464 C86.2376454,28.30464 84.877659,27.7497655 83.7678935,26.64 C82.658128,25.5302345 82.1032535,24.1702481 82.1032535,22.56 C82.1032535,20.9497519 82.658128,19.5897655 83.7678935,18.48 C84.877659,17.3702345 86.2376454,16.81536 87.8478935,16.81536 C89.4581416,16.81536 90.8217546,17.3702345 91.9387735,18.48 C93.0557924,19.5897655 93.6142935,20.9497519 93.6142935,22.56 C93.6142935,24.1702481 93.0557924,25.5338611 91.9387735,26.65088 Z M85.7371735,24.71424 C86.3029363,25.2800028 87.0065026,25.56288 87.8478935,25.56288 C88.6892844,25.56288 89.3928507,25.2800028 89.9586135,24.71424 C90.5243763,24.1484772 90.8072535,23.4304044 90.8072535,22.56 C90.8072535,21.6895956 90.5243763,20.9715228 89.9586135,20.40576 C89.3928507,19.8399972 88.6892844,19.55712 87.8478935,19.55712 C87.0065026,19.55712 86.306563,19.8399972 85.7480535,20.40576 C85.189544,20.9715228 84.9102935,21.6895956 84.9102935,22.56 C84.9102935,23.4304044 85.1859174,24.1484772 85.7371735,24.71424 Z M104.20416,12.768 L107.0112,12.768 L107.0112,28 L104.20416,28 L104.20416,26.71616 C103.377276,27.775152 102.202248,28.30464 100.67904,28.30464 C99.2138596,28.30464 97.9626721,27.7497655 96.9254402,26.64 C95.8882084,25.5302345 95.3696002,24.1702481 95.3696002,22.56 C95.3696002,20.9497519 95.8882084,19.5897655 96.9254402,18.48 C97.9626721,17.3702345 99.2138596,16.81536 100.67904,16.81536 C102.202248,16.81536 103.377276,17.344848 104.20416,18.40384 L104.20416,12.768 Z M99.0252802,24.77952 C99.6055498,25.3452828 100.330876,25.62816 101.20128,25.62816 C102.071685,25.62816 102.789757,25.3416562 103.35552,24.76864 C103.921283,24.1956238 104.20416,23.4594178 104.20416,22.56 C104.20416,21.6605822 103.921283,20.9243762 103.35552,20.35136 C102.789757,19.7783438 102.071685,19.49184 101.20128,19.49184 C100.330876,19.49184 99.6091764,19.7783438 99.0361602,20.35136 C98.4631441,20.9243762 98.1766402,21.6605822 98.1766402,22.56 C98.1766402,23.4594178 98.4595174,24.1992504 99.0252802,24.77952 Z"/></g></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M0 0H24V24H0z"/><path stroke="#9BA7C0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.4247999,12.9 C18.4247999,12.6292971 18.5162057,12.2707029 18.5162057,12 C18.5162057,11.7292971 18.5162057,11.3707029 18.4247999,11.1 L20.3162057,9.75 C20.4955028,9.6585942 20.5869086,9.3914067 20.4076124,9.1207029 L18.6076124,5.9707029 C18.5162057,5.7 18.2455028,5.6085942 18.0662057,5.7 L15.9076124,6.6914067 C15.4576124,6.3292971 14.8247999,5.9707029 14.2869086,5.7914067 L14.0162057,3.45 C14.0162057,3.1792971 13.8369086,3 13.5662057,3 L9.96620569,3 C9.69550279,3 9.51620569,3.1792971 9.51620569,3.45 L9.24550279,5.7 C8.61620569,5.9707029 8.07479989,6.2414067 7.62479989,6.6 L5.46620569,5.7 C5.28690859,5.6085942 5.01620569,5.7 4.92479989,5.8792971 L3.12479989,9.0292971 C2.94550279,9.3 2.94550279,9.5707029 3.21620569,9.6585942 L5.10761239,11.1 C5.10761239,11.3707029 5.01620569,11.7292971 5.01620569,12 C5.01620569,12.2707029 5.01620569,12.6292971 5.10761239,12.9 L3.21620569,14.25 C3.03690859,14.3414067 2.94550279,14.6085942 3.12479989,14.8792971 L4.92479989,18.0292971 C5.01620569,18.3 5.28690859,18.3914067 5.46620569,18.3 L7.62479989,17.3085942 C8.07479989,17.6707029 8.70761239,18.0292971 9.24550279,18.2085942 L9.51620569,20.55 C9.51620569,20.8207029 9.69550279,21 9.96620569,21 L13.5662057,21 C13.8369086,21 14.0162057,20.8207029 14.0162057,20.55 L14.2869086,18.2085942 C14.9162057,17.9414067 15.4576124,17.6707029 15.9076124,17.3085942 L18.0662057,18.3 C18.2455028,18.3914067 18.5162057,18.3 18.6076124,18.1207029 L20.4076124,14.9707029 C20.4955028,14.7914067 20.4955028,14.5207029 20.3162057,14.3414067 L18.4247999,12.9 Z M12,15 C10.3505858,15 9,13.6494142 9,12 C9,10.3505858 10.3505858,9 12,9 C13.6494142,9 15,10.3505858 15,12 C15,13.6494142 13.6494142,15 12,15 Z"/></g></svg>
            </div>
          </nav>
          <div className={style.homeWrapper}>
            <div>
              <p>Today</p>
              <div>
                <div>
                  <time>4 thu</time>
                </div>
                <div>
                  <div>
                    <p>Average mood:</p>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 20 20"><defs><path id="a" d="M14,0 C15.103,0 16,0.897 16,2 C16,3.103 15.103,4 14,4 C12.897,4 12,3.103 12,2 C12,0.897 12.897,0 14,0 Z M8,0 C9.103,0 10,0.897 10,2 C10,3.103 9.103,4 8,4 C6.897,4 6,3.103 6,2 C6,0.897 6.897,0 8,0 Z M2,0 C3.103,0 4,0.897 4,2 C4,3.103 3.103,4 2,4 C0.897,4 0,3.103 0,2 C0,0.897 0.897,0 2,0 Z"/></defs><g fill="none" fillRule="evenodd" transform="translate(2.000000, 8.000000)"><mask id="b" fill="#fff"><use xlinkHref="#a"/></mask><use fill="#A9AFC1" xlinkHref="#a"/><g fill="#A7B1D1" mask="url(#b)"><path d="M0 0H21V21H0z" transform="translate(-2.000000, -8.000000)"/></g></g></svg>
                  </div>
                  <div>
                    <svg width="72" height="30" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero" fill="none"><circle fill="#FFF" cx="62" cy="10" r="10"/><circle fill="#EA7980" cx="62" cy="10" r="4"/><circle fill="#FFF" cx="10" cy="10" r="10"/><circle fill="#EA7980" cx="10" cy="10" r="4"/><path d="M31 13h10" stroke="#F28684" strokeWidth="2" strokeLinecap="round"/><path d="M26 26c2.963-2 6.296-3 10-3 3.704 0 7.037 1 10 3" stroke="#E0676E" strokeWidth="2" strokeLinecap="round"/></g></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
