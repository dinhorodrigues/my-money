import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsContent from '../common/tab/tabsContent'
import TabsHeader from '../common/tab/tabsHeader'
import TabHeader from '../common/tab/tabHeader'
import TabContet from '../common/tab/tabContent'

import { init, createBilling, updateBilling, deleteBilling } from './billingCycleActions'

import BillingCycleList from './billingCycleList'
import BillingCycleForm from './billingCycleForm'



class BillingCycle extends Component {
    componentWillMount() {
        this.props.init()

    }
    render() {
        const list = this.props.list || []
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tablist' />
                            <TabHeader label='Incluir' icon='plus' target='tabcreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />

                        </TabsHeader>

                        <TabsContent>

                            <TabContet id='tablist'>
                              
                                <BillingCycleList />
                            </TabContet>
                            <TabContet id='tabcreate'>
                                <BillingCycleForm onSubmit={this.props.createBilling}
                                    labelSubmit='Incluir' submitClass='primary' />

                            </TabContet>

                            <TabContet id='tabUpdate'>

                                <BillingCycleForm onSubmit={this.props.updateBilling}
                                    labelSubmit='Alterar' submitClass='info' />
                            </TabContet>

                            <TabContet id='tabDelete'>
                                <BillingCycleForm onSubmit={this.props.deleteBilling} readOnly={true}
                                    labelSubmit='Excluir' submitClass='danger' />

                            </TabContet>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ init, createBilling, updateBilling, deleteBilling }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)