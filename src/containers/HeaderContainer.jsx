import { connect } from "react-redux";
import Header from "../components/Header";

const mapStateToProps =state =>({
    data:state.cardItem
})

const mapDispatchToProps = dispatch=>({

})

export default connect(mapStateToProps,mapDispatchToProps)(Header)


// export default Home;

