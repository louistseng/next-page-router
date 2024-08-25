import Link from 'next/link';

const style = {
    header: {
        position: "relative",
        padding: "1% 0",
        backgroundColor: "#445E93",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        fontSize: "1.5rem"
    },
    headerUl: {
        display: "flex",
    },
    headerLi: {
        margin: "0 20px",
    }
}

export default function MainHeader() {
    return (
        <header style={style.header}>
            <div>
                <Link href="/">Logo</Link>
            </div>
            <nav>
                <ul style={style.headerUl}>
                    <li style={style.headerLi}>
                        <Link href="/bicycles">全部商品</Link>
                    </li>
                    <li style={style.headerLi}>
                        <Link href="/users">會員中心</Link>
                    </li >
                </ul>
            </nav>
        </header>
    )
}