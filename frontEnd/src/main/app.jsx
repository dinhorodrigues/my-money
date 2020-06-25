import '../common/template/dependencies'

import React from 'react'
import Header from  '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'
import Route from './routes'
import Messages from '../common/msg/messages'


export default props => (
    <div className ='wrapper'>
        <Header/>
        <SideBar/>
       
        <div className='content-wrapper'>
            <Route/>

        </div>
        <Footer/>
        <Messages/>
       

    </div>
)
