import styles from './index.module.less';
import { Button, Col, DatePicker, Input, Row, Select, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import moment, { Moment } from 'moment';
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

const View: React.FC = () => {
  const [searchParams, setSearchParams] = useState<IDataParams>(defaultParams);
  const [dataSource, setDataSource] = useState<IData[]>([]);
  const [total, setTotal] = useState(0);

  const searchData = (params?: IDataParams) => {
    const p = params ? params : searchParams;
    console.log('检索：', p);

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
    setTotal(initialValues.length * 100);
  };

  const renderSearch = () => {
    return (
      <>
        <div className={styles.filterContainer}>
          <div className={styles.filterItem}>
            <div>关键词：</div>
            <Input
              style={{ width: '120px' }}
              value={searchParams.keyword}
              placeholder="请输入关键字"
              onChange={e => {
                console.log(e);
                setSearchParams({ ...searchParams, keyword: e.target.value });
              }}
            />
          </div>
          <div className={styles.filterItem}>
            <div>类型：</div>
            <Select
              style={{ width: '120px' }}
              options={[
                { label: 'A', value: 1 },
                { label: 'B', value: 2 },
                { label: 'C', value: 3 },
              ]}
              value={searchParams.type}
              placeholder="请选择类型"
              onChange={(value, option) => {
                console.log(value, option);
                setSearchParams({ ...searchParams, type: value });
              }}
            />
          </div>
          <div className={styles.filterItem}>
            <div>时间：</div>
            <DatePicker
              value={searchParams.date ? moment(searchParams.date) : undefined}
              placeholder="请选择时间"
              format="YYYY-MM-DD"
              onChange={(dates, dateStrings) => {
                console.log(dates, dateStrings);
                setSearchParams({ ...searchParams, date: dateStrings });
              }}
            />
          </div>
        </div>
        <div style={{ marginTop: '16px' }}>
          <Button
            type="primary"
            onClick={() => {
              searchData();
            }}
          >
            搜索
          </Button>
          <Button
            onClick={() => {
              setSearchParams(defaultParams);
              searchData(defaultParams);
            }}
          >
            重置
          </Button>
        </div>
      </>
    );
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
        pagination={{
          current: searchParams.pn,
          pageSize: searchParams.ps,
          total,
          showTotal: (total, range) => {
            // console.log(total, range);
            return `共 ${total} 条数据`;
          },
          onChange: (page, pageSize) => {
            const p = { ...searchParams, pn: page, ps: pageSize };
            setSearchParams(p);
            searchData(p);
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
        <Col span={12}>
          {renderSearch()}
          {renderTable()}
        </Col>
        <Col span={12}>
          <pre style={{ height: '36vh', overflow: 'auto' }}>{JSON.stringify(searchParams, null, 2)}</pre>
          <hr />
          <pre style={{ height: '36vh', overflow: 'auto' }}>{JSON.stringify(dataSource, null, 2)}</pre>
        </Col>
      </Row>
    </>
  );
};

export default View;
