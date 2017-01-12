import { connect } from 'react-redux'
import Orders from '../components/Orders'

function mapStateToProps(state){
    return {
        allOrders: state.orders
    }
}

//map dispatch to props
function mapDispatchToProps(dispatch){
    return {
        getSingleOrder: function(order){
            dispatch(getSingleOrder(order));
        }, 
        getAllOrders: function(){
          dispatch(getAllOrders())
        }
    }
}

const OrdersContainer = connect(mapStateToProps, mapDispatchToProps)(Orders)
export default OrdersContainer;