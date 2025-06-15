import { TreeSelect } from 'antd';
import { useEffect, useState } from 'react';

const treeData = [
  {
    id: '1',
    name: 'parent 1',
    children: [
      {
        id: '1-0',
        name: 'parent 1-0',
        children: [
          {
            id: '1-0-1',
            name: 'leaf1',
          },
          {
            id: '1-0-2',
            name: 'leaf2',
          },
        ],
      },
      {
        id: '1-1',
        name: 'parent 1-1',
        children: [
          {
            id: 'leaf3',
            name: <b style={{ color: '#08c' }}>leaf3</b>,
          },
        ],
      },
    ],
  },
];

function View() {
  const [value, setValue] = useState<number>();

  useEffect(() => {
    setValue(2);
  }, []);

  return (
    <div>
      <TreeSelect
        style={{ width: 200 }}
        treeData={treeData}
        fieldNames={{ value: 'id', label: 'name' }}
        value={value}
        onChange={(value, label, extra) => {
          console.log(value, label, extra);
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
