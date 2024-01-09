import Search from "../assets/appbar/search.png"
import Announce from "../assets/appbar/announcesvg.svg"
import Drop from "../assets/appbar/dropdown.png"
import Help from "../assets/appbar/help.png"
function AppBar() {
    return(
        <div className="appbar">
            
            <div style={{display:"flex", alignItems:"center"}}>
                <span >Payments</span>
                <div className="how" >
                <img src={Help} alt="" style={{width:"14px", margin:"0px 5px 0px 0px"}}/>
                <span style={{fontSize:"12px"}}>How it works</span>
                </div>
            </div>
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