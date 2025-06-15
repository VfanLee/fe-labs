import { Select } from 'antd';
import { useEffect, useState } from 'react';

const options = [
  { id: 1, name: 'aaa', ext: 'aaa' },
  { id: 2, name: 'bbb', ext: 'bbb' },
  { id: 3, name: 'ccc', ext: 'ccc' },
];

function View() {
  const [value, setValue] = useState<number>();

  useEffect(() => {
    setValue(2);
  }, []);

  return (
    <div>
      <Select
        style={{ width: 200 }}
        value={value}
        options={options}
        fieldNames={{ label: 'name', value: 'id' }}
        onChange={(value, option) => {
          console.log(value, option);
          setValue(value);
        }}
      />
      <div>
        <pre>{JSON.stringify(value, null, 2)}</pre>
      </div>
    </div>
  );
}

export default View;
