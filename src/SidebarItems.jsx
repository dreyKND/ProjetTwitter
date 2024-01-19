import { Link } from "react-router-dom";

function SidebarItems(props) {
    return (
        <Link to={props.route}>
        <div className="SidebarItems mt-8 gap-4 flex text-gray-400 hover:bg-blue-400 items-center cursor-pointer">
            <div className="">
                <img src={props.icon} alt="icons" />
            </div>
            <div>
                <h2 className="font-extrabold text-xl mr-20">{props.text}</h2>
            </div>
        </div>
        </Link>

    )

}
export default SidebarItems;