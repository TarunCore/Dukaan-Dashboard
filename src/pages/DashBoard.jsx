import NavBar from "../components/NavBar";
import AppBar from "../components/AppBar";
import Payment from "../components/Payment";
import "../styles/style.scss"
function DashBoard(){

    return (
        <div className="dashboard">
            <NavBar></NavBar>
            <div className="container">
                <AppBar></AppBar>
                <Payment></Payment>
            </div>
        </div>
    )
}
export default DashBoard;