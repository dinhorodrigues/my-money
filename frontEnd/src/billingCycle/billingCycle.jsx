import React, {Component} from  'react'
import { bindActionCreators }   from 'redux'
import { connect } from    'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsContent from  '../common/tab/tabsContent'
import TabsHeader from '../common/tab/tabsHeader'
import TabHeader from '../common/tab/tabHeader'
import TabContet from  '../common/tab/tabContent'
import { selectTab, showTabs } from '../common/tab/tabActions'
import {init,createBilling, updateBilling, deleteBilling} from './billingCycleActions'

import BillingCycleList from './billingCycleList'
import BillingCycleForm from './billingCycleForm'


class BillingCycle extends Component{
    componentWillMount(){
          this.props.init()
       
    }
    render(){
       const list = this.props.list || []
        return(
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro'/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar'  icon='bars' target='tablist'/>
                            <TabHeader label='Incluir' icon='plus' target='tabcreate'/>
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate'/>
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete'/>                           
                            
                        </TabsHeader>

                        <TabsContent>
                            
                           <TabContet id='tablist'>
                               <BillingCycleList/>                             
                           </TabContet>
                           <TabContet id='tabcreate'>
                               <BillingCycleForm onSubmit={this.props.createBilling}/>
                           </TabContet>

                           <TabContet id='tabUpdate'>

                               <BillingCycleForm onSubmit={this.props.updateBilling}/>
                           </TabContet>
                           
                           <TabContet id='tabDelete'>
                               <billingCycleForm onSubmit={this.props.deleteBilling}/>

                           </TabContet>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({init,selectTab,showTabs,createBilling,updateBilling,deleteBilling},dispatch) 
export default connect(null, mapDispatchToProps)(BillingCycle)