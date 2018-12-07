import React from "react";
import styles from './Analysis.less';

const jsons = {
    "Event": [
        {
            "theme": "主题",
            "time": "下午2:00",
            "content": "contentcontentcontentcontentcontent",
            "end": "2018-11-28下午3:00"
            
        },
        {
            "theme": "主题2",
            "time": "下午2:00",
            "content": "yscontentcontentcontentcontentc",
            "end": "2018-11-28下午3:00"
            
        },
        {
            "theme": "主题3",
            "time": "下午2:00",
            "content": "contentcontentcontent",
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
class TodayEvent extends React.Component {
  render() {
      let Events = jsons.Event.map((item,index)=>
          <div key={index}>
            <span className={styles.TodayEventTime}>{item.time}</span>
            <span className={styles.TodayEventTheme}>{item.theme}</span><br />
            <span className={styles.TodayEventContent}>{item.content}</span><br />
            <span className={styles.TodayEventEnd}>{item.end}</span><br />
          </div>
            );
    return (
      <div className={styles.TodayEvent}>
          <strong>今日事件</strong><br />
          <div className={styles.EventsBOX}>
            {Events}
          </div>
          <div className={styles.TodayEventhr}></div>
            <span className={styles.TodayEventRL}>日历</span>
      </div>
    );
  }
}

export default TodayEvent;
