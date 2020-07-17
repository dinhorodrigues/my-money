import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Field, arrayInsert} from 'redux-form'


import {getList, showUpdate, showDelete} from './peppleActions'



import Grid from '../common/layout/grid'



class HistoricoCliente extends Component {

    renderRows(){
        const list = this.props.list || []
        return list.map(PessClie =>(
            <tr key={PessClie._id}>
                <td>{PessClie.name}</td>
                <td>
                    <button className='btn btn-secundary'>
                        <i className='fa fa-pencil'></i>
                    </button>
                </td>

            </tr>
        ))


        
        
    }

    render(){
        
        <Grid cols={this.props.cols}>
            <fieldset>
                <legend>Hístorico Cliente</legend>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Útilma Compra</th>
                            <th>Produto</th>
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                       {this.renderRows}
                    </tbody>

                </table>
            </fieldset>

        </Grid>
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({arrayInsert}, dispatch) 
export default connect(null,mapDispatchToProps)(HistoricoCliente)