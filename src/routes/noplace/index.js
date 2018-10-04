import BackCar from '../../components/Svg/BackCar';
import GrayCar from '../../components/Svg/GrayCar';
import Heading from '../../components/Heading';
import Hint from '../../components/Hint';

import style from './style.scss';

const NoPlaceLeft = () => (
  <div className={style.contentWrapper}>
    <div className={style.splashScreen}>
      <BackCar className={style.backCar} />
      <GrayCar className={style.grayCar} />
    </div>
    <div>
      <Heading color='Blue'>
        Dziś nie ma wolnych miejsc
      </Heading>
      <Hint
        text={['Poinformujemy Cię jeśli zwolni się którekolwiek miejsce parkingowe.']}
        color='gray'
      />
    </div>
  </div>
);

export default NoPlaceLeft;
