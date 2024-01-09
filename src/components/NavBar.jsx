import "../styles/style.scss"
import DropDown from "../assets/navbar/drop.png"
import Company from "../assets/navbar/company.png"
import Home from "../assets/navbar/home.png"
import Orders from "../assets/navbar/orders.png"
import Products from "../assets/navbar/products.png"
import Delivery from "../assets/navbar/delivery.png"
import Marketing from "../assets/navbar/marketing.png"
import Analytics from "../assets/navbar/analytics.png"
import Payments from "../assets/navbar/payments.png"
import Tools from "../assets/navbar/tools.png"
import Discounts from "../assets/navbar/discounts.png"
import Audience from "../assets/navbar/audience.png"
import Appearence from "../assets/navbar/appearence.png"
import Plugins from "../assets/navbar/plugins.png"
function NavBar(){
    return (
        <div className="navbar" >
            <div className="profile">
                <img src={Company} alt=""/>
                <div className="navNames">
                <div style={{display:"flex",flexDirection:"column"}}>
                        <span>Nishan</span>
                        <u style={{fontWeight:300}}>Visit Store</u>
                        {/* <span>Visit Store</span> */}
                    </div>
                <img src={DropDown} alt="" style={{width:"20px",height:"20px"}}/>
                </div>
            </div>
            <NavItem Logo={Home} item="Home"></NavItem>
            <NavItem Logo={Orders} item="Orders" />
            <NavItem Logo={Products} item="Products" />
            <NavItem Logo={Delivery} item="Delivery" />
            <NavItem Logo={Marketing} item="Marketing" />
            <NavItem Logo={Analytics} item="Analytics" />
            <NavItem Logo={Payments} item="Payments" />
            <NavItem Logo={Tools} item="Tools" />
            <NavItem Logo={Discounts} item="Discounts" />
            <NavItem Logo={Audience} item="Audience" />
            <NavItem Logo={Appearence} item="Appearance" />
            <NavItem Logo={Plugins} item="Plugins" />

        </div>
    )

}

function NavItem({Logo, item}){
    return(
        <div className="navItem">
            <img src={Logo} alt=""/>
            <span className="navNames">{item}</span>
        </div>
    )
}
export default NavBar;