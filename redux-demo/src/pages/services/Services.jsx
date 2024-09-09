import { useSelector } from 'react-redux'
import Navigation from '../../components/navigation/Navigation'
import styles from './Services.module.css'

function Services() {

    let username = useSelector((state)=>state.user.value)

    return (
        <>
            <Navigation />
            <div className={styles.container}>Services {username}</div>
        </>
    )
}

export default Services