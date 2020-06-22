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

class BillingCycle extends Component{
    componentWillMount(){
        this.props.selectTab('tablist')
        this.props.showTabs('tablist','tabcreate')
    }
    render(){
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
                            
                           <TabContet id='tablist'><h1>Lista</h1></TabContet>
                           <TabContet id='tabcreate'><h1>Incluir</h1></TabContet>
                           <TabContet id='tabUpdate'><h1>Alterar</h1></TabContet>
                           <TabContet id='tabDelete'><h1>Excluir</h1></TabContet>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({selectTab,showTabs},dispatch) 
export default connect(null, mapDispatchToProps)(BillingCycle)