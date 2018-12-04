import { Divider, Avatar,Upload, Button, Icon } from 'antd';
import React, { PureComponent ,Component, Suspense} from 'react';
import styles from './style.less';

var from = '111';
class Uploads extends PureComponent {

  render() {
    return (
    	<div className={styles.Box}>
            <div className={styles.repeat}>
                <Avatar className={styles.repeatAvatar} shape="square" icon="up" />
                <strong>我们未找到此潜在客户的任何潜在重复项。</strong>
            </div>
            <div className={styles.Relevant}>
                <span className={styles.RelevantSpan}>相关列表快速链接</span><br />
                <Avatar style={{marginLeft:10}} size="small" shape="square" icon="snippets" />
                <strong className={styles.wenjianStrong}>文件</strong>
                <Avatar style={{marginLeft:100,backgroundColor:' rgb(242, 207, 91)'}} size="small" shape="square" icon="form" />
                <strong className={styles.wenjianStrong}>文件</strong>
            </div>
            <div className={styles.up}>
                <Avatar className={styles.repeatAvatar} shape="square" icon="up" />
                <strong>文件</strong>
                <div className={styles.upDIV}>
                    <div className={styles.uploadDIV}>
                        <Upload action="" directory>
                            <Button>
                              <Icon type="upload" /> Upload Directory
                            </Button>
                        </Upload>
                    </div>
                </div>
            </div>
            <div className={styles.pass}>
                <Avatar className={styles.repeatAvatar} shape="square" icon="up" />
                <strong>备注</strong>
            </div>
    	</div>
    );
  }
}

export default Uploads;
