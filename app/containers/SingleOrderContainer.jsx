import { connect } from 'react-redux'
import SingleOrder from '../components/SingleOrder'

function mapStateToProps(state){
    return {
        singleOrder: state.orders.singleOrder,
        itemsInOrder: state.orders.singleOrder.items
    }
}

//map dispatch to props
function mapDispatchToProps(dispatch){
    return {
        getSingleOrder: function(order){
            dispatch(getSingleOrder(order));
        }
    }
}

const SingleOrderContainer = connect(mapStateToProps, mapDispatchToProps)(SingleOrder)
export default SingleOrderContainer;