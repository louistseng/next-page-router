import { createContext, useEffect, useState } from 'react';

const NotificationContext = createContext({
    notification: null,
    showNotification: function () { },
    hideNotificatoin: function () { }
})

export function NotificationContextProvider(props) {
    const [activeNotification, setActiveNotification] = useState();

    useEffect(() => {
        if (activeNotification &&
            activeNotification?.status === "success" ||
            activeNotification?.status === "error") {
            const timer = setTimeout(() => {
                setActiveNotification(null);
            }, 3000)
            return () => {
                clearTimeout(timer)
            }
        }
    }, [activeNotification])

    function showNotificationHandler(notificationData) {
        setActiveNotification(notificationData);
    }
    function hideNotificatoinHandler() {
        setActiveNotification(null);
    }

    const context = {
        notification: activeNotification,
        showNotification: showNotificationHandler,
        hideNotificatoin: hideNotificatoinHandler,
    }
    return (
        <NotificationContext.Provider value={context}>
            {props.children}
        </NotificationContext.Provider>
    )
}
export default NotificationContext;