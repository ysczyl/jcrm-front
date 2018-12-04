import React from "react";
import styles from './Analysis.less';
import WorkSelect from '@/components/CRMTask/WorkSelect';
import {Input} from 'antd';
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
class AllWork extends React.Component {
  render() {
    let historys = jsons.Event.map((item,index)=>
          <div key={index}>
            <span className={styles.allWorkTheme}>{item.theme}</span>
            <span className={styles.allWorkTime}>{item.time}</span><br />
            <span className={styles.allWorkName}>{item.content}</span><br />
          </div>
            );
    return (
      <div className={styles.AllWork}>
        <WorkSelect />
        <div className={styles.allWorkJSON}>
        {historys}
        </div>
        <div className={styles.TodayEventhr}></div>
        <span className={styles.allWorkAll}>查看全部</span>
      </div>
    );
  }
}

export default AllWork;
