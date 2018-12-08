import React from "react";
import styles from './style.less';
import { Table, Divider, Tag,Button } from 'antd';
import Link from 'umi/link';
import { connect } from 'dva';
import New from '@/components/CRMCustomer/New';
// const columns = [
// {
//   title: '关联码',
//   dataIndex: 'cid',
//   key: 'cid',
//   render: text => <Link to={{pathname:"/form/advanced-form",state:{cid:text}}}>{text}</Link>,
// },{
//   title: '客户名',
//   dataIndex: 'consumerName',
//   key: 'consumerName',
// }, {
//   title: '电话',
//   dataIndex: 'age',
//   key: 'age',
// }, {
//   title: '网址',
//   dataIndex: 'website',
//   key: 'website',
// }
// ,  {
//   title: 'Action',
//   key: 'action',
//   render: (text, record) => (
//     <span>
//       <a href="javascript:;">edit</a>
//       <Divider type="vertical" />
//       <a href="javascript:;" >Delete</a>
//     </span>
//   ),
// }];

const ButtonGroup = Button.Group;
@connect(({ consumer, loading }) => ({
  consumer,
  projectLoading: loading.effects['consumer/customerList'],
  submitting: loading.effects['consumer/customerDelete'],
}))
class Forms extends React.Component {
    constructor(props) {
        super(props)
        this.columns = [
          {
            title: '关联码',
            dataIndex: 'cid',
            key: 'cid',
            render: text => <Link to={{pathname:"/form/advanced-form",state:{cid:text}}}>{text}</Link>,
          },{
            title: '客户名',
            dataIndex: 'cid',
            key: 'consumerName',
            render: text => <Link to={{pathname:"/form/advanced-form",state:{cid:text}}}>{text}</Link>,
          }, {
            title: '电话',
            dataIndex: 'age',
            key: 'age',
          }, {
            title: '网址',
            dataIndex: 'website',
            key: 'website',
          }
          ,  {
            title: 'Action',
            dataIndex: 'cid',
            key: 'action',
            render: text => (
              <span>
                <a href="javascript:;">edit</a>
                <Divider type="vertical" />
                <a href="javascript:;" onClick={this.delete.bind(this,text)} >Delete</a>
              </span>
            ),
          }];
        this.state = {
          list:[],
    };
    }
    //请求客户列表
    customerList=(e)=> {
        const { dispatch } = this.props;
            dispatch({
            type: 'consumer/customerList',
          });
    }
//删除客户
    delete=(values)=> {
      const cid = {cid:values};
      const { dispatch } = this.props;
          dispatch({
          type: 'consumer/customerDelete',
          payload:{
            ...cid,
          }
        });
    }
  componentDidMount(){
    this.customerList();
  }
  componentWillReceiveProps(nextProps){
  this.setState({
            list: nextProps.consumer.list,
        });
  }
  render() {
    return (
      <div>
          <New />
          <Table columns={this.columns} dataSource={this.state.list}  />
      </div>
    );
  }
}

export default Forms;
