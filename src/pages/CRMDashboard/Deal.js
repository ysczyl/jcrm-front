import React from "react";
import styles from './Analysis.less';
import DealSelect from '@/components/CRMTask/DealSelect.js';
import {Input} from 'antd';
import Link from 'umi/link';
const jsons = {
  "Event": [{
      "theme": "主题",
      "time": "下午2:00",
      "content": "contentcontentcontentcontentcontent",
      "end": "2018-11-28下午3:00"

    },
    {
      "theme": "主题2",
      "time": "下午2:00",
      "content": "contentcontentcontentcontentcontent",
      "end": "2018-11-28下午3:00"

    },
    {
      "theme": "主题3",
      "time": "下午2:00",
      "content": "contentcontentcontentcontent",
      "end": "2018-11-28下午3:00"

    },
    {
      "theme": "主题3",
      "time": "下午2:00",
      "content": "contentcontentcontentcontentcontent",
      "end": "2018-11-28下午3:00"

    }
  ]
}
class Deal extends React.Component {
  render() {
    let historys = jsons.Event.map((item,index)=>
          <div key={index}>
            <span className={styles.dealTheme}>{item.theme}</span>
            <span className={styles.dealTime}>{item.time}</span><br />
            <span className={styles.dealName}>{item.content}</span><br />
          </div>
            );
    return (
      <div className={styles.deal}>
        <DealSelect />
        <div className={styles.dealJSON}>
        {historys}
        </div>
        <div className={styles.TodayEventhr}></div>
        <span className={styles.dealAll}><Link to={{pathname:"/result/success",state:{name:"text"}}}>查看全部</Link></span>
      </div>
    );
  }
}

export default Deal;
