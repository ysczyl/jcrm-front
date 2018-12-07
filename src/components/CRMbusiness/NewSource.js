import React from "react";
import styles from './style.less';
import { connect } from 'dva';
import { Table, Divider, Tag,Button,Modal,Input,DatePicker } from 'antd';


var sdate = '';
var edate = '';
function DateonChange(date) {
    sdate = date[0]._d;
    edate = date[1]._d;
  }
const {RangePicker} = DatePicker;
const ButtonGroup = Button.Group;
const { TextArea } = Input;
@connect(({ opportunity, loading }) => ({
    opportunity,
  submitting: loading.effects['opportunity/insertSource'],
}))
class NewSource extends React.Component {
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
  	const values = {
	    "sourceName": document.getElementById('sourceName').value,
	    "statusId": document.getElementById('statusId').value,
	    "description": document.getElementById('description').value,
	    "sendCount": document.getElementById('sendCount').value,
	    "responsePercentage": document.getElementById('responsePercentage').value,
	    "expectedIncome": document.getElementById('expectedIncome').value,
	  	"budgetCost": document.getElementById('budgetCost').value,
	  	"actualCost": document.getElementById('actualCost').value,
	    "sdate": sdate,
			"edate": edate,
			"typeId": '2',
		}
    console.log(e);
    this.setState({
      visible: false,
    });
    const { dispatch } = this.props;
    console.log(this.props)
    	console.log(dispatch)
          dispatch({
        type: 'opportunity/insertSource',
        payload: {
          ...values,
        },
      });

  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <div>
          <ButtonGroup>
            <Button onClick={this.showModal}>新建</Button>
            <Button>导入</Button>
          </ButtonGroup>
	           <Modal
	          width='950px'
	          title="新建市场活动"
	          visible={this.state.visible}
	          onOk={this.handleOk}
	          onCancel={this.handleCancel}
	        >
	        <div className={styles.NewBox}>
	        	<div className={styles.title}><span>市场活动信息</span></div>
	        	<div className={styles.InputBeforeSpanBox}>
	        		<div className={styles.InputBeforeBox}>
	        			<span className={styles.InputSpanX}>*</span>
	        			<span>市场活动名称</span>
	        		</div>
	        		<Input id='sourceName' className={styles.InputS} />
	        		<div className={styles.kehuSpan}>
	        			<span>市场所有人</span>
	        		</div>
	        		<span>john</span>
	        	</div>
	            <div className={styles.leixinBox}>
	        		<div className={styles.InputBeforeBox}>
	        			<span style={{marginLeft:24}}>状态</span>
	        		</div>
	        		<Input id='statusId' className={styles.InputS} />
	        	</div>
	        	<div className={styles.leixinBox}>
                <div className={styles.InputBeforeBox}>
	        			<span style={{marginLeft:24}}>日期</span>
	        		</div>
                <RangePicker className={styles.InputS} onChange={DateonChange} />
	        	</div>
	        	<div className={styles.leixinBox}>
	        		<div className={styles.InputBeforeBox}>
	        			<span className={styles.SpanL}>描述</span>
	        		</div>
	        		<TextArea id='description' rows={4} style={{width:'90%',marginLeft:30}} />
	        	</div>


	        	<div className={styles.title}><span>计划</span></div>
	        	<div className={styles.KDBox} style={{width:'100%'}}>
	        		<div className={styles.KDBox}>
	        			<span>市场活动中的发送数</span><br />
	        			<Input id='sendCount' className={styles.Inputbox} />
	        		</div>
	        		<div className={styles.KDBox}>
	        			<span>预期响应百分比</span><br />
	        			<Input id='responsePercentage' className={styles.Inputbox} />
	        		</div>
	        		<div className={styles.Inputbox}>
	        		<span>市场活动中的预算成本</span><br />
	        		<Input id='budgetCost' className={styles.Inputbox} />
	        		</div>
	        		<div className={styles.Inputbox}>
	        		<span>市场活动中的实际成本</span><br />
	        		<Input id='actualCost' className={styles.Inputbox} />
	        		</div>
                    <div className={styles.Inputbox}>
	        		<span>市场活动中的预期收入</span><br />
	        		<Input id='expectedIncome' className={styles.Inputbox} />
	        		</div>
	        	    <div className={styles.Inputbox}>
	        		</div>
	        	</div>
	        </div>
	        </Modal>
      </div>
    );
  }
}

export default NewSource;
