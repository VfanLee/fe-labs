import type { TableProps } from 'antd'
import { Table } from 'antd'
import { CaretDownOutlined, CaretRightOutlined } from '@ant-design/icons'

interface MyRecordType {
  id: number
  parentId: number
  name: string
}

const tableProps: TableProps<MyRecordType> = {
  columns: [
    {
      title: 'Name',
      dataIndex: 'name',
      id: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      id: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      id: 'address',
    },
    {
      title: 'Action',
      id: 'action',
      render: (_, record) => (
        <>
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </>
      ),
    },
  ],
  dataSource: [
    {
      id: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      id: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      id: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ],
  rowKey: 'id',
  expandable: {
    defaultExpandAllRows: true,
    expandIcon: ({ expanded, onExpand, record }) => {
      if (record.parentId === -1) {
        return expanded ? (
          <CaretDownOutlined style={{ marginRight: '6px' }} onClick={(e) => onExpand(record, e)} />
        ) : (
          <CaretRightOutlined style={{ marginRight: '6px' }} onClick={(e) => onExpand(record, e)} />
        )
      }
      return null
    },
  },
}

const EditExpandTable = () => {
  return <Table {...tableProps}></Table>
}

export default EditExpandTable
