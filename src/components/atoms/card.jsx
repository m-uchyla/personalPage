
export default function Card(props){
    
    return (
        <div className={`${props.className}`}>
            <div className={`sm:p-10 p-6 bg-twhite rounded-[25px] shadow-2xl flex-1`}>
                {props.children}
            </div>
        </div>
    )
}