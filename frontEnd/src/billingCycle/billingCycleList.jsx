import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './billingCycleActions'


class BillingCycleList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(bilCycle => (/// map pecorre o array e retorna o array do mesmo tamanho ...lista de pagamentos
            <tr key={bilCycle._id}>
                <td>{bilCycle.name}</td>
                <td>{bilCycle.month}</td>
                <td>{bilCycle.year}</td>
                <td>
                    <button className='btn btn-light' onClick={() => this.props.showUpdate(bilCycle)}>
                        <i className='fa fa-pencil'></i>
                    </button>
                    <button className='btn btn-light' onClick={() => this.props.showDelete(bilCycle)}>
                        <i className='fa fa-trash-o'></i>
                    </button>
                </td>
            </tr>
        ))
    }


    render() {
        return (
            <div>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )

    }
}
const mapStateToProps = state => ({ list: state.billingCycle.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)

