import moment from 'moment';
import { useEffect } from 'react';

function View() {
  useEffect(() => {
    test();
  }, []);

  const test = () => {
    console.log(moment().format('YYYY-MM-DD hh:mm:ss'));
    console.log(moment(new Date()).format('YYYY-MM-DD hh:mm:ss'));
    console.log(moment(Date.now()).format('YYYY-MM-DD hh:mm:ss'));

    console.log('---');
    console.log(moment().add(1, 'year').format('YYYY-MM-DD hh:mm:ss'));
    console.log(moment().add(1, 'month').format('YYYY-MM-DD hh:mm:ss'));
    console.log(moment().add(1, 'day').format('YYYY-MM-DD hh:mm:ss'));
    console.log(moment().add(1, 'hour').format('YYYY-MM-DD hh:mm:ss'));
    console.log(moment().add(1, 'minute').format('YYYY-MM-DD hh:mm:ss'));
    console.log(moment().add(1, 'second').format('YYYY-MM-DD hh:mm:ss'));

    console.log('---');
    console.log(moment('2020-02-02').isBefore('2020-02-02'));
    console.log(moment('2020-02-02').isSameOrBefore('2020-02-02'));
    console.log(moment('2020-02-02').isAfter('2020-02-02'));
    console.log(moment('2020-02-02').isSameOrAfter('2020-02-02'));
  };

  return <div></div>;
}

export default View;
