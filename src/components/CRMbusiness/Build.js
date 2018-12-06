import React from "react";
import styles from './style.less';
import { connect } from 'dva';
import New from '@/components/CRMCustomer/New';
import { Table, Divider, Tag,Button,Modal,Input ,Checkbox,DatePicker,Select  } from 'antd';

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
    console.log(date, dateString);
  }
const ButtonGroup = Button.Group;
const { TextArea } = Input;
@connect(({ opportunity, loading }) => ({
    opportunity,
    projectLoading: loading.effects['opportunity/getOpportunityList'],
  submitting: loading.effects['opportunity/customerList'],
}))
class Build extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list:[],
      listC:[],
      flag:false,
      visible: false,
      visibles: false,
};
}
  showModal = () => {
    this.setState({
      visible: true,
    });
    const {dispatch} = this.props;
      dispatch({
    type: 'opportunity/customerList',
    payload: {
      },
  });
  }
  showNewCustomer = () => {
    this.setState({
      visibles: true,
    });
  }

  handleOk = (e) => {
  	const values = {
	    "1": document.getElementById('username').value,
		}
    console.log(e);
    this.setState({
      visible: false,
    });
    const { dispatch } = this.props;
    console.log(this.props)
    	console.log(dispatch)

  }
  handleOks = (e) => {
  console.log(e);
  this.setState({
    visibles: false,
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
  customerList=(e)=> {
    const { dispatch } = this.props;
    dispatch({
        type: 'opportunity/getOpportunityList',
      });
}
  flags=(e)=>{
    console.log(this.state.listC)
    if(this.state.listC.length != 0){
      this.setState({
        flag:true,
      },()=>{console.log(this.state.flag)});
    }
  }
  componentDidMount(){
    this.customerList();
    this.flags();
}
  componentWillReceiveProps(nextProps){
    this.setState({
      listC: nextProps.opportunity.list,
  },()=>{console.log(this.state.listC)});
     this.flags();
  }


  render() {
      let CustomerMap = this.state.listC.map((item,index)=>
        <Option key={index} value={index}>{this.state.flag?item.consumerName:"ysc"}</Option>
    );
    return (
      <div>
          <ButtonGroup>
            <Button onClick={this.showModal}>新建</Button>
            <Button>导入</Button>
          </ButtonGroup>
	           <Modal
	          width='950px'
	          title="新建"
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
	        		<Input id='username' className={styles.InputS} />
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
                        <Select className={styles.InputS} id='lx' defaultValue="-2">
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
	        		<div className={styles.kehuSpan}>
	        			<span>阶段</span>
	        		</div>
                    <InputGroup compact>
                        <Select className={styles.InputS} style={{marginLeft:-30}} id='phone' defaultValue="Option1">
                            <Option value="Option1">--无--</Option>
                            <Option value="Option2">Qualification</Option>
                            <Option value="Option3">Needs Analysis</Option>
                            <Option value="Option4">Proposal</Option>
                            <Option value="Option5">Negotiation</Option>
                            <Option value="Option6">Closed Won</Option>
                            <Option value="Option7">Closed Lost</Option>
                        </Select>
                    </InputGroup><br />
                    <div className={styles.kehuSpan}>
	        			<span>业务机会来源</span>
	        		</div>
                    <InputGroup compact>
                        <Select className={styles.InputS} style={{marginLeft:-30}} id='from' defaultValue="Option1">
                            <Option value="Option1">--无--</Option>
                            <Option value="Option2">Advertisement</Option>
                            <Option value="Option3">Customer Event</Option>
                            <Option value="Option4">Employee Referral</Option>
                            <Option value="Option5">Google AdWords</Option>
                            <Option value="Option6">Other</Option>
                            <Option value="Option7">Partner</Option>
                            <Option value="Option8">Purchased List</Option>
                            <Option value="Option9">Trade Show</Option>
                            <Option value="Option10">Webinar</Option>
                            <Option value="Option11">Website</Option>
                        </Select>
                    </InputGroup><br />
	        	</div>
	        	<div className={styles.leixinBox}>
	        		<div className={styles.InputBeforeBox}>
	        			<span className={styles.SpanL}>主要市场活动源</span>
	        		</div>
	        		<Input id='describe' className={styles.InputS} />
	        		<div className={styles.kehuSpan}>
	        			<span>可能性</span>
	        		</div>
	        		<Input id='hangye' className={styles.MGS} />
	        	</div>
                    <Checkbox style={{marginLeft:24}} onChange={Budget}>Budget Confirmed</Checkbox><br />
                    <Checkbox style={{marginLeft:24}} onChange={Discovery}>Discovery Completed</Checkbox><br />
                    <Checkbox style={{marginLeft:24}} onChange={ROI}>ROI Analysis Completed</Checkbox><br />

	        	<div style={{width:'100%'}}>
	        		<span>其他信息</span><br />
	        		<div>
	        			<span>下一步</span><br />
	        			<Input id='province' className={styles.Inputbox} />
	        		</div>
	        		<div>
	        		<span>备注</span><br />
	        		<Input id='city' className={styles.Inputbox} />
	        		</div>
	        		<div className={styles.Inputbox}>
	        		<span>描述</span><br />
	        		<TextArea autosize={{ minRows: 2, maxRows: 6 }} id='street' className={styles.Inputbox} />
	        		</div>
	        	    <div className={styles.Inputbox}>
	        		</div>
	        	</div>
	        </div>
	        </Modal>
            <Modal
	          width='200px'
	          title="新建"
	          visible={this.state.visibles}
	          onOk={this.handleOks}
	          onCancel={this.handleCancels}
	        ><New /></Modal>
      </div>
    );
  }
}

export default Build;
