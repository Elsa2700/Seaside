import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../Style/Common.css';
import FakeImg from 'react-fakeimg';

const Nav = () => {
    const [isShow, setIsShow] = useState('');
    const NavSearch = () => {
        return (
            <div className='NavSearch'>
                <form>
                    <label>
                        <div>找商品</div>
                        <input id='searching' onMouseOver={handleMouseOver} type='text' placeholder='找商品' />

                    </label>
                </form>
            </div>
        )
    }
    const NavAbout = () => {
        return (
            <div className='NavAbout'>
                <ul>
                    <li>品牌故事</li>
                    <li>跨界聯名</li>
                    <li>媒體採訪</li>
                </ul>
            </div>
        )
    }
    const NavShop = () => {
        return (
            <div className='NavAbout'>
                <ul>
                    <li>門市預約</li>
                </ul>
            </div>
        )
    }
    useEffect(() => {
        if (isShow !== 'searching') { 
            const timer = setTimeout(() => {
                setIsShow('');
            }, 3000);
            return () => {
                clearTimeout(timer)
            }
        }
    })

    const handleMouseOver = (e) => {
        setIsShow(e.target.id);
    }
    const handleMouseDown = () => {
        setIsShow('');
    }


    return (

        <div>
            <div className='NavFrame'>
                <div className='NavHead'>
                    <div className='NavHead-info'>
                        <div>
                            <i className='language icon'></i>
                            繁體中文
                        </div>
                        <div>
                            $TWD
                        </div>
                    </div>
                </div>
                <div className='NavTitle'>
                    <div className='NavTitle-Page'>
                        <Link to='/'>
                            <i>
                                <FakeImg alt="example" text='Logo' width={60} height={60} bgColor="#b8b6b64b" />
                            </i>
                        </Link>
                        <Link to='/'>Home</Link>
                        <Link to='/About' id='about' onMouseOver={handleMouseOver} onMouseDown={handleMouseDown}>關於我們</Link>
                        <Link to='/Shop' id='shop' onMouseOver={handleMouseOver} onMouseDown={handleMouseDown}>寄賣門市</Link>
                    </div>
                    <div className='NavTitle-info'>
                        <div id='search' onMouseOver={handleMouseOver} onMouseDown={handleMouseDown}>
                            <i className='search icon'></i>
                            Search
                        </div>
                        <div>Sign In</div>
                        <i className='comment icon'></i>
                        <i className='shopping bag icon'></i>
                    </div>
                </div>

                <div>
                    <div className={isShow === '' ? 'hide' : 'NavHideInfo'}>
                        {isShow === 'search' ? <NavSearch /> :
                        isShow === 'searching' ? <NavSearch /> :
                            isShow === 'about' ? <NavAbout /> :
                                isShow === 'shop' ? <NavShop /> : <div />
                        }
                    </div>
                </div>
            </div>
        </div>

    )

}
export default Nav;