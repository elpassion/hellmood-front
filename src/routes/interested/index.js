import { Component } from 'preact';
import { inject, observer } from 'mobx-react';
import { route } from 'preact-router';
import Button from '../../components/Button/index';
import classNames from 'classnames';
import Heading from '../../components/Heading';
import Hint from '../../components/Hint';
import PlaceNumber from '../../components/PlaceNumber';
import api from '../../api';
import routeMap from '../../config/routeMap';

import style from './style.scss';

@inject('appStore')
@observer
export default class Interested extends Component {
  componentDidMount = () => {
    this.props.appStore.checkFreePlaces();
  }

  renderAvailablePlaceView = placeNumber => (
    <div className={style.content}>
      <Heading> Zwolniło się miejsce:</Heading>
      <PlaceNumber number={placeNumber} />
      <Button
        primary
        onClick={this.props.appStore.reservePlace}
      >
        Rezerwuj
      </Button>
      <Button
        secondary
        href='/'
      >
        Ignoruj
      </Button>
    </div>
  );

  renderPlaceRegistration = (placeNumber) => {
    const containerClasses = classNames(style.content, style.spaceBetween);

    return (
      <div className={containerClasses}>
        <div>
          <Heading>Zarezerwowano miejsce:</Heading>
          <PlaceNumber reserved number={placeNumber} />
        </div>
        <div>
          <Hint
            text={['Jednak nie przyjedziesz?', 'Daj skorzystać komuś innemu.']}
            color='blue'
          />
          <Button
            primary
            onClick={this.props.appStore.cancelReservation}
          >
            Zwolnij miejsce
          </Button>
        </div>
      </div>
    );
  };

  render () {
    const { authStore: { user }, appStore: { availableParkingPlace } } = this.props;
    if (user.borrowedParkingSpace) {
      return this.renderPlaceRegistration(user.borrowedParkingSpace);
    }
    if (availableParkingPlace) {
      return this.renderAvailablePlaceView(availableParkingPlace);
    }
  }
}
