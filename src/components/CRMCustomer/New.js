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
  	const values = {
	    "consumerName": "ysc",
	    "contactName": "22222",
	    "department": "1111",
	    "email": "1239864102@qq.com",
	    "familyName": "qqq",
	    "firstName": "11",
	    "telephone": "ysc",
    }
    console.log(e);
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
          values,
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
	        			<span className={styles.spanL}>类型</span>
	        		</div>
	        		<Input className={styles.InputS} />
	        		<div className={styles.kehuSpan}>
	        			<span>母公司</span>
	        		</div>
	        		<Input className={styles.MGS}/>
	        	</div>
	        	<div className={styles.leixinBox}>
	        		<div className={styles.InputBeforeBox}>
	        			<span className={styles.SpanL}>网址</span>
	        		</div>
	        		<Input className={styles.InputS} />
	        		<div className={styles.kehuSpan}>
	        			<span>电话</span>
	        		</div>
	        		<Input className={styles.MGS} />
	        	</div>
	        	<div className={styles.leixinBox}>
	        		<div className={styles.InputBeforeBox}>
	        			<span className={styles.SpanL}>描述</span>
	        		</div>
	        		<TextArea rows={2} className={styles.InputS} />
	        		<div className={styles.kehuSpan}>
	        			<span>行业</span>
	        		</div>
	        		<Input className={styles.MGS} />
	        	</div>


	        	<div className={styles.title}><span>地址信息</span></div>
	        	<div className={styles.KDBox}>
	        		<strong>开单地址</strong><br />
	        		<div className={styles.KDBox}>
	        			<span>开单国家/地区</span>
	        			<Input className={styles.InputK} />
	        		</div>
	        		<div className={styles.KDBox}>
	        			<span>开单州/省</span>
	        			<Input className={styles.InputK} />
	        		</div>
	        		<div className={styles.Inputbox}>
	        		<span>开单城市</span><br />
	        		<Input className={styles.Inputbox} />
	        		</div>
	        		<div className={styles.Inputbox}>
	        		<span>开单街道</span><br />
	        		<TextArea rows={2} className={styles.Inputbox} />
	        		</div>
	        	    <div className={styles.Inputbox}>
	        		<span>开单邮政编码</span><br />
	        		<Input className={styles.Inputbox} />
	        		</div>
	        	</div>
	        	<div className={styles.KDBox}>
	        	    <strong>发货地址</strong><br />
	        		<div className={styles.KDBox}>
	        			<span>发货国家/地区</span>
	        			<Input className={styles.InputK} />
	        		</div>
	        		<div className={styles.KDBox}>
	        			<span>发货州/省</span>
	        			<Input className={styles.InputK} />
	        		</div>
	        		<div className={styles.Inputbox}>
	        		<span>发货城市</span><br />
	        		<Input className={styles.Inputbox} />
	        		</div>
	        		<div className={styles.Inputbox}>
	        		<span>发货街道</span><br />
	        		<TextArea rows={2} className={styles.Inputbox} />
	        		</div>
	        	    <div className={styles.Inputbox}>
	        		<span>发货邮政编码</span><br />
	        		<Input className={styles.Inputbox} />
	        		</div>
	        	</div>

	        </div>
	        </Modal>
      </div>
    );
  }
}

export default New;
