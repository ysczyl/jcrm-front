import React from "react";
import styles from './style.less';
import { connect } from 'dva';
import { Table, Divider, Tag,Button,Modal,Input } from 'antd';


const ButtonGroup = Button.Group;
const { TextArea } = Input;
@connect(({ consumer, loading }) => ({
  consumer,
  submitting: loading.effects['consumer/submit'],
}))
class New extends React.Component {
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
  	// const values = {
		// 	"address":{
		// 		"country": document.getElementById('country').value,
		// 		"city": document.getElementById('city').value,
		// 		"province": document.getElementById('province').value,
		// 		"street": document.getElementById('street').value,
		// 	},
		// 	"consumerName": document.getElementById('username').value,
		// 	"contact":{
		// 		"department": document.getElementById('mum').value,
		// 		"contactName": document.getElementById('lx').value,
		// 		"phone": document.getElementById('phone').value,
		// 	},
	  //   "website": document.getElementById('website').value,
		// 	"state": 0,
		// 	"isOfficial": 1,
		// }
		const values = {
			"address": {
				"city": document.getElementById('city').value,
				"country": document.getElementById('country').value,
				"province": document.getElementById('province').value,
				"street": document.getElementById('street').value,
			},
			"consumerName": document.getElementById('username').value,
			"contact": {
				"contactName": document.getElementById('lx').value,
				"department": document.getElementById('mum').value,
				"phone": document.getElementById('phone').value,
			},
			"isOfficial": 1,
			"state": 1,
			"website": document.getElementById('website').value
		}
 console.log(values)
    console.log(e);
    this.setState({
      visible: false,
    });
    const { dispatch } = this.props;
    console.log(this.props)
    	console.log(dispatch)
          dispatch({
        type: 'consumer/submit',
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
	          title="新建"
	          visible={this.state.visible}
	          onOk={this.handleOk}
	          onCancel={this.handleCancel}
	        >
	        <div className={styles.NewBox}>
	        	<div className={styles.title}><span>客户信息</span></div>
	        	<div className={styles.InputBeforeSpanBox}>
	        		<div className={styles.InputBeforeBox}>
	        			<span className={styles.InputSpanX}>*</span>
	        			<span>客户名</span>
	        		</div>
	        		<Input id='username' className={styles.InputS} />
	        		<div className={styles.kehuSpan}>
	        			<span>客户所有人</span>
	        		</div>
	        		<span>john</span>
	        	</div>
	            <div className={styles.leixinBox}>
	        		<div className={styles.InputBeforeBox}>
	        			<span style={{marginLeft:24}}>类型</span>
	        		</div>
	        		<Input id='lx' className={styles.InputS} />
	        		<div className={styles.kehuSpan}>
	        			<span>母公司</span>
	        		</div>
	        		<Input id='mum' className={styles.MGS}/>
	        	</div>
	        	<div className={styles.leixinBox}>
	        		<div className={styles.InputBeforeBox}>
	        			<span className={styles.SpanL}>网址</span>
	        		</div>
	        		<Input id='website' className={styles.InputS} />
	        		<div className={styles.kehuSpan}>
	        			<span>电话</span>
	        		</div>
	        		<Input id='phone' className={styles.MGS} />
	        	</div>
	        	<div className={styles.leixinBox}>
	        		<div className={styles.InputBeforeBox}>
	        			<span className={styles.SpanL}>描述</span>
	        		</div>
	        		<TextArea id='describe' rows={2} className={styles.InputS} />
	        		<div className={styles.kehuSpan}>
	        			<span>行业</span>
	        		</div>
	        		<Input id='hangye' className={styles.MGS} />
	        	</div>


	        	<div className={styles.title}><span>地址信息</span></div>
	        	<div className={styles.KDBox} style={{width:'100%'}}>
	        		<strong>客户地址</strong><br />
	        		<div className={styles.KDBox}>
	        			<span>客户国家/地区</span><br />
	        			<Input id='country' className={styles.Inputbox} />
	        		</div>
	        		<div className={styles.KDBox}>
	        			<span>客户州/省</span><br />
	        			<Input id='province' className={styles.Inputbox} />
	        		</div>
	        		<div className={styles.Inputbox}>
	        		<span>客户城市</span><br />
	        		<Input id='city' className={styles.Inputbox} />
	        		</div>
	        		<div className={styles.Inputbox}>
	        		<span>客户街道</span><br />
	        		<Input id='street' className={styles.Inputbox} />
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

export default New;
