import actionCreators from '../store/actionCreators'
import {useSelector,useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';


function Home(){
    const state = useSelector(store=>store);
    const dispatch = useDispatch();
    let {add_Items,remove_Items} = bindActionCreators(actionCreators,dispatch);
    console.log(add_Items);

    return(
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
                        Add to cart
                    </th>
                    <th>
                        Remove from cart
                    </th>
                </tr>
            </thead>
            <tbody>
                
                {
                    state.foodItems.map((foodItem,ind)=>{
                        
                        return(
                            <tr key={ind}>
                                <td>{foodItem.item}</td>
                                <td>{foodItem.price}</td>
                                <td><button className="btn btn-success" onClick={()=>add_Items(foodItem)}>+</button> </td>
                                <td><button className="btn btn-danger" onClick={()=>remove_Items(foodItem)}>-</button> </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Home;