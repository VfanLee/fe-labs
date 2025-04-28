import React, { useEffect } from 'react';
import { Row, Col, Button, Checkbox, Form, Input, Radio, Select, DatePicker, InputNumber, TreeSelect } from 'antd';
import moment from 'moment';
import type { Moment } from 'moment';

interface IDemoForm {
  inputValue: string;
  textareaValue: string;
  radioValue: number;
  checkboxValue: number[];
  selectValue: number;
  dateValue: Moment;
  numberValue: number;
  treeSelectValue: string;
}

const View: React.FC = () => {
  const renderForm = () => {
    const [demoForm] = Form.useForm<IDemoForm>();
    const [formValues, setFormValues] = React.useState<Partial<IDemoForm>>({});

    const onLog = () => {
      console.log('打印');
      console.log(demoForm.getFieldsValue());
    };

    const onFinish = (values: any) => {
      console.log('提交成功：', values);
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log('提交失败：', errorInfo);
    };

    const onReset = () => {
      console.log('重置');
      demoForm.resetFields();
      setFormValues(demoForm.getFieldsValue());
    };

    const onFill = () => {
      console.log('填充');
      const fillValues: IDemoForm = {
        inputValue: '222',
        textareaValue: '222',
        radioValue: 2,
        checkboxValue: [2, 4],
        selectValue: 2,
        dateValue: moment(),
        numberValue: 22,
        treeSelectValue: '1-1-2',
      };
      demoForm.setFieldsValue(fillValues);
      setFormValues(demoForm.getFieldsValue());
    };

    useEffect(() => {
      const initialValues = {
        inputValue: '111',
        textareaValue: '111',
      };
      demoForm.setFieldsValue(initialValues);
      setFormValues(initialValues);
    }, []);

    return (
      <Row gutter={16}>
        <Col span={12}>
          <Form
            form={demoForm}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            onValuesChange={(_, allValues) => setFormValues(allValues)}
            autoComplete="off"
          >
            <Form.Item label="文本框" name="inputValue" rules={[{ required: true, message: '请输入内容' }]}>
              <Input placeholder="请输入内容" allowClear />
            </Form.Item>

            <Form.Item label="文本域" name="textareaValue" rules={[{ required: true, message: '请输入内容' }]}>
              <Input.TextArea placeholder="请输入内容" allowClear />
            </Form.Item>

            <Form.Item label="单选框" name="radioValue" rules={[{ required: true, message: '请勾选单选框' }]}>
              <Radio.Group
                options={[
                  { label: 'A', value: 1 },
                  { label: 'B', value: 2 },
                  { label: 'C', value: 3 },
                  { label: 'D', value: 4 },
                ]}
              />
            </Form.Item>

            <Form.Item label="多选框" name="checkboxValue" rules={[{ required: true, message: '请勾选多选框' }]}>
              <Checkbox.Group
                options={[
                  { label: 'A', value: 1 },
                  { label: 'B', value: 2 },
                  { label: 'C', value: 3 },
                  { label: 'D', value: 4 },
                ]}
              />
            </Form.Item>

            <Form.Item label="选择器" name="selectValue" rules={[{ required: true, message: '请选择选择器' }]}>
              <Select
                options={[
                  { label: 'A', value: 1 },
                  { label: 'B', value: 2 },
                  { label: 'C', value: 3 },
                  { label: 'D', value: 4 },
                ]}
                placeholder="请选择选择器"
                allowClear
              />
            </Form.Item>

            <Form.Item label="日期选择框" name="dateValue" rules={[{ required: true, message: '请选择日期选择框' }]}>
              <DatePicker style={{ width: '100%' }} placeholder="请选择日期选择框" allowClear />
            </Form.Item>

            <Form.Item label="数字输入框" name="numberValue" rules={[{ required: true, message: '请输入数字选择框' }]}>
              <InputNumber style={{ width: '100%' }} placeholder="请输入数字选择框" />
            </Form.Item>

            <Form.Item label="树选择" name="treeSelectValue" rules={[{ required: true, message: '请选择树选择' }]}>
              <TreeSelect
                style={{ width: '100%' }}
                treeData={[
                  {
                    title: 'parent 1',
                    value: '1',
                    children: [
                      {
                        title: 'parent 1-1',
                        value: '1-1',
                        children: [
                          {
                            title: 'leaf1',
                            value: '1-1-1',
                          },
                          {
                            title: 'leaf2',
                            value: '1-1-2',
                          },
                        ],
                      },
                      {
                        title: 'parent 1-2',
                        value: '1-2',
                        children: [
                          {
                            title: <b style={{ color: 'red' }}>leaf3</b>,
                            value: '1-2-1',
                          },
                        ],
                      },
                    ],
                  },
                ]}
                placeholder="请选择树选择"
                allowClear
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                treeDefaultExpandAll
              />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" onClick={onLog}>
                打印
              </Button>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
              <Button type="default" onClick={onReset}>
                重置
              </Button>
              <Button type="default" onClick={onFill}>
                填充
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={12}>
          <pre>{JSON.stringify(formValues, null, 2)}</pre>
        </Col>
      </Row>
    );
  };

  return <>{renderForm()}</>;
};

export default View;
