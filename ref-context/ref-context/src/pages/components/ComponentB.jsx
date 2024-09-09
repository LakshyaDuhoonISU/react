import styles from './ComponentB.module.css'
import ComponentB1 from './ComponentB1'

function ComponentB() {
    return (
        <div className={styles.container}><ComponentB1 /></div>
    )
}

export default ComponentB