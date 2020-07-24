import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { search, showUpdate, showDelete } from './peppleActions'
import { reduxForm } from 'redux-form'
import moment from 'moment'

import '../common/template/custom.css'





class PeppleList extends Component {


    renderRows() {


        const list = this.props.list || []
        return list.map(PessCliente => (


            <tr key={PessCliente._id}>
                <td>{PessCliente.code}</td>
                <td>{PessCliente.name}</td>
                <td>{moment
                    .utc(PessCliente.dataNas)
                    .local("America/Recife")
                    .format("DD/MM/YYYY")
                }</td>

                <td>
                    <button className='btn btn-light' onClick={() => this.props.showUpdate(PessCliente)}>
                        <i className='fa fa-eye'></i>
                    </button>
                    <button className='btn btn-light' onClick={() => this.props.showDelete(PessCliente)}>
                        <i className='fa fa-trash-o'></i>
                    </button>
                </td>
            </tr>
        ))
    }


    render() {
        return (
            <div>
                <div>

                    <table className='table table-striped'>
                        <thead>

                            <tr>

                                <th>Código</th>
                                <th>Nome</th>
                                <th>Data Nascimento</th>
                                <th className='table-actions'>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}

PeppleList = reduxForm({ form: 'peppleList', destroyOnUnmount: false })(PeppleList)
const mapStateToProps = state => ({ list: state.pepple.list })
const mapDispatchToProps = dispatch => bindActionCreators({ showUpdate, showDelete, search }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PeppleList)