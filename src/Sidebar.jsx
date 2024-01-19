import TweetIcon from './TweetIcon';
import './App.css'
import SidebarItems from './SidebarItems';
function Sidebar() {
    return (
        <div className=' w-1/3  pl-40 pr-20'>
            <TweetIcon className=" mb-20 ml-20 text-xl" icon={"./src/assets/images/Menu-Button/Icons/Twitter.png"} />


            <SidebarItems icon={"./src/assets/images/Menu-Button/Icons/home.png"} text="Home" />
            <SidebarItems icon={"./src/assets/images/Menu-Button/Icons/explore.png"} text="Explore" />
            <SidebarItems icon={"./src/assets/images/Menu-Button/Icons/notification.png"} text="Notifications" />
            <SidebarItems icon={"./src/assets/images/Menu-Button/Icons/messages.png"} text="Messages" />
            <SidebarItems icon={"./src/assets/images/Menu-Button/Icons/Bookmarks.png"} text="Bookmarks" />
            <SidebarItems icon={"./src/assets/images/Menu-Button/Icons/Lists.png"} text="Lists" />
            <SidebarItems icon={"./src/assets/images/Menu-Button/Icons/Profile.png"} text="Profil" route="profil"/>
            <SidebarItems icon={"./src/assets/images/Menu-Button/Icons/More.png"} text="More" />

            <button variant="outlined" className=' rounded-3xl font-black h-11 my-20 text-inherit w-full bg-blue-400 '>Tweet</button>

        </div>


    )

}
export default Sidebar;