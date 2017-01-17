import { connect } from 'react-redux'
import Orders from '../components/Orders'

import {whoami} from '../reducers/auth' 

function mapStateToProps(state){
    return {
        allOrders: state.orders,
        state: state
    }
}

//map dispatch to props
function mapDispatchToProps(dispatch, ownProps){
    return {
        getAllOrders: function(){
          dispatch(getAllOrders())
        }
    }
}

const OrdersContainer = connect(mapStateToProps, mapDispatchToProps)(Orders)
export default OrdersContainer;