import React, { PureComponent ,Component, Suspense} from 'react';
import { connect } from 'dva';
import PageLoading from '@/components/PageLoading';
import Uploads from '@/components/CRMPotential/Upload/upload.js';
import { formatMessage, FormattedMessage } from 'umi/locale';
import TopAffix from './topAffix/index.js';
import {
  Form,
  Input,
  DatePicker,
  Select,
  Button,
  Card,
  InputNumber,
  Radio,
  Icon,
  Tooltip,
} from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import styles from './style.less';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const StepBox = React.lazy(() => import('./Step/StepBox'));
const Activity = React.lazy(() => import('./StepForm/Activity'));
@connect(({ chart, loading }) => ({
  chart,
  loading: loading.effects['chart/fetch'],
}))
class AdvancefProfile extends PureComponent {
  constructor(props){
    super();
    this.state={
      name:'1',
    }
  }
  componentWillMount(){
   this.setState({
              name: this.props.location.state.name //把父组件中的parentText替换为子组件传递的值
          },() =>{
             console.log(this.state.name);//setState是异步操作，但是我们可以在它的回调函数里面进行操作
          });
  }
  render() {
    const { chart, loading } = this.props;
        const {
      visitData,
    } = chart;
    return (
      <GridContent>
        <Suspense fallback={<PageLoading />}>
          <TopAffix name={this.state.name} loading={loading} visitData={visitData} />
        </Suspense>
        <Suspense fallback={<PageLoading />}>
          <StepBox loading={loading} visitData={visitData} />
        </Suspense>
        <Suspense fallback={<PageLoading />}>
          <Activity loading={loading} visitData={visitData} />
        </Suspense>
        <Suspense fallback={<PageLoading />}>
          <Uploads loading={loading} visitData={visitData} />
        </Suspense>
      </GridContent>
    );
  }
}

export default AdvancefProfile;
