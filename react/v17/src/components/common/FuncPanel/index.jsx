import * as React from 'react';
import { ConfigProvider, Spin } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

import styles from './index.module.less';

export default class FuncPanel extends React.Component {
  render() {
    const {
      loading = false,
      loadmsg = '加载中...',
      headerPanel = null,
      bodyPanel = null,
      containerStyle = {},
      headerStyle = {},
      bodyStyle = {},
    } = this.props;
    return (
      <ConfigProvider locale={zhCN}>
        <div className={styles.container} style={containerStyle}>
          <Spin spinning={loading} tip={loadmsg} style={{ height: '100%' }}>
            <div className={styles.header} style={headerStyle}>
              {headerPanel}
            </div>
            <div className={styles.body} style={bodyStyle}>
              {bodyPanel}
            </div>
          </Spin>
        </div>
      </ConfigProvider>
    );
  }
}
