import React, { Component } from 'react'

export default class Glass extends Component {
    render() {
        return (
            <div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="glasses_box">
                        <figure>
                            <img src="images/glass1.png" alt="#" />
                        </figure>
                        <h3>
                            <span className="blu">$</span>50
                        </h3>
                        <p>Sunglasses</p>
                    </div>
                </div>
            </div>
        )
    }
}
