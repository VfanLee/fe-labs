import React from 'react';
import { Table, Pagination, Button, Tooltip } from 'antd';
import styles from './index.module.less';
import _ from 'lodash';
import ResizeableTitle from '@/components/common/ResizeableTitle';

const empty = () => {};
const noop = () => {};

export default class Control extends Component {
  width = 0;
  state = {
    cols: [],
  };
  componentDidMount = () => {
    const { drag } = this.props;
    if (drag) {
      const { columns = [] } = this.props.table;
      const clos = [];
      columns.forEach(i => {
        if (!i.width) {
          clos.push({
            width: 100,
            ...i,
          });
        } else {
          clos.push(i);
        }
      });
      this.setState({ cols: clos });
    }
  };
  getBtns = btns => {
    return (
      <div style={{ marginBottom: 8 }}>
        {btns.map(({ name, alias, type, icon, handleClick = noop, others = {} }, i) => {
          if (name) {
            return (
              <Button
                style={{ marginRight: 8 }}
                key={i}
                type={type}
                icon={icon}
                onClick={() => handleClick(name)}
                {...others}
              >
                {alias}
              </Button>
            );
          } else if (type === 'right') {
            return (
              <span key={alias} style={{ float: 'right', marginTop: 6 }}>
                {alias}
              </span>
            );
          } else if (type === 'hint') {
            return <span key={alias}>{alias}</span>;
          } else {
            return null;
          }
        })}
      </div>
    );
  };
  getPagination = page => {
    const {
      current = 1,
      pageSize = 20,
      total = 0,
      onChange = empty,
      setSize = empty,
      sizeList = ['20', '50', '100', '200'],
    } = page;
    const onPageChange = (ipage, ipageSize) => {
      if (ipageSize !== pageSize) {
        return;
      }
      onChange(ipage, ipageSize);
    };
    return (
      <Pagination
        showSizeChanger
        showQuickJumper
        size="small"
        style={{ float: 'right', marginTop: 4 }}
        current={current}
        pageSize={pageSize}
        total={total}
        onChange={onPageChange}
        onShowSizeChange={setSize}
        pageSizeOptions={sizeList}
        showTotal={() =>
          `显示 ${Math.min((current - 1) * pageSize + 1, total)} 到 ${Math.min(
            total,
            current * pageSize
          )}, 共 ${total} 记录 `
        }
      />
    );
  };

  /**
   * 通过dataSource计算表头宽度
   */
  calculateByDatasource = () => {
    const { dataSource = [], columns = [] } = this.props.table;
    const data = [];
    this.width = 0;
    columns.forEach(element => {
      let item = {
        width: this.getStringWidth(element.title),
        ...element,
      };
      dataSource.forEach(ele => {
        let colWidth = 0;
        if (typeof element.width === 'string') {
          colWidth = Number(element.width.replace('px', ''));
        } else {
          colWidth = element.width;
        }
        const width = colWidth || this.getStringWidth(ele[element.dataIndex]);
        if (item.width < width) {
          if (width > 200) {
            item = {
              ...element,
              width: 200,
              onCell: () => {
                return {
                  style: {
                    maxWidth: 200,
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    cursor: 'pointer',
                  },
                };
              },
              render: (text, row, index) => (
                <Tooltip placement="topLeft" title={element.noTips ? '' : text}>
                  {element.render ? element.render(text, row, index) : text}
                </Tooltip>
              ),
            };
          } else {
            item.width = width;
          }
        }
      });
      if (typeof item.width === 'string') {
        this.width = Number(item.width.replace('px', ''));
      } else {
        this.width += item.width;
      }
      data.push(item);
    });
    return data;
  };

  /**
   * 计算字符的长度
   * @param {string} val 字符
   */
  getStringWidth = val => {
    const spanEle = document.createElement('span');
    spanEle.innerHTML = val;
    document.body.appendChild(spanEle);
    const width = spanEle.offsetWidth;
    document.body.removeChild(spanEle);
    return width + 18;
  };
  handleResize = (tempCols, colKey, width) => {
    tempCols.forEach(item => {
      if (item.key === colKey) {
        Object.assign(item, {
          ...item,
          width: width,
        });
      }
    });
  };
  colWithResize = cols => {
    cols.forEach(col => {
      Object.assign(col, {
        ...col,
        onHeaderCell: column => {
          return {
            width: column.width,
            onResize: (e, { size }) => {
              const tempCols = _.cloneDeep(cols);
              this.handleResize(tempCols, column.key, size.width);
              this.setState({ cols: tempCols });
            },
          };
        },
      });
    });
  };
  getTable = table => {
    const { cols } = this.state;
    const { rowKey = 'gid', dataSource = [], props = {} } = table;
    const { btns, drag } = this.props;
    let components = '';
    const col = this.calculateByDatasource();
    if (drag === true) {
      // 计算宽度，同时居中
      this.colWithResize(cols);
      components = {
        header: {
          cell: ResizeableTitle,
        },
      };
    }
    const data = {
      rowKey,
      dataSource,
      size: 'small',
      bordered: true,
      pagination: false,
      className: styles['table-self-def'],
      ...props,
      scroll: { x: this.width, y: (props.scroll && props.scroll.y) || `calc(100% - 43px)` },
    };
    if (drag) {
      return (
        <Table
          columns={cols}
          components={components}
          style={{ height: `calc(100% - ${btns && btns.length > 0 ? '70' : '32'}px)` }}
          {...data}
          rowClassName={(record, index) => {
            return index % 2 === 0 ? styles.odd : styles.even;
          }}
        />
      );
    } else {
      return (
        <Table
          columns={col}
          style={{ height: `calc(100% - ${btns && btns.length > 0 ? '70' : '32'}px)` }}
          {...data}
          rowClassName={(record, index) => {
            return index % 2 === 0 ? styles.odd : styles.even;
          }}
        />
      );
    }
  };

  render() {
    const { btns, table, page } = this.props;
    return (
      <div className={styles['table-content']}>
        {btns && btns.length > 0 ? this.getBtns(btns) : null}
        {this.getTable(table)}
        {page ? this.getPagination(page) : null}
      </div>
    );
  }
}
