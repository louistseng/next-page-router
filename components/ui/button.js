import Link from 'next/link';

export default function Button(props) {
    if (props.link) {
        return (
            <Link href={props.link}>
                <a className="w-full text-center border-2 border-slate-200 border-solid rounded-xl shadow float-left p-2 hover:bg-slate-100 hover:text-slate-900">{props.children}</a>
            </Link>
        )
    }
    return <button className="border-2 border-slate-200 border-solid rounded-xl shadow float-right p-2 hover:bg-slate-100 hover:text-slate-900" onClick={props.onclick}>{props.children}</button>
}