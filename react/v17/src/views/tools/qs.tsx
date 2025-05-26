import qs from 'qs';
import { useEffect } from 'react';

function View() {
  useEffect(() => {
    test();
  }, []);

  const test = () => {
    // const str = 'name=John&age=30&skills[]=js&skills[]=node';
    // console.log(qs.parse(str));

    const obj = { name: 'John', age: 30, skills: ['js', 'node'] };
    const str = qs.stringify(obj);
    console.log(str);
    console.log(decodeURIComponent(str));
  };

  return <div></div>;
}

export default View;
