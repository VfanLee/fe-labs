import styles from './App.module.less'

// import EditableTable from './components/EditTable'
// import EditExpandTable from './components/EditExpandTable'
import GanttView from './components/GanttView'
import type { GanttConstructorOptions } from '@visactor/vtable-gantt'
import { VRender } from '@visactor/vtable-gantt'
import moment from 'moment'

const records = [
  {
    id: 262,
    projectId: '1359551747630182400',
    name: '@666@',
    duration: '10',
    planStartTime: '2025-04-11',
    planEndTime: '2025-04-20',
    actualStartTime: '2025-04-17',
    actualEndTime: '2025-04-17',
    status: '已审核',
    version: '1.0',
    remark: '111',
    createBy: '1224280861281619968',
    createTime: '2025-04-17 22:53:26',
    updateBy: null,
    updateTime: '2025-04-19 22:40:21',
    orderPriority: 1,
    minDate: '2025-04-11',
    maxDate: '2025-04-20',
    phases: [
      {
        start: '2025-04-11',
        end: '2025-04-20',
      },
      {
        start: '2025-04-17',
        end: '2025-04-17',
      },
    ],
  },
  {
    id: 273,
    projectId: '1359551747630182400',
    name: '@222333@',
    duration: '10',
    planStartTime: '2025-04-21',
    planEndTime: '2025-04-30',
    actualStartTime: '2025-04-01',
    actualEndTime: '2025-04-03',
    status: '已审核',
    version: '1.0',
    remark: '22222',
    createBy: '1224280861281619968',
    createTime: '2025-04-17 22:53:26',
    updateBy: null,
    updateTime: '2025-04-19 22:40:21',
    orderPriority: 1,
    minDate: '2025-04-01',
    maxDate: '2025-04-30',
    phases: [
      {
        start: '2025-04-21',
        end: '2025-04-30',
      },
      {
        start: '2025-04-01',
        end: '2025-04-03',
      },
    ],
  },
  {
    id: 278,
    projectId: '1359551747630182400',
    name: 'aaa11',
    duration: '9',
    planStartTime: '2025-04-01',
    planEndTime: '2025-04-09',
    actualStartTime: '2025-04-02',
    actualEndTime: '2025-04-08',
    status: '',
    version: '1.0',
    remark: 'AAA',
    createBy: '1224280861281619968',
    createTime: '2025-04-17 22:53:26',
    updateBy: null,
    updateTime: '2025-04-19 22:40:21',
    orderPriority: 1,
    minDate: '2025-04-01',
    maxDate: '2025-04-09',
    phases: [
      {
        start: '2025-04-01',
        end: '2025-04-09',
      },
      {
        start: '2025-04-02',
        end: '2025-04-08',
      },
    ],
  },
  {
    id: 286,
    projectId: '1359551747630182400',
    name: 'bbb',
    duration: '91',
    planStartTime: '2025-04-01',
    planEndTime: '2025-06-30',
    actualStartTime: '2025-04-01',
    actualEndTime: '2025-06-30',
    status: null,
    version: null,
    remark: '',
    createBy: '1224280861281619968',
    createTime: null,
    updateBy: null,
    updateTime: '2025-04-19 22:40:21',
    orderPriority: 1,
    minDate: '2025-04-01',
    maxDate: '2025-06-30',
    phases: [
      {
        start: '2025-04-01',
        end: '2025-06-30',
      },
      {
        start: '2025-04-01',
        end: '2025-06-30',
      },
    ],
  },
  {
    id: 287,
    projectId: '1359551747630182400',
    name: 'ccc',
    duration: '1',
    planStartTime: '2025-04-01',
    planEndTime: '2025-04-01',
    actualStartTime: '2025-04-01',
    actualEndTime: '2025-04-01',
    status: null,
    version: null,
    remark: '',
    createBy: '1224280861281619968',
    createTime: null,
    updateBy: null,
    updateTime: '2025-04-19 22:40:21',
    orderPriority: 1,
    minDate: '2025-03-31',
    maxDate: '2025-04-02',
    phases: [
      {
        start: '2025-04-01',
        end: '2025-04-01',
      },
      {
        start: '2025-04-01',
        end: '2025-04-01',
      },
    ],
  },
  {
    id: 288,
    projectId: '1359551747630182400',
    name: 'ddd',
    duration: '1',
    planStartTime: '2025-04-01',
    planEndTime: '2025-04-01',
    actualStartTime: '2025-04-03',
    actualEndTime: '2025-04-03',
    status: null,
    version: null,
    remark: '',
    createBy: '1224280861281619968',
    createTime: null,
    updateBy: null,
    updateTime: '2025-04-19 22:40:21',
    orderPriority: 1,
    minDate: '2025-04-01',
    maxDate: '2025-04-03',
    phases: [
      {
        start: '2025-04-01',
        end: '2025-04-01',
      },
      {
        start: '2025-04-03',
        end: '2025-04-03',
      },
    ],
  },
]
const columns = [
  {
    field: 'name',
    tree: true,
    title: '单位工程',
    width: 200,
    align: 'center',
    resize: false,
  },
  {
    field: 'duration',
    title: '工期',
    align: 'center',
    width: 80,
    resize: false,
  },
  {
    field: 'planStartTime',
    title: '开始日期',
    width: 110,
    align: 'center',
    resize: false,
  },
  {
    field: 'planEndTime',
    title: '结束日期',
    width: 110,
    align: 'center',
    resize: false,
  },
  {
    field: 'actualStartTime',
    title: '实际开始',
    align: 'center',
    width: 110,
    resize: false,
  },
  {
    field: 'actualEndTime',
    title: '实际结束',
    align: 'center',
    width: 110,
    resize: false,
    disableColumnResize: true,
  },
]
const option: GanttConstructorOptions = {
  overscrollBehavior: 'none',
  records,
  taskListTable: {
    columns,
    tableWidth: 'auto',
    minTableWidth: 80,
    theme: {
      headerStyle: {
        borderColor: 'rgba(0, 0, 0, 0.06)',
        borderLineWidth: 1,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        bgColor: '#f5f5f5',
      },
      bodyStyle: {
        borderColor: 'rgba(0, 0, 0, 0.06)',
        borderLineWidth: 1,
        fontSize: 14,
        color: '#4D4D4D',
        bgColor: '#FFF',
      },
    },
  },
  frame: {
    outerFrameStyle: {
      borderColor: '#e1e4e8',
      borderLineWidth: 1,
      cornerRadius: 2,
    },
    verticalSplitLine: {
      lineColor: 'rgba(0, 0, 0, 0.06)',
      lineWidth: 3,
    },
    horizontalSplitLine: {
      lineWidth: 0,
    },
    verticalSplitLineMoveable: true,
    verticalSplitLineHighlight: {
      lineColor: 'rgba(0, 0, 0, 0.06)',
      lineWidth: 3,
    },
  },
  grid: {
    verticalLine: {
      lineWidth: 1,
      lineColor: '#e1e4e8',
    },
    horizontalLine: {
      lineWidth: 1,
      lineColor: '#e1e4e8',
    },
  },
  headerRowHeight: 28,
  rowHeight: 56,
  taskBar: {
    selectable: false,
    resizable: false,
    moveable: false,
    scheduleCreatable: false,
    startDateField: 'minDate',
    endDateField: 'maxDate',
    hoverBarStyle: {
      barOverlayColor: 'rgba(99, 144, 0, 0.4)',
    },
    labelText: '{text} {progress}%',
    labelTextStyle: {
      fontFamily: 'Arial',
      fontSize: 16,
      textAlign: 'left',
      textOverflow: 'ellipsis',
    },
    customLayout: (args) => {
      const { width, height, startDate, endDate, taskRecord } = args
      const taskBarcontainer = new VRender.Group({
        y: 0,
        height: height,
        width: width,
      })
      const color = ['blue', 'green']
      for (let i = 0; i < taskRecord.phases.length; i++) {
        const phase = taskRecord.phases[i]
        if (!phase.start || !phase.end) break
        const startM = moment(phase.start)
        const endM = moment(phase.end)
        const totalDuration = Math.abs(moment(endDate).diff(startDate, 'day')) * 2

        const startX =
          (Math.abs(startM.diff(startDate, 'day')) / totalDuration) * width
            ? (Math.abs(startM.diff(startDate, 'day')) / totalDuration) * width
            : 0
        const endX =
          ((totalDuration - Math.abs(endM.diff(endDate, 'day'))) / totalDuration) * width
            ? ((totalDuration - Math.abs(endM.diff(endDate, 'day'))) / totalDuration) * width
            : 10
        const barWidth = Math.abs(endX - startX) ? Math.abs(endX - startX) : 10

        console.log('@@@', startX, barWidth)

        const bar = new VRender.Rect({
          x: startX,
          y: i * 20 + 8,
          width: barWidth,
          height: 10,
          fill: color[i],
          // cornerRadius: 10,
        })
        taskBarcontainer.add(bar)
      }

      return {
        rootContainer: taskBarcontainer,
        renderDefaultBar: false,
        renderDefaultText: false,
      }
    },
  },
  timelineHeader: {
    colWidth: 200,
    backgroundColor: '#f5f5f5',
    horizontalLine: {
      lineWidth: 1,
      lineColor: 'rgba(0, 0, 0, 0.06)',
    },
    verticalLine: {
      lineWidth: 1,
      lineColor: 'rgba(0, 0, 0, 0.06)',
    },
    scales: [
      {
        unit: 'month',
        step: 1,
        style: {
          fontSize: 14,
          fontWeight: 'bold',
          color: 'black',
          textAlign: 'center',
          textBaseline: 'middle',
          textStick: true,
        },
        format(date) {
          const { startDate } = date
          const year = startDate.getFullYear()
          const month = startDate.getMonth() + 1
          return `${year}/${String(month).padStart(2, '0')}月`
        },
      },
      {
        unit: 'month',
        step: 1,
        customLayout: (args) => {
          const { startDate, width, height } = args
          const day = moment(startDate).daysInMonth()

          const container = new VRender.Group({
            height: height,
            width: width,
            display: 'flex',
            flexWrap: 'nowrap',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          })

          const length1 = 10 / day
          const length2 = (day - 20) / day
          const groupConfig = {
            height: height,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          } as const
          const container1 = new VRender.Group({
            ...groupConfig,
            width: length1 * width,
          })
          const container2 = new VRender.Group({
            ...groupConfig,
            width: length1 * width,
          })
          const container3 = new VRender.Group({
            ...groupConfig,
            width: length2 * width,
          })

          const textConfig = {
            fontSize: 14,
            fontWeight: 'bold',
            fill: 'black',
            textAlign: 'center',
            textBaseline: 'middle',
          } as const
          const textContainer1 = new VRender.Text({
            ...textConfig,
            text: '10',
          })
          const textContainer2 = new VRender.Text({
            ...textConfig,
            text: '20',
          })
          const textContainere = new VRender.Text({
            ...textConfig,
            text: `${moment(startDate).daysInMonth()}`,
          })
          container1.add(textContainer1)
          container2.add(textContainer2)
          container3.add(textContainere)

          container.add(container1)
          container.add(container2)
          container.add(container3)

          return {
            rootContainer: container,
            renderDefaultText: false,
          }
        },
      },
    ],
  },
  rowSeriesNumber: {
    title: '序号',
    width: 80,
    dragOrder: false,
    headerStyle: {
      bgColor: '#f5f5f5',
      borderColor: 'rgba(0, 0, 0, 0.06)',
    },
    style: {
      borderColor: 'rgba(0, 0, 0, 0.06)',
    },
  },
  scrollStyle: {
    scrollRailColor: 'rgba(246, 246, 246, 0.5)',
    visible: 'scrolling',
    width: 8,
    scrollSliderCornerRadius: 2,
    scrollSliderColor: '#5cb85c',
  },
}

const App = () => {
  return (
    // <EditableTable />
    // <EditExpandTable />
    <div className={styles.ganttExample}>
      <GanttView options={option} />
    </div>
  )
}

export default App
