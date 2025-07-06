import styles from './index.less';
import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import { DownOutlined, UpOutlined, SearchOutlined, ReloadOutlined } from '@ant-design/icons';

class SearchWrap extends Component {
  static defaultProps = {
    list: [],
    num: 3,
  };

  state = {
    show: false,
  };

  render() {
    const { list, onSearch, onReset, num } = this.props;
    const { show } = this.state;

    const colSpan = Math.ceil(24 / num);

    return (
      <Row className={styles.searchWrap} gutter={16} style={{ height: show ? 'auto' : '40px' }}>
        <Col span={18}>
          <Row className="searchList" gutter={[16, 16]}>
            {list.map(e => {
              return (
                <Col span={colSpan} key={e.field}>
                  <div className="searchLabel" style={{ width: 80 }} {...e.labelProps}>
                    {e.label}：
                  </div>
                  {e.control}
                </Col>
              );
            })}
          </Row>
        </Col>
        <Col span={6} style={{ textAlign: 'right' }}>
          <Button
            type="primary"
            icon={<SearchOutlined />}
            onClick={() => {
              onSearch && onSearch();
            }}
          >
            查询
          </Button>
          <Button
            icon={<ReloadOutlined />}
            onClick={() => {
              onReset && onReset();
            }}
          >
            重置
          </Button>
          {list.length > num && (
            <Button
              type="link"
              icon={show ? <UpOutlined /> : <DownOutlined />}
              onClick={() => {
                this.setState({ show: !show });
              }}
            >
              {show ? '收起' : '展开'}
            </Button>
          )}
        </Col>
      </Row>
    );
  }
}

export default SearchWrap;
