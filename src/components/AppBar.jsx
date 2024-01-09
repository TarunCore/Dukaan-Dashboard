import Search from "../assets/appbar/search.png"
import Announce from "../assets/appbar/announcesvg.svg"
import Drop from "../assets/appbar/dropdown.png"
function AppBar() {
    return(
        <div className="appbar">
            <span>Payments</span>
            <div className="searchTop">
                <img src={Search} alt="" />
                <input type="text" placeholder="Search features, tutorials, etc."></input>
            </div>
            <div>
                <button><img src={Announce} alt="" /></button>
                <button><img src={Drop} alt="" /></button>
            </div>
        </div>
    )

}

export default AppBar;