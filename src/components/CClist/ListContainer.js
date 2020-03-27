import { connect } from 'react-redux'
import { getCCItems, clearCC } from '../../redux/cc-reducer'
import CClist from './CClist'

const mapStateToProps = (state) => {
    return{
        items: state.cc.items,
        startItem: state.cc.startItem,
        isFetching: state.cc.isFetching
    }
}
export default connect(mapStateToProps, {getCCItems, clearCC})(CClist)