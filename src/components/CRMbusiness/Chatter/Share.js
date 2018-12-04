import React, { PureComponent} from 'react';
import { Input ,Button} from 'antd';
import styles from './style.less';


var share = "";
function onClick() {
	share = document.getElementById('share').value;
}

class Share extends PureComponent {
  render() {
    
    return (
    	<div className={styles.Share}>
    		<Input id='share' className={styles.ShareInput} defaultValue="共享更新..."></Input>
    		<Button type="primary" className={styles.ShareBtn} onClick={onClick}>共享</Button>
    	</div>
    );
  }
}

export default Share;
