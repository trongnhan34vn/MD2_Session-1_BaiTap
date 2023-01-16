import React, { Component } from 'react'
import Glass from './Glass'

export default class Glasses extends Component {
    render() {
        return (
            <div>
                <div className="glasses">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <div className="titlepage">
                                    <h2>Our Glasses</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labor e et dolore magna aliqua. Ut
                                        enim ad minim veniam, qui
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                           <Glass/>
                           <Glass/>
                           <Glass/>
                           <Glass/>
                           <Glass/>
                           <Glass/>
                           <Glass/>
                           <Glass/>
                            <div className="col-md-12">
                                <a className="read_more" href="#">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
