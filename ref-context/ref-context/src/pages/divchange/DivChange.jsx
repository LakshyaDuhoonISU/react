import { useRef } from 'react'
import styles from './DivChange.module.css'

function DivChange() {
    let col = useRef();

    function changeColour() {
        col.current.style.backgroundColor = 'blue';
    }

    return (
        <div className={styles.container}>
            <div className={styles.div1} ref={col}>Div 1</div>
            <div className={styles.div2} onClick={changeColour}>Div 2</div>
        </div>
    )
}

export default DivChange