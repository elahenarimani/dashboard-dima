const Header:React.FC = ()=>{
    return(
        <div className="h-[50px]  bg-white col-span-2 flex justify-between items-center px-10">
            <div className="bg-red-400">
             icon
            </div>
            <div className=" flex justify-between items-center gap-2">
                <p>notif</p>
                <p>ax</p>
                <div className="flex flex-col justify-between">
                    <p className="font-bold text-sm text-(--color-text)">Mony roy</p>
                    <p className="font-semibold text-xs text-(--color-secondary)">Admin</p>
                </div>
                <div>svg</div>
            </div>
        </div>
    )
}
export default Header