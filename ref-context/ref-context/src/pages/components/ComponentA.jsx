import { useContext } from 'react'
import { DataContext } from '../../App'
import styles from './ComponentA.module.css'

function ComponentA() {
    let data = useContext(DataContext)
  return (
    <div className={styles.container}>{data}</div>
  )
}

export default ComponentA