import styles from './index.module.less'

window.g_ctx = {
  getUserInfo() {
    return { id: 10000, trueName: '管理员' }
  },
}

import { Card, Button, Form, Input, Select, DatePicker } from 'antd'
import { useEffect, useState } from 'react'
// import {} from '../service';
import { cloneDeep } from 'lodash'
import moment from 'moment'

const DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss'

const View = (props) => {
  const [approveForm] = Form.useForm()
  const [userInfo, setUserInfo] = useState({})

  const onFinish = (values) => {
    approveForm.validateFields().then((values) => {
      const data = {
        task_id: undefined,
        create_time: moment(Date.now()).format(DATE_FORMAT),
        create_user_id: userInfo.id,
        create_user_name: userInfo.name,
        ...cloneDeep(values),
      }
      console.log('data: ', data)
    })
  }

  const onReset = () => {
    approveForm.resetFields()
  }

  useEffect(() => {
    const userInfo = window.g_ctx.getUserInfo()
    setUserInfo({ id: userInfo.id, name: userInfo.trueName })
  }, [])

  return (
    <div className={styles.container}>
      <Card>
        <Form
          form={approveForm}
          className={styles.approveForm}
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 18,
          }}
          initialValues={{
            is_pass: 1,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item label="审核人">
            <Input value={userInfo.name} disabled placeholder="" />
          </Form.Item>

          <Form.Item label="审核时间">
            <DatePicker
              value={moment(Date.now())}
              style={{ width: '100%' }}
              allowClear={false}
              disabled
              placeholder=""
              format={DATE_FORMAT}
            />
          </Form.Item>

          <Form.Item label="审核内容" name="is_pass">
            <Select
              options={[
                {
                  value: 1,
                  label: '同意',
                },
                {
                  value: 0,
                  label: '不同意',
                },
              ]}
            />
          </Form.Item>

          <Form.Item
            label="审核意见"
            name="remark"
            dependencies={['is_pass']}
            rules={[
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (getFieldValue('is_pass') === 0 && !value) {
                    return Promise.reject(new Error('请输入审核意见'))
                  }
                  return Promise.resolve()
                },
              }),
            ]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
            <Button className={styles.formButton} type="primary" htmlType="submit">
              提交
            </Button>
            <Button className={styles.formButton} type="default" onClick={onReset}>
              重置
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default View
