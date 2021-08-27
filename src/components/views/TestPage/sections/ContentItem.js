
import React, { useState, useEffect } from 'react'
import Axios from 'axios'


const teamData = [
    {
        "title": "[카인드라운지] 울 트렌치 코트_블랙",
        "price": "50000",
        "discountPrice": "30000",
        "src": "http://ec2-3-38-93-94.ap-northeast-2.compute.amazonaws.com:19228/v1/images/md2.png",
        "category": "스웨터"
    },
    {
        "title": "[주간신발] camel boots",
        "price": "3000",
        "discountPrice": "",
        "src": "http://ec2-3-38-93-94.ap-northeast-2.compute.amazonaws.com:19228/v1/images/md3.png",
        "category": "신발"
    }
]

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function ContentItem(props) {
    const [ItemData, setItemData] = useState([])

    useEffect(() => {
        console.log(props.api)
        Axios.get(props.api)
            .then(response => {
                console.log(response.data.code)
                // if (response.code == 200) {
                console.log(response.data.data)
                setItemData(response.data.data)
                // }
            })
    }, [])

    return (


        <div className="base__container item-box__container" >
            <h3 className="item-box__title">{props.title}</h3>
            <div className="item-cards__scroll">
                <div className="item-cards">
                    {ItemData && ItemData.map((data, index) => {
                        return (
                            <div className="item">
                                <img src={data.src} />
                                {

                                    !data.discountPrice ? (
                                        // 세일 안할 때
                                        <React.Fragment>
                                            <p className="item__title">{data.title}</p>
                                            <p className="item__print">
                                                <span className="print-font">{numberWithCommas(data.price)}</span>
                                                <span>원</span>
                                            </p>
                                        </React.Fragment>
                                    ) : (
                                        // 세일 할 때
                                        <React.Fragment>
                                            <p className="item__title">{data.title}</p>
                                            <p className="item__print__discount">{data.price}</p>
                                            <p className="item__print discount">
                                                <span className="print-font">{numberWithCommas(data.discountPrice)}</span>
                                                <span>원</span>
                                            </p>
                                        </React.Fragment>
                                    )
                                }

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ContentItem
