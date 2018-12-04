import React, { PureComponent } from 'react';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

class TaskForm extends PureComponent {
  handleSubmit = e => {
    e.precentDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  render() {
    return <Form>xx</Form>;
  }
}
export default TaskForm;
