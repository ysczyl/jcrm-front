import React from "react";
import styles from './style.less';
import { Table, Divider, Tag } from 'antd';
import Link from 'umi/link';
import { connect } from 'dva';
import Build from '@/components/CRMbusiness/Build';

const columns = [{
  title: '业务机会名',
  dataIndex: 'oppName',
  key: 'oppName',
  render: text => <Link to={{pathname:"/result/fail",state:{name:text}}}>{text}</Link>,
}, {
  title: '客户名',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '阶段',
  dataIndex: 'oppStageId',
  key: 'oppStageId',
}
, {
  title: '结束日期',
  dataIndex: 'deadline',
  key: 'deadline',
}
, {
  title: '机会所有人编号',
  dataIndex: 'holder',
  key: 'holder',
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

@connect(({ opportunity, loading }) => ({
  opportunity,
  projectLoading: loading.effects['opportunity/getOpportunityList'],
}))
class Success extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      opportunityList:[],
      opportunityListflag:false,
};
}
opportunityListflags=(e)=>{
  if(this.state.opportunityList.length != 0){
    this.setState({
      opportunityListflag:true,
    },()=>{console.log(this.state.opportunityListflag)});
  }
}
getOpportunityList=(e)=> {
  const { dispatch } = this.props;
  dispatch({
      type: 'opportunity/getOpportunityList',
    });
}
componentDidMount(){
  this.getOpportunityList();
}
componentWillReceiveProps(nextProps){
  this.setState({
        opportunityList: nextProps.opportunity.opportunityList,
    },()=>{console.log(this.state.opportunityList)});
    this.opportunityListflags();
}
  render() {
    return (
      <div>
          <Build />
          <Table columns={columns} dataSource={this.state.opportunityListflag?this.state.opportunityList:""} />
      </div>
    );
  }
}

export default Success;
