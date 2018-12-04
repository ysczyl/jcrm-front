import { Divider, Avatar,Upload, Button, Icon } from 'antd';
import React, { PureComponent ,Component, Suspense} from 'react';
import styles from './style.less';

var from = '111';
const user ={
    "user": [{
        "username": "qaq",
        "role":"role1",
        "position": "员工1"
    }, {
        "username": "qaq2",
        "role":"role2",
        "position": "员工12"
    }]
}
const offers ={
    "offer": [{
        "number": "000000001",
        "name":"111111",
        "data": "2018-12-4"
    }, {
        "number": "000000002",
        "name":"222222",
        "data": "2018-12-4"
    }]
}
class Uploads extends PureComponent {
  render() {
            let userxx = user.user.map((item,index)=>
                <div key={index} className={styles.roleMap}>
                    <Avatar size="small" className={styles.roleAvatar} shape="square" icon="idcard" />
                    <span style={{marginLeft:10}}>{item.username}</span><br />
                    <table style={{width:'100%'}}>
                        <tr>
                            <td>角色：</td>
                            <td>{item.role}</td>
                        </tr>
                        <tr>
                            <td>职位：</td>
                            <td>{item.position}</td>
                        </tr>
                    </table>
                </div>
        );
            let offer = offers.offer.map((item,index)=>
                <div key={index} className={styles.offerMap}>
                    <table style={{width:'100%'}}>
                        <tr>
                            <td>报价编号：</td>
                            <td>{item.number}</td>
                        </tr>
                        <tr>
                            <td>报价名称：</td>
                            <td>{item.name}</td>
                        </tr>
                        <tr>
                            <td>到期日期：</td>
                            <td>{item.data}</td>
                        </tr>
                    </table>
                </div>
        );



    return (
        <div className={styles.Box}>
            <div className={styles.repeat}>
                <Avatar  size="small" className={styles.repeatAvatar} shape="square" icon="deployment-unit" />
                <strong>市场活动影响</strong>
            </div>
            <div className={styles.role}>
                <Avatar size="small" className={styles.repeatAvatar} shape="square" icon="idcard" />
                <strong>联系人角色</strong>
                {userxx}
            </div>
            <div className={styles.role}>
                <Avatar size="small" className={styles.repeatAvatar} shape="square" icon="tag" />
                <strong>报价</strong>
                {offer}
            </div>
            <div className={styles.pass}>
                <Avatar size="small" className={styles.repeatAvatar} shape="square" icon="flag" />
                <strong>产品</strong>
            </div>
            <div className={styles.pass}>
                <Avatar size="small" className={styles.repeatAvatar} shape="square" icon="highlight" />
                <strong>备注</strong>
            </div>
            <div className={styles.up}>
                <Avatar size="small" className={styles.repeatAvatar} shape="square" icon="book" />
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
        </div>
    );
  }
}

export default Uploads;
