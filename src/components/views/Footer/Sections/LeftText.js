import React from 'react'


function LeftText() {
    return (
        <div className="introduce1">
            <div className="introduce-top">
                <p className="introduce-description">
                    고객센터<br />
                    전화문의, 운영시간 안내
                </p>
                <p className="introduce-phone">1234-5678</p>
            </div>
            <div className="introduce-bottom">
                <table className="company-info">
                    <tr>
                        <th>상담가능시간</th>
                        <td>오전9시-오후6시 토요일 , 공휴일 휴무</td>
                    </tr>
                    <tr>
                        <th>주소</th>
                        <td>서울 중대로 135 IT 벤처타워, 11층</td>
                    </tr>
                    <tr>
                        <th>E-mail</th>
                        <td>qwerttyhd@dfsf.co.kr</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default LeftText
