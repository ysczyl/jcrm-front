import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Select,
  Icon,
  Button,
  Dropdown,
  Menu,
  InputNumber,
  DatePicker,
  Modal,
  message,
  Badge,
  Divider,
  Steps,
  Radio,
} from 'antd';
import StandardTable from '@/components/StandardTable';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import styles from './ConsumerList.less';

const FormItem = Form.Item;
const { Step } = Steps;
const { TextArea } = Input;
const { Option } = Select;
const RadioGroup = Radio.Group;
const getValue = obj =>
  Object.keys(obj)
    .map(key => obj[key])
    .join(',');
const statusMap = ['default', 'processing', 'success', 'error'];
const status = ['关闭', '运行中', '已上线', '异常'];

const CreateForm = Form.create()(props => {
  const { modalVisible, form, handleAdd, handleModalVisible } = props;
  const okHandle = () => {
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      form.resetFields();
      const values = {
        "address": {
          "city": fieldsValue.city,
          "country": fieldsValue.country,
          "province": fieldsValue.province,
          "street": fieldsValue.street,
        },
        "consumerName": fieldsValue.consumerName,
        "contact": {
          "contactName": fieldsValue.contactName,
          "department": fieldsValue.department,
          "phone": fieldsValue.phone,
        },
        "description":fieldsValue.description,
        "isOfficial": 1,
        "state": 1,
        "website": fieldsValue.website
      }
      fieldsValue = values;
      // console.log(fieldsValue);
      handleAdd(fieldsValue);
    });
  };
  return (
    <Modal
      destroyOnClose
      title="新建客户"
      visible={modalVisible}
      onOk={okHandle}
      onCancel={() => handleModalVisible()}
    >
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="名称">
        {form.getFieldDecorator('consumerName', {
          rules: [{ required: true, message: '请输入', min: 2 }],
        })(<Input placeholder="请输入" />)}
      </FormItem>
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="类型">
        {form.getFieldDecorator('desc', {
          rules: [{ required: true, message: '请输入', min: 1 }],
        })(<Input placeholder="请输入" />)}
      </FormItem>
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="网址">
        {form.getFieldDecorator('website', {
          rules: [{ required: true, message: '请输入', min: 5 }],
        })(<Input placeholder="请输入" />)}
      </FormItem>
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="描述">
        {form.getFieldDecorator('description', {
          rules: [{ required: true, message: '请输入', min: 5 }],
        })(<Input placeholder="请输入" />)}
      </FormItem>
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="客户国家/地区">
        {form.getFieldDecorator('country', {
        })(<Input placeholder="请输入" />)}
      </FormItem>
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="客户州/省">
        {form.getFieldDecorator('province', {
        })(<Input placeholder="请输入" />)}
      </FormItem>
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="客户城市">
        {form.getFieldDecorator('city', {
        })(<Input placeholder="请输入" />)}
      </FormItem>
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="客户街道">
        {form.getFieldDecorator('street', {
        })(<Input placeholder="请输入" />)}
      </FormItem>
    </Modal>
  );
});

const UpdateForm = Form.create()(props => {
  const { updateModalVisible, form,values, handleUpdate, handleUpdateModalVisible } = props;
  const okHandle = () => {
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      form.resetFields();
      const values = {
        "address": {
          "city": fieldsValue.city,
          "country": fieldsValue.country,
          "province": fieldsValue.province,
          "street": fieldsValue.street,
        },
        "cid":fieldsValue.cid,
        "consumerName": fieldsValue.consumerName,
        "contact": {
          "address": {
            "city": fieldsValue.city,
            "country": fieldsValue.country,
            "province": fieldsValue.province,
            "street": fieldsValue.street,
          },
          "contactName": fieldsValue.contactName,
          "department": fieldsValue.department,
          "phone": fieldsValue.phone,
        },
        "description":fieldsValue.description,
        "isOfficial": 1,
        "state": 1,
        "website": fieldsValue.website
      }
      fieldsValue = values;
      // console.log(fieldsValue);
      handleUpdate(fieldsValue);
    });
  };
  return (
    <Modal
      destroyOnClose
      title="编辑客户"
      visible={updateModalVisible}
      onOk={okHandle}
      onCancel={() => handleUpdateModalVisible()}
    >
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="客户id">
      {/* style={{display:'none'}} */}
        {form.getFieldDecorator('cid', {
          initialValue:values.cid,
        })(<Input placeholder="请输入"/>)}
      </FormItem>
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="名称">
        {form.getFieldDecorator('consumerName', {
          initialValue:values.consumerName,
          rules: [{ required: true, message: '请输入', min: 2 }],
        })(<Input placeholder="请输入" />)}
      </FormItem>
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="类型">
        {form.getFieldDecorator('desc', {
          initialValue:values.type,
        })(<Input placeholder="请输入" />)}
      </FormItem>
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="网址">
        {form.getFieldDecorator('website', {
          initialValue:values.website,
        })(<Input placeholder="请输入" />)}
      </FormItem>
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="描述">
        {form.getFieldDecorator('description', {
          initialValue:values.description,
          rules: [{ required: true, message: '请输入', min: 5 }],
        })(<Input placeholder="请输入" />)}
      </FormItem>
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="客户国家/地区">
        {form.getFieldDecorator('country', {
          initialValue:values.country,
        })(<Input placeholder="请输入" />)}
      </FormItem>
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="客户州/省">
        {form.getFieldDecorator('province', {
          initialValue:values.province,
        })(<Input placeholder="请输入" />)}
      </FormItem>
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="客户城市">
        {form.getFieldDecorator('city', {
          initialValue:values.city,
        })(<Input placeholder="请输入" />)}
      </FormItem>
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="客户街道">
        {form.getFieldDecorator('street', {
          initialValue:values.street,
        })(<Input placeholder="请输入" />)}
      </FormItem>
    </Modal>
  );
});

/* eslint react/no-multi-comp:0 */
@connect(({ consumer, loading }) => ({
  consumer,
  projectLoading: loading.effects['consumer/customerList'],
}))
@Form.create()
class ConsumerList extends PureComponent {
  state = {
    modalVisible: false,
    updateModalVisible: false,
    expandForm: false,
    selectedRows: [],
    formValues: {},
    stepFormValues: {},
    list:[],
    flag:false,
  };

  columns = [
    {
      title: '关联码',
      dataIndex: 'cid',
    },
    {
      title: '客户名',
      dataIndex: 'consumerName',
    },
    {
      title: '客户关键词',
      dataIndex: 'description',
    },
    {
      title: '网址',
      dataIndex: 'website',
      sorter: true,
    },
    {
      title: '操作',
      render: (text, record) => (
        <Fragment>
          <a onClick={() => this.handleUpdateModalVisible(true, record)}>编辑</a>
          <Divider type="vertical" />
          <a href="javascript:;" >详情</a>
        </Fragment>
      ),
    },
  ];

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'consumer/customerList',
    });
  }

  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const { dispatch } = this.props;
    const { formValues } = this.state;

    const filters = Object.keys(filtersArg).reduce((obj, key) => {
      const newObj = { ...obj };
      newObj[key] = getValue(filtersArg[key]);
      return newObj;
    }, {});

    const params = {
      currentPage: pagination.current,
      pageSize: pagination.pageSize,
      ...formValues,
      ...filters,
    };
    if (sorter.field) {
      params.sorter = `${sorter.field}_${sorter.order}`;
    }

    dispatch({
      type: 'consumer/fetch',
      payload: params,
    });
  };

  handleFormReset = () => {
    const { form, dispatch } = this.props;
    form.resetFields();
    this.setState({
      formValues: {},
    });
    dispatch({
      type: 'consumer/customerList',
      payload: {},
    });
  };

  toggleForm = () => {
    const { expandForm } = this.state;
    this.setState({
      expandForm: !expandForm,
    });
  };

  handleMenuClick = e => {
    const { dispatch } = this.props;
    const { selectedRows } = this.state;

    if (!selectedRows) return;
    switch (e.key) {
      case 'remove':
        dispatch({
          type: 'consumer/customerDelete',
          payload: {
            cid: selectedRows[0].cid,
          },
          callback: () => {
            this.setState({
              selectedRows: [],
            });
          },
        });
        break;
      default:
        break;
    }
  };

  handleSelectRows = rows => {
    this.setState({
      selectedRows: rows,
    });
  };

  handleSearch = e => {
    e.preventDefault();

    const { dispatch, form } = this.props;

    form.validateFields((err, fieldsValue) => {
      if (err) return;

      const values = {
        ...fieldsValue,
        updatedAt: fieldsValue.updatedAt && fieldsValue.updatedAt.valueOf(),
      };

      // console.log(values.consumerName+"...00...")
      this.setState({
        formValues: values,
      });

      dispatch({
        type: 'consumer/customerList',
        payload: values.consumerName,
      });
    });
  };

  handleModalVisible = flag => {
    this.setState({
      modalVisible: !!flag,
    });
  };

  handleUpdateModalVisible = (flag, record) => {
    // console.log(record);
    this.setState({
      updateModalVisible: !!flag,
      stepFormValues: record || {},
    });
  };

  handleAdd = fields => {
    const { dispatch } = this.props;
    dispatch({
      type: 'consumer/submit',
      payload: {
        ...fields,
      },
    });

    message.success('添加成功');
    this.handleModalVisible();
  };

  handleUpdate = fields => {
    const { dispatch } = this.props;
    dispatch({
      type: 'consumer/update',
      payload: {
        ...fields,
      },
    });

    message.success('配置成功');
    this.handleUpdateModalVisible();
  };

  renderSimpleForm() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label="客户名称">
              {getFieldDecorator('consumerName')(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="客户状态">
              {getFieldDecorator('isOfficial')(
                <Select placeholder="请选择" style={{ width: '100%' }}>
                  <Option value="0">潜在</Option>
                  <Option value="1">正式</Option>
                </Select>
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <span className={styles.submitButtons}>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
                重置
              </Button>
              {/* <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
                展开 <Icon type="down" />
              </a> */}
            </span>
          </Col>
        </Row>
      </Form>
    );
  }

  renderForm() {
    const { expandForm } = this.state;
    return expandForm ? this.renderAdvancedForm() : this.renderSimpleForm();
  }

  render() {
    const {
      consumer: {data},
      loading,
    } = this.props;
    const { selectedRows, modalVisible, updateModalVisible, stepFormValues } = this.state;
    const menu = (
      <Menu onClick={this.handleMenuClick} selectedKeys={[]}>
        <Menu.Item key="remove">删除</Menu.Item>
        <Menu.Item key="approval">批量审批</Menu.Item>
      </Menu>
    );

    const parentMethods = {
      handleAdd: this.handleAdd,
      handleModalVisible: this.handleModalVisible,
    };
    const updateMethods = {
      handleUpdateModalVisible: this.handleUpdateModalVisible,
      handleUpdate: this.handleUpdate,
    };
    return (
      <PageHeaderWrapper title="查询表格">
        <Card bordered={false}>
          <div className={styles.tableList}>
            <div className={styles.tableListForm}>{this.renderForm()}</div>
            <div className={styles.tableListOperator}>
              <Button icon="plus" type="primary" onClick={() => this.handleModalVisible(true)}>
                新建
              </Button>
              {selectedRows.length > 0 && (
                <span>
                  <Button>批量操作</Button>
                  <Dropdown overlay={menu}>
                    <Button>
                      更多操作 <Icon type="down" />
                    </Button>
                  </Dropdown>
                </span>
              )}
            </div>
            <StandardTable
              selectedRows={selectedRows}
              loading={loading}
              data={data}
              columns={this.columns}
              onSelectRow={this.handleSelectRows}
              onChange={this.handleStandardTableChange}
            />
          </div>
        </Card>
        <CreateForm {...parentMethods} modalVisible={modalVisible} />
        {stepFormValues && Object.keys(stepFormValues).length ? (
          <UpdateForm
            {...parentMethods}
            handleUpdateModalVisible={this.handleUpdateModalVisible}
            updateModalVisible={updateModalVisible}
            values={stepFormValues}
            handleUpdate={this.handleUpdate}
          />
        ) : null}
      </PageHeaderWrapper>
    );
  }
}

export default ConsumerList;
