import { connect } from 'react-redux'
import SingleOrder from '../components/SingleOrder'

function mapStateToProps(state){
	// console.log('state: ', state)
    return {
        singleOrder: state.orders
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