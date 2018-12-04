import React, { PureComponent} from 'react';
import moment from 'moment';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import 'moment/locale/zh-cn';
import { Tabs, Icon ,Input ,Button,Divider,Avatar,Collapse,DatePicker} from 'antd';
import styles from './style.less';

class Selects extends PureComponent {
  render() {
    return (
        <select className={styles.Select}>
          <option>上午12:00</option>
          <option>上午1:00</option>
          <option>上午2:00</option>
          <option>上午3:00</option>
          <option>上午4:00</option>
          <option>上午5:00</option>
          <option>上午6:00</option>
          <option>上午7:00</option>
          <option>上午8:00</option>
          <option>上午9:00</option>
          <option>上午10:00</option>
          <option>上午11:00</option>
          <option>下午12:00</option>
          <option>下午1:00</option>
          <option>下午2:00</option>
          <option>下午3:00</option>
          <option>下午4:00</option>
          <option>下午5:00</option>
          <option>下午6:00</option>
          <option>下午7:00</option>
          <option>下午8:00</option>
          <option>下午9:00</option>
          <option>下午10:00</option>
          <option>下午11:00</option>
        </select>
    );
  }
}

export default Selects;
