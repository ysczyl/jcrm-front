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
function Budget(e) {
    console.log(`checked = ${e.target.checked}`);
  }
function Discovery(e) {
    console.log(`checked = ${e.target.checked}`);
  }
function ROI(e) {
    console.log(`checked = ${e.target.checked}`);
  }
function data(date, dateString) {
    deadline = data._d;
  }
const ButtonGroup = Button.Group;
const { TextArea } = Input;
@connect(({ opportunity, loading }) => ({
  opportunity,
  projectLoading: loading.effects['opportunity/getOpportunityList'],
  submitting: loading.effects['opportunity/updateOpportunity'],
}))
class Change extends React.Component {
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
      importantLevel :"",
      oppSourceId : this.props.cz.oppSourceId,
      oppStageId : this.props.cz.oppStageId,
};
}
 //新建触发事件
  showModal = () => {
    this.setState({
      visible: true,
    });
    console.log(this.props.cz)
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
  importantLevel = (e) =>{
    // console.log(document.getElementById('oppSourceId').innerHTML)
    this.setState({oppSourceId:e},()=>{console.log(this.state.importantLevel)})
  }
  Change = (e) =>{
    // console.log(document.getElementById('oppSourceId').innerHTML)
    this.setState({oppSourceId:e},()=>{console.log(this.state.oppSourceId)})
  }
  Changes = (e) =>{
    // console.log(document.getElementById('oppStageId').innerHTML)
    this.setState({oppSourceId:e},()=>{console.log(this.state.oppStageId)})
  }
  handleOk = (e) => {
  	const values = {
      "oppName": document.getElementById('oppName').value,
      "deadline": deadline,
      "executor":30,
      "possibility":10,
      "nextStep": document.getElementById('nextStep').value,
      "roiAnalysisCompleted":0,
      "oppEx1": document.getElementById('oppEx1').value,
      "oppDescription": document.getElementById('oppDescription').value,
      "importantLevel": this.state.importantLevel,
      "accountMoney": document.getElementById('accountMoney').value,
      "oppSourceId": this.state.oppSourceId,
      "oppStageId": this.state.oppStageId,
      "isCompleted":0,
      "budgetConfirmed":0,
      "oppLossReasonId":1,
      "businessOppId":this.props.cz.businessOppId,
    }
    console.log(values)
    console.log(e);
    this.setState({
      visible: false,
    });
    const { dispatch } = this.props;
    dispatch({
      type: 'opportunity/updateOpportunity',
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
    <Option key={index} value={index}>{this.state.flag?item.stageName:"ysc"}</Option>
    );
    
    return (
      <div style={{float:'left'}}>
              <a onClick={this.showModal}>
                修改
              </a>
	           <Modal
	          width='950px'
	          title="修改商业机会"
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
	        		<Input id='oppName' className={styles.InputS} defaultValue={this.props.cz.oppName}/>
	        		<div className={styles.kehuSpan}>
	        			<span>业务机会所有人</span>
	        		</div>
	        		<span>{this.props.cz.username}</span>
	        	</div>
	        	<div className={styles.leixinBox}>
	        		<div className={styles.InputBeforeBox}>
	        			<span className={styles.SpanL}>类型</span>
	        		</div>
	        		<InputGroup compact>
                        <Select className={styles.InputS} id='sbs' defaultValue="Option1">
                            <Option value="Option1">--无--</Option>
                            <Option value="Option2">Existing Business</Option>
                            <Option value="Option3">Existing Business</Option>
                        </Select>
                    </InputGroup><br />
                    <div className={styles.InputBeforeBox}>
	        			<span className={styles.SpanL}>重要等级</span>
	        		</div>
	        		<InputGroup compact>
                        <Select className={styles.InputS} id='importantLevel' defaultValue={this.props.cz.importantLevel} onChange={this.importantLevel.bind(this)}>
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
                        <Select className={styles.InputS} style={{marginLeft:-30}} id='oppStageId' defaultValue={this.props.cz.oppStageId} onChange={this.Changes.bind(this)}>
                            <Option value="Option1">--无--</Option>
                            {getStageList}
                        </Select>
                    </InputGroup><br />
	        	</div>
	        	<div className={styles.leixinBox}>
	        		<div className={styles.InputBeforeBox}>
	        			<span className={styles.SpanL}>主要市场活动源</span>
	        		</div>
              <InputGroup compact style={{float:'left',width:'30%'}}>
                        <Select className={styles.InputS} id='oppSourceId' defaultValue={this.props.cz.oppSourceId} onChange={this.Change.bind(this)}>
                            <Option value="-1" onClick={this.showSourceModal}>新建市场来源</Option>
                            {getSourceListMap}
                        </Select>
                    </InputGroup>
	        		<div className={styles.kehuSpan}>
	        			<span>可能性(%)</span>
	        		</div>
	        		<Input id='possibility' className={styles.MGS} defaultValue={this.props.cz.possibility}/>
	        	</div>
                    <Checkbox style={{marginLeft:24}} onChange={Budget}>Budget Confirmed</Checkbox><br />
                    <Checkbox style={{marginLeft:24}} onChange={Discovery}>Discovery Completed</Checkbox><br />
                    <Checkbox style={{marginLeft:24}} onChange={ROI}>ROI Analysis Completed</Checkbox><br />

	        	<div style={{width:'100%'}}>
	        		<span>其他信息</span><br />
	        		<div>
	        			<span>下一步</span><br />
	        			<Input id='nextStep' className={styles.Inputbox} defaultValue={this.props.cz.nextStep} />
	        		</div>
              <div>
	        			<span>钱</span><br />
	        			<Input id='accountMoney' className={styles.Inputbox} defaultValue={this.props.cz.accountMoney}  />
	        		</div>
	        		<div>
	        		<span>备注</span><br />
	        		<Input id='oppEx1' className={styles.Inputbox} defaultValue={this.props.cz.ex1} />
	        		</div>
	        		<div className={styles.Inputbox}>
	        		<span>描述</span><br />
	        		<TextArea autosize={{ minRows: 2, maxRows: 6 }} id='oppDescription' className={styles.Inputbox} defaultValue={this.props.cz.description}/>
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

export default Change;
