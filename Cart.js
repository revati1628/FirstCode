import {useSelector} from 'react-redux'
function Cart(){
    let state = useSelector(store=>store);
    console.log(state);
    return(
        <div>
        <table className="table">
            <thead>
                <tr>
                    <th>
                        Food Items
                    </th>
                    <th>
                        Price
                    </th>
                    <th>
                        Quantity
                    </th>
                    <th>
                        Total
                    </th>
                </tr>
            </thead>
            <tbody>
                
                {
                    state.cartItems.cartit.map((foodItem,ind)=>{
                        let foodItemTotal = foodItem.quantity * foodItem.price;
                        return(
                            <tr key={ind}>
                                <td>{foodItem.item}</td>
                                <td>{foodItem.price}</td>
                                <td>{foodItem.quantity}</td>
                                <td>{foodItemTotal}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <h2 className="text-center mt-5">Tota Price :{state.cartItems.cartit.reduce((a,sum)=>{
            return a+ sum.quantity * sum.price
        },0) }</h2>
         

         </div>
    )
}

export default Cart;
