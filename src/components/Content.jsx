/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const Content = ({ providers }) => {

    return (
        <div className='content'>
            <div className='elements'>
                <div className='brief element1'>
                    <h1>We Fill Your Gap</h1>
                    <p style={{ color: 'black' }}>
                        We are ready to bring you all your needs
                        aynwhere at any time through our useful mobile
                        application. No need to waste time you are on
                        click away.
                    </p>
                    <button>Install Now</button>
                </div>
                <div className='element2'>
                    <div>
                        <div className='main'>
                            <img
                                src="images/resources/3e3020365be52249a15e382a9b30d0f1"
                                alt='WorldWide'
                                width="300"
                                height="250"
                            />
                        </div>
                        <div className='circle1'>
                            {/* 1 */}
                            <img
                                src="images/resources/70198786269da3d2a3f1380bd306056d"
                                alt='WorldWide'
                                width="50"
                                height="50"
                            />
                        </div>
                        <div className='toC1'></div>
                        <div className='circle2'>
                            {/* 2 */}
                            <img
                                src="images/resources/ee3858ec4d3961a0ce2886af60b21d4b"
                                alt='WorldWide'
                                width="50"
                                height="50"
                            />
                        </div>
                        <div className='toC2'></div>
                        <div className='circle3'>
                            {/* 3 */}
                            <img
                                src="images/resources/d4f8cc0b83f3ac224492ce87f2b715fe"
                                alt='WorldWide'
                                width="50"
                                height="50"
                            />
                        </div>
                        <div className='toC3'></div>
                        <div className='circle4'>
                            {/* 4 */}
                            <img
                                src="images/resources/f683c8dfae9f6820e32c109a4a21675c"
                                alt='WorldWide'
                                width="50"
                                height="50"
                            />
                        </div>
                        <div className='toC4'></div>
                        <div className='circle5'>
                            {/* 5 */}
                            <img
                                src="images/resources/9e9d2639ac98d3f9e8c510c435624127"
                                alt='WorldWide'
                                width="50"
                                height="50"
                            />
                        </div>
                        <div className='toC5'></div>
                        <div className='circle6'>
                            {/* 6 */}
                            <img
                                src="images/resources/75a33b332ee254afca87c5323ca1e3df"
                                alt='WorldWide'
                                width="50"
                                height="50"
                            />
                        </div>
                        <div className='toC6'></div>
                        <div className='circle7'>
                            {/* 7 */}
                            <img
                                src="images/resources/aea3cab076a2c51d95952f8b791117ef"
                                alt='WorldWide'
                                width="50"
                                height="50"
                            />
                        </div>
                        <div className='toC7'></div>
                        <div className='circle8'>
                            {/* 8 */}
                            <img
                                src="images/resources/1eb0820bf4b4d8789136ac5be92868f2"
                                alt='WorldWide'
                                width="50"
                                height="50"
                            />
                        </div>
                        <div className='toC8'></div>
                    </div>
                </div>
                <div className='elment3'>
                    <img
                        src='images/resources/Who-can-possibly-write-release-notes_.png'
                        alt='tato'
                        width="300"
                        height="250"
                    />
                </div>
                <div className='element4'>
                    <h1>
                        What we offer!
                    </h1>
                    <p style={{ color: 'black' }}>
                        We Offer you different kinds of services
                        that will help you save your time and be
                        more comfortable
                    </p>
                    <button>Our Services</button>
                </div>
            </div>
            <div className='providers-section'>
                <h3>Our Providers</h3>
                <div>
                    <div className="pagination">
                        <a href="#">&laquo;</a>
                        {
                            providers.map(a => (
                                <>
                                    <a href={`http://localhost:3000/${a}`} className='providers'>
                                        <span
                                            style={{
                                                background: 'rgb(245, 245, 245)',
                                                height: '100px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius: '10px',
                                                padding: '10px',
                                                marginBottom: '10px'
                                            }}
                                        >
                                            <img
                                                src={`images/resources/${a}`}
                                                width="70"
                                            />
                                        </span>
                                        Amazon
                                    </a>
                                </>
                            ))
                        }
                        <a href="#">&raquo;</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
