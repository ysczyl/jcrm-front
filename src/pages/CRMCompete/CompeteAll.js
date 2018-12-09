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
@connect(({ competitors, loading }) => ({
  competitors,
  projectLoading: loading.effects['competitors/getCompetitorsList'],
  submitting: loading.effects['competitors/deleteCompetitors'],
}))
class CompeteAll extends React.Component {
    constructor(props) {
        super(props)
        this.columns = [
          {
            title: '关联码',
            dataIndex: 'competitorId',
            key: 'competitorId',
            render: text => <Link to={{pathname:"/compete/detailed",state:{cid:text}}}>{text}</Link>,
          },{
            title: '竞争对手名',
            dataIndex: 'competitorName',
            key: 'competitorId',
            render: text => <Link to={{pathname:"/compete/detailed",state:{cid:text}}}>{text}</Link>,
          }, {
            title: '重要程度',
            dataIndex: 'ex1',
            key: 'ex1',
          }, {
            title: '类型',
            dataIndex: 'types',
            key: 'types',
          }
          ,  {
            title: 'Action',
            dataIndex: 'competitorId',
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
          competitorsList:[],
          ref:false,
    };
    }
    //请求客户列表
    getCompetitorsList=(e)=> {
        const { dispatch } = this.props;
            dispatch({
            type: 'competitors/getCompetitorsList',
          });
    }
        //二次查询同步操作
  getCompetitorsLists=(e)=>{
      if(this.state.ref){
        this.getCompetitorsList();
        this.setState({ref:false});
      }
    }
//删除客户
    delete=(e)=> {
      console.log(e)
      const competitorId = {competitorId:e};
      const { dispatch } = this.props;
          dispatch({
          type: 'competitors/deleteCompetitors',
          payload:{
            ...competitorId,
          }
        });
        this.setState({ref:true},()=>{this.getCompetitorsLists()})
    }
  componentDidMount(){
    this.getCompetitorsList();
  }
  componentWillReceiveProps(nextProps){
  this.setState({
    competitorsList: nextProps.competitors.competitorsList,
        });
  }
  render() {
    return (
      <div>
          <New />
          <Table columns={this.columns} dataSource={this.state.competitorsList}  />
      </div>
    );
  }
}

export default CompeteAll;
