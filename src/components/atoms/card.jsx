
export default function Card(props){
    
    return (
        <div className={` relative mt-[6px]`}>
            <div className={` ${props.className} sm:p-10 p-6 bg-twhite rounded-[25px] absolute w-full top-[-6px] left-0 flex-1 z-[10]`}>
                {props.children}
            </div>
            <div className={` ${props.className} sm:p-10 p-6 bg-[#e1e6ec] rounded-[25px] flex-1 shadow-xl  z-[1]`}>
                {props.children}
            </div>
        </div>
    )
}