import SearchTags from '@/components/common/SearchTags';
import { useState } from 'react';

const View = () => {
  const [value, setValue] = useState('');

  return (
    <>
      <SearchTags
        tagKey={value}
        placeholder={`请选择`}
        handleChange={(values, execQuery) => {
          console.log(values, execQuery);
        }}
      />
    </>
  );
};

export default View;
