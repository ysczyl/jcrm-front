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
import Link from 'umi/link'
import styles from './Competitor.less';

const FormItem = Form.Item;
const { Step } = Steps;
const { TextArea } = Input;
const { Option } = Select;
const RadioGroup = Radio.Group;
const getValue = obj =>
  Object.keys(obj)
    .map(key => obj[key])
    .join(',');

const CreateForm = Form.create()(props => {
  const { modalVisible, form, handleAdd, handleModalVisible } = props;
  const okHandle = () => {
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      form.resetFields();
      handleAdd(fieldsValue);
    });
  };
  return (
    <Modal
      destroyOnClose
      title="新建竞争对手"
      visible={modalVisible}
      onOk={okHandle}
      onCancel={() => handleModalVisible()}
    >
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="对手名称">
        {form.getFieldDecorator('competitorName', {
          rules: [{ required: true, message: '请输入至少两个字符的名称内容！', min: 2 }],
        })(<Input placeholder="请输入" />)}
      </FormItem>
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="相关描述">
        {form.getFieldDecorator('description', {
          rules: [{ required: true, message: '请输入至少十个字符的相关描述！', min: 10 }],
        })(<Input placeholder="请输入" />)}
      </FormItem>
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="对手类型">
        {form.getFieldDecorator('types', {
          rules: [{ required: true, message: '请选择竞争对手类型！' }],
        })(
          <Select style={{ width: '100%'}}>
            <Option value="0">间接竞争对手</Option>
            <Option value="1">直接竞争对手</Option>
          </Select>
        )}
      </FormItem>
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="添加备注">
        {form.getFieldDecorator('ex1', {
          rules: [{ required: false, message: '备注可为空!' }],
        })(<Input placeholder="请输入" />)}
      </FormItem>
    </Modal>
  );
});

const UpdateForm = Form.create()(props => {
  const { values, modalVisible, form, handleUpdate, handleUpdateModalVisible } = props;
  console.log("修改ss",props);

  const okHandle = () => {
    form.validateFields((err, fieldsValue) => {
      if(fieldsValue.types === "直接竞争对手"){
        fieldsValue.types = 1;
      }else{
        fieldsValue.types = 0;
      }
      if (err) return;
      form.resetFields();
      handleUpdate(fieldsValue);
    });
  };

  return (
    <Modal
      destroyOnClose
      title="编辑竞争对手"
      visible={modalVisible}
      onOk={okHandle}
      onCancel={() => handleUpdateModalVisible()}
    >
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }}  style={{display:'none'}}>
        {form.getFieldDecorator('competitorId', {
          initialValue: values.competitorId,
        
        })(<Input />)}
      </FormItem>
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="对手名称">
        {form.getFieldDecorator('competitorName', {
          initialValue: values.competitorName,
          rules: [{ required: true, message: '请输入至少两个字符的名称内容！', min: 2 }],
        })(<Input placeholder="请输入" />)}
      </FormItem>
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="相关描述">
        {form.getFieldDecorator('description', {
          initialValue: values.description,
          rules: [{ required: true, message: '请输入至少十个字符的相关描述！', min: 10 }],
        })(<Input placeholder="请输入" />)}
      </FormItem>
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="对手类型">
        {form.getFieldDecorator('types', {
          initialValue: values.types?'直接竞争对手':'间接竞争对手',
          rules: [{ required: true, message: '请选择竞争对手类型！' }],
        })(
          <Select style={{ width: '100%'}} >
            <Option value="0">间接竞争对手</Option>
            <Option value="1">直接竞争对手</Option>
          </Select>
        )}
      </FormItem>
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="添加备注">
        {form.getFieldDecorator('ex1', {
          initialValue: values.ex1,
          rules: [{ required: false, message: '备注可为空!' }],
        })(<Input placeholder="请输入" />)}
      </FormItem>
    </Modal>
  );
});


/* eslint react/no-multi-comp:0 */
@connect(({ competitors, loading }) => ({
  competitors,
  loading: loading.models.competitors,
}))
@Form.create()
class CompetitorList extends PureComponent {
  state = {
    modalVisible: false,
    updateModalVisible: false,
    expandForm: false,
    selectedRows: [],
    formValues: {},
    updateFormValues: {},
  };

  columns = [
    {
      title: 'ID',
      dataIndex: 'competitorId',
    },
    {
      title: '名称',
      dataIndex: 'competitorName',
    },
    {
      title: '类别',
      dataIndex: 'types',
      render: val => `${val?'直接对手':'间接对手'} `,
    },
    {
      title: '所有人',
      dataIndex: 'username',
    },
    {
      title: '上次编辑时间',
      dataIndex: 'ctime',
      render: val => <span>{moment(val).format('YYYY-MM-DD HH:mm:ss')}</span>,
    },  
  
    {
      title: '操作',
      render: (text, record) => (
        <Fragment>
          <a onClick={() => this.handleUpdateModalVisible(true, record)}>编辑</a>
          <Divider type="vertical" />
          <Link to={{pathname:"/competitor/details", info:{record} }}>详细信息</Link>
        </Fragment>
      ),
    },
  ];

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'competitors/getCompetitorsList',
    });
  }

  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const { dispatch } = this.props;
    const { formValues } = this.state;
    console.log('分页数据',pagination)
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
      type: 'competitors/getCompetitorsList',
      payload: params
    });
  };

  handleFormReset = () => {
    const { form, dispatch } = this.props;
    form.resetFields();
    this.setState({
      formValues: {},
    });
    dispatch({
      type: 'competitors/getCompetitorsList',
      parload: {}
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
    console.log("ss",selectedRows);
    if (!selectedRows) return;
    switch (e.key) {
      case 'remove':
        dispatch({
          type: 'competitors/deleteCompetitors',
          payload: {
            competitorId: selectedRows[0].competitorId,
            status: 0,
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
      };

      this.setState({
        formValues: values,
      });

      dispatch({
        type: 'competitors/getCompetitorsList',
        payload: values
      });
    });
  };

  handleModalVisible = flag => {
    this.setState({
      modalVisible: !!flag,
    });
  };

  handleUpdateModalVisible = (flag, record) => {
    console.log("修改",record);
    this.setState({
      updateModalVisible: !!flag,
      updateFormValues: record || {},
    });
  };

  handleAdd = fields => {
    const { dispatch } = this.props;
    console.log("xxt",fields);
    dispatch({
      type: 'competitors/insertCompetitors',
      payload: {
        ...fields,
      },
    });
    this.handleModalVisible();
  };

  handleUpdate = fields => {
    const { dispatch } = this.props;
    dispatch({
      type: 'competitors/updateCompetitors',
      payload: {
        ...fields,
      },
    });

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
            <FormItem label="关键字查询">
              {getFieldDecorator('keyword')(<Input placeholder="根据输入名称查询" />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            
          </Col>
          <Col md={8} sm={24}>
            <span className={styles.submitButtons}>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
                重置
              </Button>
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
      competitors: { data },
      loading,
    } = this.props;
    console.log(this.props)
    const { selectedRows, modalVisible, updateModalVisible, updateFormValues } = this.state;
    const menu = (
      <Menu onClick={this.handleMenuClick} selectedKeys={[]}>
        <Menu.Item key="remove">删除</Menu.Item>
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
      <PageHeaderWrapper title="竞争对手">
        <Card bordered={false}>
          <div className={styles.tableList}>
            <div className={styles.tableListForm}>{this.renderForm()}</div>
            <div className={styles.tableListOperator}>
              <Button icon="plus" type="primary" onClick={() => this.handleModalVisible(true)}>
                新建
              </Button>
              {selectedRows.length > 0 && (
                <span>
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
        {updateFormValues && Object.keys(updateFormValues).length ? (
          <UpdateForm
            {...parentMethods}
            modalVisible={updateModalVisible}
            values={updateFormValues}
            handleUpdateModalVisible={this.handleUpdateModalVisible}
            handleUpdate={this.handleUpdate}
          />
        ) : null}
      </PageHeaderWrapper>
    );
  }
}

export default CompetitorList;
