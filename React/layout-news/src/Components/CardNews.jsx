const CardNews = (props ) => {
    const {
        imgShow = true,
        titleIndex = 'left',
    } = props;
    return (
        <div className="row">
            {titleIndex == 'top' && <div className=''><h5>"Chiều nay không có mưa bay"</h5></div>}
            {imgShow && (
                <div className={imgShow ? "col-6" : ''}>
                    <img
                    src='https://i.ytimg.com/vi/WRkTqe3cDQg/maxresdefault.jpg'
                    className={`img-thumbnail`}
                    />
                </div>
            )}
            <div className={imgShow ? "col-6" : 'col-12'}>
                {titleIndex != 'top' && <h5>"Chiều nay không có mưa bay"</h5>}
                
                <p>
                    "Trời hôm này nhiều mây cực, Nên là đi theo bóng mặt trời , Cái
                    xong thành ngày lang thang, Trời hôm này nhiều mây cực, Nên là đi
                    theo bóng mặt trời , Cái xong thành ngày lang thangTrời hôm này
                    nhiều mây cực, Nên là đi theo bóng mặt trời , Cái xong thành ngày
                    lang thangTrời hôm này nhiều mây cực, Nên là đi theo bóng mặt trời
                    , Cái xong thành ngày lang thang"
                </p>
            </div>
        </div>
    )
}

export default CardNews;