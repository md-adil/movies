interface IProps {
    children: any;
}
export default function Layout({children}: IProps) {
    return (
        <div>
            {children}
        </div>
    )
}