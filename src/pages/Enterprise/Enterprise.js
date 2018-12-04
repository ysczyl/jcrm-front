import React, { Component } from 'react';
import { Form, Icon, Input, Button, Select } from 'antd';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi/locale';
const FormItem = Form.Item;
const InputGroup = Input.Group;
const { Option } = Select;
const nullSlectItem = {
  label: '',
  key: '',
};
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 7 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
    md: { span: 10 },
  },
};
const submitFormLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 10, offset: 7 },
  },
};
const { TextArea } = Input;
@connect(({ enterprise, geographic, loading }) => {
  console.log(geographic);
  const { province, isLoading, city } = geographic;
  return {
    enterprise,
    province,
    isLoading,
    city,
    submitting: loading.effects['enterprise/submit'],
  };
})
@Form.create()
class Enterprise extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'geographic/fetchProvince',
    });
  };
  componentDidUpdate(props) {
    const { dispatch, value } = this.props;
    if (!props.value && !!value && !!value.province) {
      dispatch({
        type: 'geographic/fetchCity',
        payload: value.province.key,
      });
    }
  }
  getProvinceOption() {
    const { province } = this.props;
    return this.getOption(province);
  }

  getCityOption = () => {
    const { city } = this.props;
    return this.getOption(city);
  };

  getOption = list => {
    if (!list || list.length < 1) {
      return (
        <Option key={0} value={0}>
          没有找到选项
        </Option>
      );
    }
    return list.map(item => (
      <Option key={item.id} value={item.id}>
        {item.name}
      </Option>
    ));
  };

  selectProvinceItem = item => {
    const { dispatch, onChange } = this.props;
    console.log(onChange);
    dispatch({
      type: 'geographic/fetchCity',
      payload: item.key,
    });
    onChange({
      province: item,
      city: nullSlectItem,
    });
  };

  selectCityItem = item => {
    const { value, onChange } = this.props;
    onChange({
      province: value.province,
      city: item,
    });
  };

  conversionObject() {
    const { value } = this.props;
    if (!value) {
      return {
        province: nullSlectItem,
        city: nullSlectItem,
      };
    }
    const { province, city } = value;
    return {
      province: province || nullSlectItem,
      city: city || nullSlectItem,
    };
  }
  changeProvince = value => {
    this.setState({
      province: value,
    });
  };
  changeCity = value => {
    this.setState({
      city: value,
    });
  };
  handleSubmit = e => {
    e.precentDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  render() {
    const { form, submitting, isLoading } = this.props;
    const { getFieldDecorator } = form;
    const { province, city } = this.conversionObject();
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label="Enterprise">
          {getFieldDecorator('enterpriseName', {
            rules: [
              {
                required: true,
                message: formatMessage({ id: 'validation.email.required' }),
              },
            ],
          })(<Input size="large" placeholder={formatMessage({ id: 'form.email.placeholder' })} />)}
        </FormItem>
        <FormItem {...formItemLayout} label="phone">
          {getFieldDecorator('phone', {
            rules: [
              {
                required: true,
                message: formatMessage({ id: 'validation.email.required' }),
              },
            ],
          })(<Input size="large" placeholder={formatMessage({ id: 'form.email.placeholder' })} />)}
        </FormItem>
        <FormItem {...formItemLayout} label="descrption">
          {getFieldDecorator('description', {
            rules: [
              {
                required: true,
                message: formatMessage({ id: 'validation.email.required' }),
              },
            ],
          })(
            <TextArea
              style={{ minHeight: 32 }}
              placeholder={formatMessage({ id: 'form.standard.placeholder' })}
              rows={4}
            />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="address">
          <InputGroup compact>
            <Select
              size="large"
              value={province}
              placeholder="province"
              showSearch
              labelInValue
              onSelect={this.selectProvinceItem}
              style={{ width: '100px' }}
            >
              {this.getProvinceOption()}
            </Select>
            <Select
              size="large"
              value={city}
              placeholder="city"
              showSearch
              labelInValue
              onSelect={this.selectCityItem}
              style={{ width: '100px' }}
            >
              {this.getCityOption()}
            </Select>
            {getFieldDecorator('street', {
              rules: [
                {
                  required: true,
                  message: formatMessage({ id: 'validation.phone-number.required' }),
                },
              ],
            })(
              <Input
                size="large"
                style={{ width: '54%' }}
                placeholder={formatMessage({ id: 'form.phone-number.placeholder' })}
              />
            )}
          </InputGroup>
        </FormItem>
        <FormItem {...formItemLayout} label="zip code">
          {getFieldDecorator('zipCode', {
            rules: [
              {
                required: true,
                message: formatMessage({ id: 'validation.email.required' }),
              },
            ],
          })(<Input size="large" placeholder={formatMessage({ id: 'form.email.placeholder' })} />)}
        </FormItem>
        <FormItem {...submitFormLayout}>
          <Button loading={submitting} type="primary" htmlType="submit">
            <FormattedMessage id="app.register.register" />
          </Button>
        </FormItem>
      </Form>
    );
  }
}
export default Enterprise;
