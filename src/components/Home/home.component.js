
import { Component } from 'react'
import Category from "../HomeCategory/category.component";
import NewPostPage from "../NewPost/newPostPage.component";
class Home extends Component {

    render() {
        return (
            <div>
                <Category></Category>
                <NewPostPage></NewPostPage>
            </div>
        )
    }
}
export default Home