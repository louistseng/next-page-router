import { createContext, useEffect, useState } from 'react';

const NotificationContext = createContext({
    isLogIn: false,
    userDetail: null,
    getUserData: function () { },
    notification: null,
    showNotification: function () { },
    hideNotificatoin: function () { },
})

export function NotificationContextProvider(props) {
    const [activeNotification, setActiveNotification] = useState();
    const [isLogin, setIsLogin] = useState(false);
    const [userDetail, setUserDetail] = useState();

    useEffect(() => {
        if (activeNotification?.status === "success") {
            setIsLogin(true);
        }
        if (activeNotification &&
            activeNotification?.status === "success" ||
            activeNotification?.status === "error") {
            const timer = setTimeout(() => {
                setActiveNotification(null);
            }, 5000)
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
    function getUserDataHandler(data) {
        setUserDetail(data)
    }

    const context = {
        isLogIn: isLogin,
        userDetail: userDetail,
        getUserData: getUserDataHandler,
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