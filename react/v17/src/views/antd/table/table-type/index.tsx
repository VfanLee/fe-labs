import styles from './index.module.less';
import { Button, Col, DatePicker, Input, Row, Select, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react';

interface IDataParams {
  pn?: number;
  ps?: number;
  keyword?: string;
  type?: number;
  date?: string;
}

interface IData {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const defaultParams = {
  pn: 1,
  ps: 10,
};

const initialValues: IData[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const View: React.FC = () => {
  const [searchParams] = useState<IDataParams>(defaultParams);
  const [dataSource, setDataSource] = useState<IData[]>([]);

  const searchData = (params?: IDataParams) => {
    const p = params ? params : searchParams;
    console.log('检索：', p);
    setDataSource(initialValues);
  };

  const renderTable = () => {
    const columns: ColumnsType<IData> = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '标签',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, record, index) => {
          // console.log(_, record, index);
          const { tags } = record;
          return (
            <>
              {tags.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          );
        },
      },
      {
        title: '操作',
        key: 'action',
        render: () => (
          <Space size="middle">
            <a>删除</a>
          </Space>
        ),
      },
    ];

    return (
      <Table
        className={styles.demoTable}
        columns={columns}
        dataSource={dataSource}
        size="small"
        pagination={false}
        rowSelection={{
          type: 'checkbox',
          onChange: (selectedRowKeys, selectedRows, info) => {
            console.log(selectedRowKeys, selectedRows, info);
          },
        }}
      />
    );
  };

  useEffect(() => {
    searchData();
  }, []);

  return (
    <>
      <Row gutter={16}>
        <Col span={12}>{renderTable()}</Col>
        <Col span={12}>
          <pre style={{ height: '36vh', overflow: 'auto' }}>{JSON.stringify({}, null, 2)}</pre>
        </Col>
      </Row>
    </>
  );
};

export default View;
