import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { init, createPepple, updatePepple, deletePepple, search, changeName } from './peppleActions'


import TabHeader from '../common/tab/tabHeader'
import Tabs from '../common/tab/tabs'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import TabsHeader from '../common/tab/tabsHeader'
import TabContent from '../common/tab/tabContent'
import TabsContent from '../common/tab/tabsContent'

import PeppleForm from './peppleForm'
import PeppleList from './peppleList'
import Axios from 'axios'


const URL = 'http://localhost:3001/api'


class Pepple extends Component {
    constructor(props) {
        super(props)

    }


    componentWillMount() {
        this.props.init()
        this.props.search()
    }

    refresh(name = ''){
        const search = name ?`&name__regex=/${name}/`: ''
        Axios.get(`${URL}?sort=+${search}`)
        .then(resp => this.setState({...this.state, name, list: resp.data   }))

    }

    render() {
        const { name, search } = this.props

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
                                <form className='row'  >
                                    <div className='form-group col-md-6'>
                                        <label htmlFor="pesqui">Pesquisa</label>
                                        <input id='pesquisa' onChange={this.props.changeName}
                                            value={this.props.name} type="text" className="form-control" placeholder="Digite aqui a Pesquisa" />

                                    </div>
                                    <div className="form-group col-md-2">
                                        <label htmlFor="inicial">Inicial </label>
                                        <input type="date" name='inicial' className='form-control' />
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label htmlFor="final">Final </label>
                                        <input type="date" name='final' className='form-control' />
                                    </div>

                                    <div className="input-group-btn col-md-4">
                                        <h2>
                                            <button className="btn btn-info" type='submit'
                                                onClick={()=> search(name)} >
                                                <i className="fa fa-search"></i>Pesquisar</button>
                                        </h2>

                                    </div>
                                </form>
                                <PeppleList />
                            </TabContent>

                            <TabContent id='tabcreate' >
                                <PeppleForm onSubmit={this.props.createPepple}
                                    labelSubmit='Incluir' submitClass='primary' />
                            </TabContent>

                            <TabContent id='tabUpdate' >
                                <PeppleForm onSubmit={this.props.updatePepple}
                                    labelSubmit='Alterar' submitClass='info' />
                            </TabContent>

                            <TabContent id='tabDelete' >
                                <PeppleForm onSubmit={this.props.deletePepple}
                                    labelSubmit='Excluir' submitClass='danger' readOnly={true} />
                            </TabContent>

                        </TabsContent>

                    </Tabs>

                </Content>

            </div >
        )
    }
}
const mapStateToProps = state => ({ name: state.pepple.name })
const mapDispatchToProps = dispatch => bindActionCreators({ init, createPepple, updatePepple, deletePepple, search, changeName }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Pepple)