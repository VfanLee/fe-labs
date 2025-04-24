import React, { useState } from 'react'
import { Table, Input, InputNumber, Popconfirm, Form, Button, message } from 'antd'

const EditableContext = React.createContext(null)

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm()
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  )
}

const EditableCell = ({ title, editable, children, dataIndex, record, inputType, editing, ...restProps }) => {
  const form = React.useContext(EditableContext)

  React.useEffect(() => {
    if (editing) {
      form.setFieldsValue({ [dataIndex]: record[dataIndex] })
    }
  }, [editing, dataIndex, form, record])

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item name={dataIndex} style={{ margin: 0 }} rules={[{ required: true, message: `请输入 ${title}` }]}>
          {inputType === 'number' ? <InputNumber /> : <Input />}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  )
}

const EditableTable = () => {
  const [data, setData] = useState([
    { key: '1', name: 'John', age: 32 },
    { key: '2', name: 'Jane', age: 28 },
  ])
  const [editingKeys, setEditingKeys] = useState([])
  const [count, setCount] = useState(3)

  const isEditing = (record) => editingKeys.includes(record.key)

  const edit = (record) => {
    setEditingKeys([...editingKeys, record.key])
  }

  const cancel = (key) => {
    if (key.startsWith('new-')) {
      setData(data.filter((k) => k.key !== key))
    }
    setEditingKeys(editingKeys.filter((k) => k !== key))
  }

  const save = async (form, key) => {
    try {
      const row = await form.validateFields()
      const newData = [...data]
      const index = newData.findIndex((item) => key === item.key)
      if (index > -1) {
        newData[index] = { ...newData[index], ...row }
        setData(newData)
        setEditingKeys(editingKeys.filter((k) => k !== key))
      }
    } catch (err) {
      console.log('保存失败:', err)
    }
  }

  const handleAdd = () => {
    const newKey = 'new-' + count.toString()
    const newRow = { key: newKey, name: '', age: null }

    setData([...data, newRow])
    setEditingKeys([...editingKeys, newKey])
    setCount(count + 1)
  }

  const handleSaveAll = async () => {
    let updated = [...data]

    for (const key of editingKeys) {
      const rowForm = document.querySelector(`[data-row-key="${key}"]`)
      const form = rowForm?.__form__
      if (form) {
        try {
          const values = await form.validateFields()
          const index = updated.findIndex((item) => item.key === key)
          if (index !== -1) {
            updated[index] = { ...updated[index], ...values }
          }
        } catch (err) {
          message.error('表单校验失败')
          return
        }
      }
    }

    const hasEmpty = updated.some((item) => !item.name || item.age == null)
    if (hasEmpty) {
      message.error('请填写完整所有数据')
      return
    }

    setData(updated)
    setEditingKeys([])
    message.success('保存成功')
    console.log('保存全部:', updated)
  }

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      editable: true,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      editable: true,
    },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record)
        return editable ? (
          <EditableContext.Consumer>
            {(form) => {
              // 把 form 存入 DOM 元素，供保存全部时查找
              setTimeout(() => {
                const rowDom = document.querySelector(`[data-row-key="${record.key}"]`)
                if (rowDom) rowDom.__form__ = form
              }, 0)

              return (
                <span>
                  <a onClick={() => save(form, record.key)} style={{ marginRight: 8 }}>
                    保存
                  </a>
                  <a onClick={() => cancel(record.key)}>取消</a>
                </span>
              )
            }}
          </EditableContext.Consumer>
        ) : (
          <a onClick={() => edit(record)}>编辑</a>
        )
      },
    },
  ]

  const mergedColumns = columns.map((col) => {
    if (!col.editable) return col

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
        editable: col.editable,
      }),
    }
  })

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={handleAdd} style={{ marginRight: 8 }}>
          新增
        </Button>
        <Button onClick={handleSaveAll}>保存全部</Button>
      </div>
      <Table
        components={{
          body: {
            row: EditableRow,
            cell: EditableCell,
          },
        }}
        bordered
        size="small"
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        rowKey="key"
        pagination={false}
        onRow={(record) => ({
          onDoubleClick: () => edit(record),
        })}
      />
    </div>
  )
}

export default EditableTable
