import BSearch from  "../assets/payment/bsearch.png"
import Drop from "../assets/payment/drop.png"
import Sort from "../assets/payment/sort.png"
import Download from "../assets/payment/download.png"
import TDrop from "../assets/payment/traingledrop.png"
function Payment(){

    return(
        <div className="payment">
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <span className="titles">OverView</span>
                <button style={{fontFamily:"Inter"}}>Last Month <img src={Drop} alt="" style={{width:"10px"}}/></button>
            </div>
            <div className="overview" style={{display:"flex", justifyContent:"space-between", flexWrap:"wrap"}}>
                <div style={{width:"48%", backgroundColor:"white"}}>
                    <p>Online Orders</p>
                    <p>231</p>
                </div>
                <div style={{width:"48%"}}>
                    <p>Amount Recieved</p>
                    <p>2,31,23,23</p>
                </div>
            </div>
            <span className="titles" style={{marginTop:"20px", display:"inline-block"}}>Transactions | This Month</span>
            <div className="transactionTable">
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <div className="transactionSearch">
                        <div style={{display:"flex", alignItems:"center"}}>
                            <img src={BSearch} alt="" />
                        </div>
                        <input type="text" placeholder="Search by order Id.."/>

                    </div>
                    <div>
                    <button style={{fontFamily:"Inter", borderRadius:"4px"}}><div style={{display:"flex",alignItems:"center"}}>Sort <img src={Sort} alt="" style={{width:"16px"}}/></div> </button>
                    <button style={{fontFamily:"Inter", borderRadius:"4px", marginLeft:"10px"}}><img src={Download} alt="" style={{width:"13px"}}/></button>
                    </div>
                </div>
                <table>
                    <thead>
                        <th>Order ID</th>
                        <th>Order Date <img src={TDrop} alt="" style={{width:"8px"}}/></th>
                        <th>Order Amount</th>
                        <th>Transaction fees</th>
                    </thead>
                    



                    <tbody>
                        <TableRow></TableRow>
                        <TableRow></TableRow>
                        <TableRow></TableRow>
                        <TableRow></TableRow>
                        <TableRow></TableRow>
                        <TableRow></TableRow>
                        <TableRow></TableRow>
                        <TableRow></TableRow>
                        <TableRow></TableRow>
                        <TableRow></TableRow>   
                        <TableRow></TableRow>   
                        <TableRow></TableRow>   
                        <TableRow></TableRow>   
                        <TableRow></TableRow>   
                    </tbody>
                </table>
            </div>
        </div>
    )
}
function TableRow(){
    return(<tr>
        <td style={{color:"#146eb4"}}>#281209</td>
                            <td>7 July, 2023</td>
                            <td>₹1,278.23</td>
                            <td>₹22</td>
                            </tr>
    )
}
export default Payment;