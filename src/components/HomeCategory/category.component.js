import { Component } from 'react'
import CategorySlot from './categorySlot.component'
import './style.category.css'

class Category extends Component {

    render() {
        return (
            <div className="container">
                <div className="categoryHolder">
                    <p className="holderTitle">Khám phá danh mục</p>
                    <div className="categoryGrid">
                        <CategorySlot imageLink="https://static.chotot.com/storage/chapy-pro/newcats/v8/1000.png" title="Bất Động Sản"></CategorySlot>
                        <CategorySlot imageLink="https://static.chotot.com/storage/chapy-pro/newcats/v8/1000.png" title="Bất Động Sản"></CategorySlot>
                        <CategorySlot imageLink="https://static.chotot.com/storage/chapy-pro/newcats/v8/1000.png" title="Bất Động Sản"></CategorySlot>
                        <CategorySlot imageLink="https://static.chotot.com/storage/chapy-pro/newcats/v8/1000.png" title="Bất Động Sản"></CategorySlot>
                        <CategorySlot imageLink="https://static.chotot.com/storage/chapy-pro/newcats/v8/1000.png" title="Bất Động Sản"></CategorySlot>
                        <CategorySlot imageLink="https://static.chotot.com/storage/chapy-pro/newcats/v8/1000.png" title="Bất Động Sản"></CategorySlot>
                        <CategorySlot imageLink="https://static.chotot.com/storage/chapy-pro/newcats/v8/1000.png" title="Bất Động Sản"></CategorySlot>
                        <CategorySlot imageLink="https://static.chotot.com/storage/chapy-pro/newcats/v8/1000.png" title="Bất Động Sản"></CategorySlot>
                    </div>
                    <i className="prevButton" role="button" aria-label="prev" tabIndex="0"></i>
                    <i className="nextButton" role="button" aria-label="next" tabIndex="0"></i>
                </div>
            </div>
        )
    }
}
export default Category