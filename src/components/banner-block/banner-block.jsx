import React from 'react'
import './bb.scss'
const BannerBlock = ({title , sub}) => {
  return (
        <>
        <div className="banner">
            <div className="wrap">
                <h1 className="title">
                    {title}
                </h1>
                <p>
                    {sub}
                </p>
            </div>
        </div>
        </>
    )
}

export default BannerBlock