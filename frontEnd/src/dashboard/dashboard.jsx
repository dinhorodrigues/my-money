import React,{Component} from  'react' 
import {bindActionCreators} from 'redux'

import {getSummay} from './dashboardActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Valuebox from  '../common/widget/valuebox'
import Row from '../common/layout/row'
import { connect } from 'react-redux'



class Dashboard extends Component{
    componentWillUnmount(){
        this.props.getSummay()
    }
    render() {
            
        const { credit, debt } = this.props.summary //// extrai as duas variaveis cred e debt de props.summary
        return(
        <div>
            <ContentHeader title='Dashboard' small='versão 1.0'/>
            <Content>
              <Row>
              <Valuebox cols='12 4' color='green' icon='bank'
                    value={`R$ ${credit}`} text='Total de Créditos'/>

                <Valuebox cols='12 4' color='red' icon='credit-card'
                    value={`R$ ${debt}`} text='Total de Débitos'/>

                <Valuebox cols='12 4' color='blue' icon='money'
                    value={`R$ ${credit - debt}`} text='Valor Consolidado'/>
               
              </Row>
           </Content>
        
        </div> 
        )
    }
}
/// mapeamento do dashBoard
const mapStateToProps = state => ({summary: state.dashboard.summary})
const mapDispatchToProps = dispatch => bindActionCreators({getSummay},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)
