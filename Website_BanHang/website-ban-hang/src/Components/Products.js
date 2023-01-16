import React, { Component } from 'react'
import Product from './Product'

export class Products extends Component {
    render() {
        return (
            <div>
                <section className="products_section">
                    <div className="heading_container">
                        <h2>New Products In Store</h2>
                        <p>Featured Product Just Arrived</p>
                    </div>
                    <div className="container layout_padding">
                        <div className="product_container">
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Products