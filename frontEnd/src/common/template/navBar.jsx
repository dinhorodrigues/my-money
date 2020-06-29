import React, {Component}from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {logout}  from '../../auth/authActions'

class NavBar extends Component{
    constructor(props) {
        super( props)
        this.state = {open: false}
    }

    changeOpen(){
        this.setState({open: !this.state.open})
    }
    render(){
        const {name, email} = this.props.user
        return (
            <div className='nav-bar custom-menu'>
                <ul className='nav nav-bar'>
                    <li onMouseLeave={()=> this.changeOpen()}
                    className={`dropdown user user-menu ${this.state.open ? open : ''}`}>

                    </li>

                </ul>

            </div>
        )
    }

}
const mapStateToProps = state =>({user: state.auth.user})
const mapDispatchToProps = dispatch => bindActionCreators({logout}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(NavBar)