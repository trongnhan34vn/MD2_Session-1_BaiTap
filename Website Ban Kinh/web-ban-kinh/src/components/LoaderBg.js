import React, { Component } from 'react'

export default class LoaderBg extends Component {
    render() {
        return (
            <div>
                <div className="loader_bg">
                    <div className="loader">
                        <img src="images/loading.gif" alt="#" />
                    </div>
                </div>
            </div>
        )
    }
}
