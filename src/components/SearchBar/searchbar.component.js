import { Component } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'
import './style.searchbar.css'
class SearchBar extends Component {
    render() {
        return (
            <div className="searchBar">
                <div className="container ">
                    <div className="searchHolder">
                        <Form className="inputHolder">
                            <FormControl className="searchInput" type='text' placeholder='Search' />
                        </Form>
                        <div className="buttonHolder">
                            <Button className="searchButton" variant="link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                                    <g fill="none" filleRule="evenodd">
                                        <path stroke="#FE9900" strokeWidth="1.3" d="M13.59 13.56a6.334 6.334 0 0 1-4.494 1.858 6.33 6.33 0 0 1-4.494-1.858A6.319 6.319 0 0 1 2.74 9.077a6.317 6.317 0 0 1 1.862-4.483 6.335 6.335 0 0 1 4.494-1.856 6.331 6.331 0 0 1 4.494 1.857 6.317 6.317 0 0 1 1.862 4.482 6.317 6.317 0 0 1-1.862 4.483zm.797.25l.318-.41a6.999 6.999 0 0 0 1.486-4.322 7.053 7.053 0 0 0-2.078-5.005A7.073 7.073 0 0 0 9.096 2a7.067 7.067 0 0 0-5.018 2.073A7.053 7.053 0 0 0 2 9.077a7.054 7.054 0 0 0 2.078 5.005 7.072 7.072 0 0 0 5.017 2.073 7.034 7.034 0 0 0 4.327-1.478l.412-.317 5.54 5.526a.388.388 0 0 0 .551 0 .386.386 0 0 0 0-.55l-5.538-5.525z">
                                        </path>
                                        <path stroke="#FFF" strokeWidth=".1" d="M1 1h20v20H1z" opacity=".01">
                                        </path>
                                    </g>
                                </svg>
                            </Button>
                            <Button className="searchButton" variant="link">
                                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="15" height="20" viewBox="0 0 15 20">
                                    <defs>
                                        <path id="a5" d="M0 0h15v20H0z"></path>
                                    </defs>
                                    <g fill="none" filleRule="evenodd">
                                        <mask id="b5" fill="#fff">
                                            <use href="#a5"></use>
                                        </mask>
                                        <path stroke="#D0021B" strokeWidth="2" d="M1 17.687l5.678-5.341a1.2 1.2 0 0 1 1.644 0L14 17.686V3.5A2.5 2.5 0 0 0 11.5 1h-8A2.5 2.5 0 0 0 1 3.5v14.187z" mask="url(#b5)">
                                        </path>
                                    </g>
                                </svg>
                            </Button>
                        </div>
                    </div>
                    <div className="infoHolder">
                        <a className="headerLink" href="/" >
                            <svg className="headerIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g className="svg-stroke" fill="none" filleRule="evenodd" stroke="#000" strokeWidth="1.2"><circle cx="15" cy="15" r="14.4"></circle><circle cx="15" cy="12" r="4.5"></circle><path d="M25.442 24.63c-1.453-4.536-5.579-7.807-10.442-7.807-4.932 0-9.106 3.365-10.502 8"></path></g></svg>
                            <span className="headerName">Đăng Nhập</span>
                        </a>
                        <div className="postLinkHolder">
                            <a className="postLink" href="/">
                                <svg className="headerIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                    <g fill="none" filleRule="evenodd">
                                        <path stroke="#FFBA00" strokeWidth=".5" d="M1 1h28v28H1z" opacity=".01"></path>
                                        <path className="svg-fill" fill="#fff" d="M16.765 2.312a.759.759 0 1 1 0 1.518H6.873a1.88 1.88 0 0 0-1.877 1.877v16.438a1.88 1.88 0 0 0 1.877 1.877H23.31a1.88 1.88 0 0 0 1.877-1.877V11.8a.76.76 0 0 1 1.518 0v10.344a3.399 3.399 0 0 1-3.395 3.395H6.873a3.4 3.4 0 0 1-3.396-3.395V5.707a3.4 3.4 0 0 1 3.396-3.395h9.892zm6.022.21c.273-.1.564-.078.835-.038.276.042.57.205.83.461l.54.54 1.117 1.117c.24.24.394.497.46.766a1.68 1.68 0 0 1-.4 1.545l-.058.062c-.344.352-.7.707-1.048 1.05l-.631.63-6.33 6.328-.488.493-.038.04c-.307.31-.621.628-.939.932-.153.148-.339.219-.619.236l-3.014.184h-.03a.719.719 0 0 1-.484-.218c-.158-.156-.249-.358-.24-.543l.135-3.097c.016-.253.095-.443.248-.598l.157-.16.003-.002.082-.081 5.416-5.415c.576-.577 1.166-1.167 1.747-1.745l1.68-1.682c.144-.146.27-.275.397-.396.188-.181.388-.304.672-.408zm.493 1.428l-.221.219c-.153.151-.306.305-.457.456l-.536.537-8.151 8.152-.086 1.957 1.906-.115.312-.312.226-.224.05-.049.385-.38 8.401-8.403-1.211-1.209a8.233 8.233 0 0 1-.172-.175l-.027-.029c-.065-.068-.13-.137-.2-.206l-.22-.219z"></path>
                                    </g>
                                </svg>
                                <span className="headerName">Đăng Tin</span>
                            </a>
                        </div>
                    </div>
                </div >
            </div >
        )
    }
}
export default SearchBar