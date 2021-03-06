import React from "react";
import styles from './style.less';
import { connect } from 'dva';
import New from '@/components/CRMCustomer/New';
import NewSource from '@/components/CRMbusiness/NewSource';
import { Table, Divider, Tag,Button,Modal,Input ,Checkbox,DatePicker,Select  } from 'antd';

const deadline = "";
const roiAnalysisCompleted = 0;
const InputGroup = Input.Group;
const Option = Select.Option;
const budget = 0;
const discovery = 0;
const roi = 0;
var oppSourceId = 1;
var oppStageId = 1; 
function Budget(e) {
    console.log(`checked = ${e.target.checked}`);
    // if(e.target.checked){
    //   budget = 1
    // }else{
    //   budget = 0
    // }
  }
function Discovery(e) {
    console.log(`checked = ${e.target.checked}`);
    // if(e.target.checked){
    //   discovery = 1
    // }else{
    //   discovery = 0
    // }
  }
function ROI(e) {
    console.log(`checked = ${e.target.checked}`);
    // if(e.target.checked){
    //   roi = 1
    // }else{
    //   roi = 0
    // }
  }
function data(date, dateString) {
    // deadline = data._d;
  }
const ButtonGroup = Button.Group;
const { TextArea } = Input;
@connect(({ opportunity, loading }) => ({
  opportunity,
  submitting: loading.effects['opportunity/customerList'],
  submitting: loading.effects['opportunity/getSourceList'],
  submitting: loading.effects['opportunity/getStageList'],
  submitting: loading.effects['opportunity/insertOpportunity'],
}))
class Build extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listC:[],
      sourceList:[],
      getStageList:[],
      flag:false,
      visible: false,
      visibles: false,
      sourcesVisible:false,
};
}
 //新建触发事件
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  //新建客户触发事件
  showNewCustomer = () => {
    this.setState({
      visibles: true,
    });
  }
  //新建市场活动源触发事件
  showSourceModal = () => {
    this.setState({
      sourcesVisible: true,
    });
  }
  Change = (e) =>{
    // console.log(document.getElementById('oppSourceId').innerHTML)
    oppSourceId = e;
  }
  Changes = (e) =>{
    // console.log(document.getElementById('oppStageId').innerHTML)
    oppStageId = e;
  }
  handleOk = (e) => {
  	const values = {
      "oppName": document.getElementById('oppName').value,
      "deadline": deadline,
      "executor":30,
      "possibility": document.getElementById('possibility').value,
      "nextStep": document.getElementById('nextStep').value,
      "roiAnalysisCompleted":0,
      "oppEx1": document.getElementById('oppEx1').value,
      "oppDescription": document.getElementById('oppDescription').value,
      "importantLevel": document.getElementById('importantLevel').value,
      "cid": document.getElementById('cid').value,
      "accountMoney": document.getElementById('accountMoney').value,
      "oppSourceId": oppSourceId,
      "oppStageId": oppStageId,
      "cid": document.getElementById('cid').value,
      "isCompleted":0,
      "budgetConfirmed":0,
		}
    console.log(e);
    this.setState({
      visible: false,
    });
    const { dispatch } = this.props;
    dispatch({
      type: 'opportunity/insertOpportunity',
      payload: {
        ...values,
      },
    });

  }
  handleOks = (e) => {
  console.log(e);
  this.setState({
    visibles: false,
  });
}
sourcesHandleOk = (e) => {
  console.log(e);
  this.setState({
    sourcesVisible: false,
  });
}
handleCancels = (e) => {
    console.log(e);
    this.setState({
      visibles: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  sourcesHandleCancels = (e) => {
    console.log(e);
    this.setState({
      sourcesVisible: false,
    });
  }
  flags=(e)=>{
    if(this.state.listC.length != 0){
      this.setState({
        flag:true,
      },()=>{console.log(this.state.flag)});
    }
  }
  jiekou=()=>{
    const {dispatch} = this.props;
    //调取客户列表数据
      dispatch({
    type: 'opportunity/customerList',
  });
  //调取主要市场活动源列表数据
      dispatch({
        type: 'opportunity/getSourceList',
      });
  //调取阶段列表
      dispatch({
        type: 'opportunity/getStageList',
      });
  }
  componentDidMount(){
    this.flags();
    this.jiekou();
}
  componentWillReceiveProps(nextProps){
    this.setState({
      //客户列表
      listC: nextProps.opportunity.list,
      //主要市场活动源列表
      sourceList: nextProps.opportunity.sourceList,
      //业务机会
      getStageList:nextProps.opportunity.stageList,
  });
     this.flags();
     console.log(this.props)
  }


  render() {
    //客户列表
      let CustomerMap = this.state.listC.map((item,index)=>
        <Option key={index} value={index}>{this.state.flag?item.consumerName:"ysc"}</Option>
    );
    //市场源列表
    let getSourceListMap = this.state.sourceList.map((item,index)=>
    <Option key={index} value={index}>{this.state.flag?item.sourceName:"ysc"}</Option>
    );
    //阶段
    let getStageList = this.state.getStageList.map((item,index)=>
    <Option key={index} value={this.state.flag?item.oppStageId:0}>{this.state.flag?item.stageName:"ysc"}</Option>
    );
    
    return (
      <div>
              <Button icon="plus" type="primary" onClick={this.showModal}>
                新建
              </Button>
	           <Modal
	          width='950px'
	          title="新建商业机会"
	          visible={this.state.visible}
	          onOk={this.handleOk}
	          onCancel={this.handleCancel}
	        >
	        <div className={styles.NewBox}>
	        	<div className={styles.title}><span>业务机会信息</span></div>
	        	<div className={styles.InputBeforeSpanBox}>
	        		<div className={styles.InputBeforeBox}>
	        			<span className={styles.InputSpanX}>*</span>
	        			<span>业务机会名</span>
	        		</div>
	        		<Input id='oppName' className={styles.InputS} />
	        		<div className={styles.kehuSpan}>
	        			<span>业务机会所有人</span>
	        		</div>
	        		<span>john</span>
	        	</div>
	            <div className={styles.leixinBox}>
	        		<div className={styles.InputBeforeBox}>
	        			<span style={{marginLeft:24}}>客户名</span>
	        		</div>
                    <InputGroup compact style={{float:'left',width:'30%'}}>
                        <Select className={styles.InputS} id='cid' defaultValue="-2">
                            <Option value="-2">--无--</Option>
                            <Option value="-1" onClick={this.showNewCustomer}>创建客户</Option>
                            {CustomerMap}
                        </Select>
                    </InputGroup>
	        		<div className={styles.kehuSpan}>
	        			<span>结束日期</span>
	        		</div>
	        		<DatePicker onChange={data} id='mum' className={styles.MGS}  placeholder="结束日期"/>
	        	</div>
	        	<div className={styles.leixinBox}>
	        		<div className={styles.InputBeforeBox}>
	        			<span className={styles.SpanL}>类型</span>
	        		</div>
	        		<InputGroup compact>
                        <Select className={styles.InputS} id='phone' defaultValue="Option1">
                            <Option value="Option1">--无--</Option>
                            <Option value="Option2">Existing Business</Option>
                            <Option value="Option3">Existing Business</Option>
                        </Select>
                    </InputGroup><br />
                    <div className={styles.InputBeforeBox}>
	        			<span className={styles.SpanL}>重要等级</span>
	        		</div>
	        		<InputGroup compact>
                        <Select className={styles.InputS} id='importantLevel' defaultValue="1">
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                            <Option value="4">4</Option>
                            <Option value="5">5</Option>
                        </Select>
                    </InputGroup><br />
	        		<div className={styles.kehuSpan}>
	        			<span>阶段</span>
	        		</div>
                    <InputGroup compact>
                        <Select className={styles.InputS} style={{marginLeft:-30}} id='oppSourceId' defaultValue="-1" onChange={this.Change.bind(this)}>
                            <Option value="-1">--无--</Option>
                            {getStageList}
                        </Select>
                    </InputGroup><br />
	        	</div>
	        	<div className={styles.leixinBox}>
	        		<div className={styles.InputBeforeBox}>
	        			<span className={styles.SpanL}>主要市场活动源</span>
	        		</div>
              <InputGroup compact style={{float:'left',width:'30%'}}>
                        <Select className={styles.InputS} id='oppStageId' onChange={this.Changes.bind(this)}>
                            <Option value="-1" onClick={this.showSourceModal}>新建市场来源</Option>
                            {getSourceListMap}
                        </Select>
                    </InputGroup>
	        		<div className={styles.kehuSpan}>
	        			<span>可能性</span>
	        		</div>
	        		<Input id='possibility' className={styles.MGS} />
	        	</div>
                    <Checkbox style={{marginLeft:24}} onChange={Budget}>Budget Confirmed</Checkbox><br />
                    <Checkbox style={{marginLeft:24}} onChange={Discovery}>Discovery Completed</Checkbox><br />
                    <Checkbox style={{marginLeft:24}} onChange={ROI}>ROI Analysis Completed</Checkbox><br />

	        	<div style={{width:'100%'}}>
	        		<span>其他信息</span><br />
	        		<div>
	        			<span>下一步</span><br />
	        			<Input id='nextStep' className={styles.Inputbox} />
	        		</div>
              <div>
	        			<span>钱</span><br />
	        			<Input id='accountMoney' className={styles.Inputbox} />
	        		</div>
	        		<div>
	        		<span>备注</span><br />
	        		<Input id='oppEx1' className={styles.Inputbox} />
	        		</div>
	        		<div className={styles.Inputbox}>
	        		<span>描述</span><br />
	        		<TextArea autosize={{ minRows: 2, maxRows: 6 }} id='oppDescription' className={styles.Inputbox} />
	        		</div>
	        	    <div className={styles.Inputbox}>
	        		</div>
	        	</div>
	        </div>
	        </Modal>
            <Modal
	          width='200px'
	          title="新建客户"
	          visible={this.state.visibles}
	          onOk={this.handleOks}
	          onCancel={this.handleCancels}
	        ><New /></Modal>
            <Modal
	          width='200px'
	          title="新建市场活动"
	          visible={this.state.sourcesVisible}
	          onOk={this.sourcesHandleOk}
	          onCancel={this.sourcesHandleCancels}
	        ><NewSource /></Modal>
      </div>
    );
  }
}

export default Build;
