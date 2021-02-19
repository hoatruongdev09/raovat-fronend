import { Component } from 'react'
import Category from '../HomeCategory/category.component'
import Axios from 'axios'
import PostImageDetail from './postImageDetail.component'
import './style.postDetail.css'
import PostDetailImage from './postImageDetail.component'
import PostProvider from './PostProvider.component'

class PostDetail extends Component {
    constructor(props) {
        super(props)
        this.id = props.match.params.id
        this.state = {
            post: {
                image: [],
                category: [],
                title: "",
                description: "",
                createDate: Date.now,
                author: "",
                phone: "",
                address: "",
                price: ""

            }
        }
    }
    componentWillMount() {
        console.log("id: ", this.id)
        this.fetchPostData()
    }
    fetchPostData() {
        Axios.get(`http://localhost:8080/api/posts/detail/${this.id}`)
            .then(data => {
                this.setState({
                    post: data.data
                })
            })
            .catch(err => { })
    }
    render() {

        return (
            <div className="container post-detail-parent">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-6">
                        <PostDetailImage images={[]}></PostDetailImage>
                        <h4 className="post-detail-title">macbook pro 13 inch</h4>
                        <h4 className="post-detail-title post-detail-price">8.900.000 đ</h4>
                        <p className="post-detail-description">
                            {`Bán macbook pro 13" 2013 còn nguyên zin máy ko lổi lầm
Giá này quá rẻ cho 1 chiếc macbook nhé
Màn retina sáng đẹp
Máy còn dùng mướt rượt nhé
Máy i5 ram4gb ssd 128g
Kèm sạc zin nhé`}
                        </p>
                        <a href="/">Nhấn để hiện số: 09999***</a>
                    </div>
                    <div className="col-md-4 col-sm-6 col-6">
                        <PostProvider></PostProvider>
                    </div>
                </div>
            </div>
        )
    }
}
export default PostDetail