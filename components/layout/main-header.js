import Link from 'next/link';
import { CommentOutlined, ProductOutlined, UserOutlined } from '@ant-design/icons';
export default function MainHeader() {
    return (
        <>
            <header className="border-2 border-slate-500 border-solid flex flex-1 justify-around items-center shadow rounded-xl p-4 m-8">
                <div>
                    <CommentOutlined />
                    <Link href="/">Logo</Link>
                </div>
                <nav>
                    <ul className="flex">
                        <li className="mx-4">
                            <ProductOutlined />
                            <Link href="/bicycles">全部話題</Link>
                        </li>
                        <li className="mx-4">
                            <UserOutlined />
                            <Link href="/users">會員中心</Link>
                        </li >
                    </ul>
                </nav>
            </header>
        </>
    )
}