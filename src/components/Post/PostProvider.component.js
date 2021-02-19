import './style.postProvider.css'

const PostProvider = function (props) {
    return (
        <div>
            <div className="provider-profile-wrapper">
                <a className="provider-wrapper" target="_blank" href="/">
                    <div className="provider-thumbnail">
                        <img className="provider-image" alt="" src="https://cdn.chotot.com/Ztk1fy3Awc7_lMG9qs8qbwZJj-7PWl1LTjMT7DK_1JQ/preset:uac/plain/37b73d512c67555eb95dbf2472f1cd73-2c082dbc755f77797cb065e861434b2ffea2ebf2.jpg"></img>
                    </div>
                    <div className="provider-name-wrapper" role="button" tabIndex="0">
                        <div className="provider-name">
                            <div className="provider-title"><b style={{ marginRight: "5px" }}>provider</b></div>
                            <button type="button" className="provider-info">Xem Trang</button>
                        </div>
                        <div className="provider-status">
                            <div className="online dot">•</div>Hoặt động 37 phút trước
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}
export default PostProvider