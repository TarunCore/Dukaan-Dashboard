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
                    <p className="amountHeading">Online Orders</p>
                    <p className="amount">231</p>
                </div>
                <div style={{width:"48%"}}>
                    <p className="amountHeading">Amount Recieved</p>
                    <p className="amount">₹23,92,312.19</p>
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
                <div className="pagination">
                    <button>Previous</button>
                    <ul>
                        <li>1</li>
                        <li>...</li>
                        <li className="currentPage">10</li>
                        <li>11</li>
                        <li>12</li>
                        <li>13</li>
                        <li>14</li>
                        <li>15</li>
                        <li>16</li>
                        <li>17</li>
                        <li>18</li>
                    </ul>
                    <button>Next</button>
                </div>
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