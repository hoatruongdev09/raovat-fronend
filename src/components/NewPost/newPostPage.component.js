import { Component } from 'react'
import Post from './post.component'
import './style.newPostPage.css'
import Axios from 'axios'
class NewPostPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
        this.showAllPost = this.showAllPost.bind(this)
    }
    componentWillMount() {
        this.fetchPostData()
    }
    fetchPostData() {
        Axios.get("http://localhost:8080/api/posts/list").then(data => {
            console.log(data.data.posts)
            this.setState({ posts: data.data.posts })
        }).catch(err => {
            console.log(err)
        })
    }
    showAllPost() {
        return this.state.posts.map((post, index) => {
            return (<Post post={post}></Post>)
        })
    }
    render() {
        return (
            <div className="container">
                <div className="newPostContainer">
                    <div className="newPostTitleHolder">
                        <p className="newPostTitle">Tin mới nhất</p>
                    </div>
                    <div className="newPostHolder">
                        <this.showAllPost></this.showAllPost>
                    </div>
                </div>
            </div>
        )
    }
}
export default NewPostPage