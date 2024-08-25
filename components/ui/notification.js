
import classes from './notification.module.css';
import { useContext } from 'react';
import NotificationContext from '../../store/notification-context';

function Notification(props) {
    const { title, message, status } = props;
    const notificationCtx = useContext(NotificationContext);

    let statusCalss = '';

    if (status === 'success') {
        statusCalss = classes.success;
    }
    if (status === 'error') {
        statusCalss = classes.error;
    }
    if (status === 'pedding') {
        statusCalss = classes.pedding;
    }
    const activeClasses = `${classes.notification} ${statusCalss}`
    return (
        <div className={activeClasses} onClick={notificationCtx.hideNotificatoin}>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    )
}
export default Notification;