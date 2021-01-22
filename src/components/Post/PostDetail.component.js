import { Component } from 'react'
import Category from '../HomeCategory/category.component'
import Axios from 'axios'
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
            <div>heyhey 1 {this.state.post.title}</div>
        )
    }
}
export default PostDetail