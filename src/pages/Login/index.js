import React from 'react';
import { Button, Form, Input, Select, Space, message } from 'antd';
import { useDispatch} from 'react-redux';
import { login } from '@/store/modules/uers';

import { useNavigate } from 'react-router-dom';
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const Login = () => {
  const [form] = Form.useForm();
  const onGenderChange = (value) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({
          username: 'Hi, man!',
        });
        break;
      case 'female':
        form.setFieldsValue({
          username: 'Hi, lady!',
        });
        break;
      case 'other':
        form.setFieldsValue({
          username: 'Hi there!',
        });
        break;
      default:
    }
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async(values) => {
    console.log(values);
    // 处理登录逻辑
    // 触发异步action
    await dispatch(login(values.username, values.password));
    // 登录成功后跳转到首页
    navigate("/")

    message.success('登录成功！');

  };
  const onReset = () => {
    form.resetFields();
  };
  const onFill = () => {
    form.setFieldsValue({
      username: 'Hello world!',
      password: 'male',
    });
  };
  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        name="username"
        label="Note"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Gender"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.password !== currentValues.password}
      >
        {({ getFieldValue }) =>
          getFieldValue('password') === 'other' ? (
            <Form.Item
              name="customizeGender"
              label="Customize Gender"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
          <Button type="link" htmlType="button" onClick={onFill}>
            Fill form
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
export default Login;