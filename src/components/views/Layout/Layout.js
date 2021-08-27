import React, { useEffect, Suspense } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'


function LayoutIndex(props) {
    useEffect(() => {
        console.log(props)
    }, [])
    return (
        <Suspense>
            <Header />
            <div className="content">
                {props.children}
            </div>
            <Footer />
        </Suspense>
    )
}

export default LayoutIndex
