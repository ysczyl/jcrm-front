import React from "react";
import styles from './style.less';
import { Table, Divider, Tag,Button } from 'antd';
import Link from 'umi/link';
import New from '@/components/CRMCustomer/new.js';

const ButtonGroup = Button.Group;
const columns = [{
  title: '客户名',
  dataIndex: 'name',
  key: 'name',
  render: text => <Link to={{pathname:"/form/advanced-form",state:{name:text}}}>{text}</Link>,
}, {
  title: '电话',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '客户所有人别名',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="javascript:;">edit</a>
      <Divider type="vertical" />
      <a href="javascript:;">Delete</a>
    </span>
  ),
}];


const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}, {
  key: '2',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}, {
  key: '2',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}, {
  key: '2',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}, {
  key: '2',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}, {
  key: '2',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}];
class Forms extends React.Component {

  render() {
    return (
      <div>
          <New />
          <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default Forms;
