import { useContext } from 'react'
import { DataContext } from '../../App'
import styles from './ComponentB1.module.css'

function ComponentB1() {
    let data = useContext(DataContext)
  return (
    <div className={styles.container}>{data}</div>
  )
}

export default ComponentB1