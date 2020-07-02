import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'



import PeppleForm from '../pepple/peppleForm'
import PeppleList from '../pepple/peppleList'
import TabHeader from '../common/tab/tabHeader'
import Tabs from '../common/tab/tabs'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import TabsHeader from '../common/tab/tabsHeader'
import TabContent from '../common/tab/tabContent'
import TabsContent from '../common/tab/tabsContent'
import {init} from  '../billingCycle/billingCycleActions'
class Pepple extends Component {
    componentWillMount(){
        this.props.init()
    }

  
    render() {
        return (
            <div>
                <ContentHeader title='Clientes' small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='listar' icon='bars' target='tablist' />
                            <TabHeader label='Incluir' icon='plus' target='tabcreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tablist'>
                                <PeppleList />
                            </TabContent>

                            <TabContent id='tabcreate' >
                                <PeppleForm />
                           </TabContent>
                           <TabContent id='tabUpdate' >
                                <PeppleForm />
                           </TabContent>
                           <TabContent id='tabDelete' >
                                <PeppleForm />
                           </TabContent>

                        </TabsContent>

                    </Tabs>

                </Content>

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null,mapDispatchToProps)(Pepple)