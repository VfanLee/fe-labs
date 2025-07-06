import styles from './index.module.less';
import { Col, Pagination, Row, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react';

interface IData {
  key: React.Key;
  name: string;
  age: number;
  street: string;
  building: string;
  number: number;
  companyAddress: string;
  companyName: string;
  gender: string;
}

const View: React.FC = () => {
  const [searchParams, setSearchParams] = useState<Record<string, any>>({
    pageNum: 1,
    pageSize: 10,
  });
  const [dataSource, setDataSource] = useState<IData[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const initialValues: IData[] = [];
    for (let i = 0; i < 10; i++) {
      initialValues.push({
        key: i,
        name: 'John Brown',
        age: i + 1,
        street: 'Lake Park',
        building: 'C',
        number: 2035,
        companyAddress: 'Lake Street 42',
        companyName: 'SoftLake Co',
        gender: 'M',
      });
    }
    setDataSource(initialValues);
    setTotal(100);
  }, []);

  const renderTable = () => {
    // https://4x.ant.design/components/table-cn/#Column
    const columns: ColumnsType<IData> = [
      {
        title: () => (
          <svg width="100%" height="100%" viewBox="0 0 200 240" preserveAspectRatio="none">
            <line x1="0" y1="0" x2="200" y2="240" stroke="#f0f0f0" strokeWidth="1" />
            <text x="130" y="62" fontSize="14" fill="rgba(0, 0, 0, 0.85)">
              成绩
            </text>
            <text x="56" y="120" fontSize="14" fill="rgba(0, 0, 0, 0.85)">
              名称
            </text>
          </svg>
        ),
        dataIndex: 'key',
        key: 'key',
        width: 200,
        className: '',
        onHeaderCell: column => ({
          className: '',
          style: {
            padding: 0,
            width: 200,
            minWidth: 200,
            maxWidth: 200,
            height: 240,
          },
        }),
        // onCell: (record, rowIndex) => ({
        //   style: {
        //     height: 100,
        //     minHeight: 100,
        //     maxHeight: 100,
        //   },
        // }),
      },
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        width: 100,
      },
      {
        title: '其他',
        children: [
          {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
            width: 150,
          },
          {
            title: '地址',
            children: [
              {
                title: '街道',
                dataIndex: 'street',
                key: 'street',
                width: 150,
              },
              {
                title: '详细地址',
                children: [
                  {
                    title: '建筑',
                    dataIndex: 'building',
                    key: 'building',
                    width: 100,
                  },
                  {
                    title: '门号',
                    dataIndex: 'number',
                    key: 'number',
                    width: 100,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: '公司',
        children: [
          {
            title: '公司地址',
            dataIndex: 'companyAddress',
            key: 'companyAddress',
            width: 100,
          },
          {
            title: '公司名称',
            dataIndex: 'companyName',
            key: 'companyName',
            width: 100,
          },
        ],
      },
      {
        title: '性别',
        dataIndex: 'gender',
        key: 'gender',
        width: 80,
        fixed: 'right',
      },
    ];

    return (
      <>
        <Table className={styles.demoTable} columns={columns} dataSource={dataSource} size="middle" bordered pagination={false} />
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
          <pre style={{ height: '36vh', overflow: 'auto' }}>{JSON.stringify(dataSource, null, 2)}</pre>
        </Col>
      </Row>
    </>
  );
};

export default View;
