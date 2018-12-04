import React from "react";
import styles from './style.less';
import { Table, Divider, Tag } from 'antd';
import Link from 'umi/link';

const columns = [{
  title: '业务机会名',
  dataIndex: 'name',
  key: 'name',
  render: text => <Link to={{pathname:"/result/fail",state:{name:text}}}>{text}</Link>,
}, {
  title: '客户名',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '阶段',
  dataIndex: 'address',
  key: 'address',
}
, {
  title: '结束日期',
  dataIndex: 'data',
  key: 'data',
}
, {
  title: '业务人员别名',
  dataIndex: 'oname',
  key: 'oname',
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="javascript:;">Invite {record.name}</a>
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
class Success extends React.Component {
  render() {
    return (
      <div>
          <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default Success;
