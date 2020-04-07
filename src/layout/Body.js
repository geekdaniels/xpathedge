import React, { Component } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

export default class Body extends Component {
    render() {
        return (
            <div>
                <Header />
                <Sidebar />
                <Footer />
            </div>
        )
    }
}
