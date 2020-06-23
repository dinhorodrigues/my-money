import React, { Component } from 'react'
import  { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList } from   './billingCycleActions'


class BillingCycleList extends Component{
    componentWillMount(){
        this.props.getList()        
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(bilCycle => (/// map pecorre o array e retorna o array do mesmo tamanho ...lista de pagamentos
            <tr key={bilCycle._id}> 
                <td>{bilCycle.name}</td>
                <td>{bilCycle.month}</td>
                <td>{bilCycle.year}</td>
            </tr>
        ))
    }


    render(){
        return (
            <div>
                <table className='table'>
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
const mapStateToProps = state => ({list: state.billingCycle.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList},dispatch) 
export default connect(mapStateToProps,mapDispatchToProps)(BillingCycleList)

