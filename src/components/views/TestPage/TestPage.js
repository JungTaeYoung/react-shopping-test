import React, { useEffect, useState } from 'react'
import ContentItem from './sections/ContentItem'
import { banner } from '../../../_actions/sale_actions'
import { useSelector, useDispatch } from "react-redux";

import axios from 'axios'

function TestPage() {
    const [EventSrc, setEventSrc] = useState('')

    let sale = useSelector(state => state.sale);
    const dispatch =useDispatch();
    useEffect(() => {
        // 배너 
        dispatch(banner())
        setTimeout(function(){
            console.log(sale)
        })
    }, [])
    return (
        <React.Fragment>
            {/* banner */}
            <div className="base__layout benner__layout">
                <div className="base__container benner__container">
                    <div className="benner__text">
                        <h3>Latest<br />Arrivals</h3>
                        <p>남은 기간 빠짐없이<br /> 혜택받고 워너비<br />아이템들 모두<br /> 만나보세요</p>
                    </div>
                    <img src="/images/content/banner_img.png" className="banner-img" />
                </div>
            </div>
            {/* banner */}

            <div className="base__layout" >
                {/* New arrivals */}
                <ContentItem title={'New arrivals'} api={'http://ec2-3-38-93-94.ap-northeast-2.compute.amazonaws.com:19228/v1/api/test/new?limit=4'} />
                {/* New arrivals */}



            </div>

            <div className="base__layout" style={{ backgroundColor: '#F7F7F7' }}>
                {/* EVENT */}
                <ContentItem title={'EVENT'} api={'http://ec2-3-38-93-94.ap-northeast-2.compute.amazonaws.com:19228/v1/api/test/new?limit=4'} />
                {/* EVENT */}
            </div>
            <div className="base__layout" >

                {/* Weekly best */}
                <ContentItem title={'Weekly best'} api={'http://ec2-3-38-93-94.ap-northeast-2.compute.amazonaws.com:19228/v1/api/test/best'} />
                {/* Weekly best */}

                {/* MD’s pick */}
                <ContentItem title={'MD’s pick'} api={'http://ec2-3-38-93-94.ap-northeast-2.compute.amazonaws.com:19228/v1/api/test/md'} />
                {/* MD’s pick */}


                {sale &&
                    (
                        <div className="base__container item-box__container" style={{ marginTop: '80px' }}>
                            <img style={{ width: '100%' }} src={sale.banner && sale.banner.src} />
                            <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                                <h3>포텐스타 19FW 단독 할인</h3>
                                <p>~30% 브랜드 할인</p>

                            </div>
                        </div>
                    )
                }

                {sale &&
                    (
                        <div className="base__container item-box__container" >
                            <h3 className="item-box__title">instagram</h3>
                            <div className="item-cards__scroll inst">
                                <div className="item-card__in">
                                    <img src="/images/content/in1.png" />
                                    <img src="/images/content/in2.png" />
                                    <img src="/images/content/in3.png" />
                                    <img src="/images/content/in4.png" />
                                    <img src="/images/content/in5.png" />
                                    <img src="/images/content/in1.png" />
                                    <img src="/images/content/in2.png" />
                                    <img src="/images/content/in3.png" />
                                    <img src="/images/content/in4.png" />
                                    <img src="/images/content/in5.png" />
                                </div>
                            </div>
                        </div>
                    )
                }


            </div>


            {/* New arrivals */}
        </React.Fragment>
    )
}

export default TestPage
