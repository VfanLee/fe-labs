import styles from './index.module.less';
import React, { useEffect, useState } from 'react';
import { Col, Pagination, Row, Space, Table, Tag } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { arrayMoveImmutable } from 'array-move';
import type { SortableContainerProps, SortEnd } from 'react-sortable-hoc';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';

interface IData {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const DragHandle = SortableHandle(() => <MenuOutlined style={{ cursor: 'grab', color: '#999' }} />);
const SortableItem = SortableElement((props: React.HTMLAttributes<HTMLTableRowElement>) => <tr {...props} />);
const SortableBody = SortableContainer((props: React.HTMLAttributes<HTMLTableSectionElement>) => <tbody {...props} />);

const View: React.FC = () => {
  const [searchParams, setSearchParams] = useState<Record<string, any>>({
    pageNum: 1,
    pageSize: 10,
  });
  const [dataSource, setDataSource] = useState<IData[]>([]);
  const [total, setTotal] = useState(0);

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

  const onSortEnd = ({ oldIndex, newIndex }: SortEnd) => {
    if (oldIndex !== newIndex) {
      const newData = arrayMoveImmutable(dataSource.slice(), oldIndex, newIndex).filter((el: IData) => !!el);
      console.log('Sorted items: ', newData);
      setDataSource(newData);
    }
  };

  const DraggableContainer = (props: SortableContainerProps) => (
    <SortableBody useDragHandle disableAutoscroll helperClass="row-dragging" onSortEnd={onSortEnd} {...props} />
  );

  const renderTable = () => {
    const columns: ColumnsType<IData> = [
      {
        title: '#',
        dataIndex: 'sort',
        width: 30,
        className: 'drag-visible',
        render: () => <DragHandle />,
      },
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

    const DraggableBodyRow: React.FC<any> = ({ className, style, ...restProps }) => {
      const index = dataSource.findIndex(x => x.key === restProps['data-row-key']);
      return <SortableItem index={index} {...restProps} />;
    };

    return (
      <>
        <Table
          columns={columns}
          dataSource={dataSource}
          size="small"
          pagination={false}
          components={{
            body: {
              wrapper: DraggableContainer,
              row: DraggableBodyRow,
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
          <pre style={{ height: '36vh', overflow: 'auto' }}>{JSON.stringify(dataSource, null, 2)}</pre>
        </Col>
      </Row>
    </>
  );
};

export default View;
