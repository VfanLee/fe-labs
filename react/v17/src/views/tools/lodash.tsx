import _ from 'lodash';
import { useEffect } from 'react';

function View() {
  useEffect(() => {
    test();
  }, []);

  const test = () => {
    console.log(_.isNull(null));

    console.log(_.isEmpty({}));
    console.log(_.isEmpty([]));
  };

  return <div></div>;
}

export default View;
