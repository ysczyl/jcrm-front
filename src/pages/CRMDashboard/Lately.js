import React from "react";
import styles from './Analysis.less';
import LatelyNews from '@/components/CRMTask/LatelyNews.js';

class Lately extends React.Component {
  render() {
    return (
      <div className={styles.lately}>
          <strong className={styles.latelySpan}>最近记录</strong>
          <LatelyNews />
          <div className={styles.TodayEventhr}></div>
               <span className={styles.allWorkAll}>查看全部</span>
      </div>
    );
  }
}

export default Lately;
