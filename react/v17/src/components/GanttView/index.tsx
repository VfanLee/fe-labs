import { useEffect, useRef } from 'react'
import { Gantt, GanttConstructorOptions } from '@visactor/vtable-gantt'
import styles from './style/index.module.less'

interface IProps {
  options: GanttConstructorOptions
}

const View = ({ options }: IProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const ganttInsRef = useRef<Gantt | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) {
      return
    }
    if (ganttInsRef.current) {
      ganttInsRef.current.release()
    }
    ganttInsRef.current = new Gantt(container, options)

    return () => {
      if (ganttInsRef.current) {
        ganttInsRef.current.release()
      }
    }
  }, [options])

  return <div className={styles.container} ref={containerRef} />
}

export default View
