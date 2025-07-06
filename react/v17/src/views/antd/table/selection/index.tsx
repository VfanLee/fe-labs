import styles from './index.module.less';
import { Col, Pagination, Row, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react';

interface IData {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const View: React.FC = () => {
  const [searchParams, setSearchParams] = useState<Record<string, any>>({
    pageNum: 1,
    pageSize: 10,
  });
  const [dataSource, setDataSource] = useState<IData[]>([]);
  const [total, setTotal] = useState(0);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>(['2']);
  const [selectedRows, setSelectedRows] = useState<IData[]>([]);

  useEffect(() => {
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
    setDataSource(initialValues);
    setTotal(100);
  }, []);

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
        render: (text, record, index) => {
          console.log(text, record, index);
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
      <>
        <Table
          className={styles.demoTable}
          columns={columns}
          dataSource={dataSource}
          size="small"
          pagination={false}
          // https://4x.ant.design/components/table-cn/#rowSelection
          rowSelection={{
            type: 'checkbox', // checkbox | radio
            onChange: (selectedRowKeys: React.Key[], selectedRows: IData[]) => {
              console.log(selectedRowKeys, selectedRows);
              setSelectedRowKeys(selectedRowKeys);
              setSelectedRows(selectedRows);
            },
          }}
        />
        <Pagination
          style={{ marginTop: 8, textAlign: 'right' }}
          size="small"
          current={searchParams.pageNum}
          pageSize={searchParams.pageSize}
          total={total}
          showTotal={(total, range) => {
            console.log(total, range);
            return `共 ${total} 条数据`;
          }}
          onChange={(pageNum, pageSize) => {
            const p = { ...searchParams, pageNum, pageSize };
            setSearchParams(p);
          }}
        />
      </>
    );
  };

  return (
    <>
      <Row gutter={16}>
        <Col span={12}>{renderTable()}</Col>
        <Col span={12}>
          <pre style={{ height: '32vh', overflow: 'auto' }}>{JSON.stringify(selectedRowKeys, null, 2)}</pre>
          <pre style={{ height: '32vh', overflow: 'auto' }}>{JSON.stringify(selectedRows, null, 2)}</pre>
        </Col>
      </Row>
    </>
  );
};

export default View;
