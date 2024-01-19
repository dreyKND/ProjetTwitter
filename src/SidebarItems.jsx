function SidebarItems(props) {
    return (
        <div className="SidebarItems mt-8 gap-4 flex  hover:bg-blue-400 items-center cursor-pointer">
            <div className="">
                <img src={props.icon} alt="icons" />
            </div>
            <div>
                <h2 className="font-extrabold text-xl mr-20">{props.text}</h2>
            </div>
        </div>

    )

}
export default SidebarItems;