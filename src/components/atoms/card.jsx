
export default function Card(props){
    
    return (
        <div className={`${props.className} relative`}>
            <div className={`sm:p-10 p-6 bg-twhite rounded-[25px]  flex-1 z-[10] w-full absolute top-0 left-0`}>
                {props.children}
            </div>
            <div className={`sm:p-10 p-6 bg-[#e1e6ec] rounded-[25px] flex-1 shadow-xl absolute w-full top-[6px] left-0 z-[1]`}>
                {props.children}
            </div>
        </div>
    )
}