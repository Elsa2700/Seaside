import React, {useEffect, useState} from 'react';

const Root = () => {
    const [arrowScroll, setArrowScroll] =useState(false);
    const executeScroll = () => {
        window.scrollTo(
            {
                top: 0,
                behavior: 'smooth'
              }
        );
    }
    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 200){
                setArrowScroll(true);
            }else{
                setArrowScroll(false);
            }
        };
        window.addEventListener("scroll", onScroll);
      },[]);

    return (
        <div className='rootFrame'>
            <div className='rootInfo'>
                <div className='rootInfoMedia'>
                    <a href='https://www.facebook.com/'>facebook</a>
                    <a href='https://www.instagram.com/'>instagram</a>
                </div>
                <div className='rootInfoRule'>
                    <a href='/'>洗滌及保養方法</a>
                    <a href='/'>配送信息</a>
                    <a href='/'>退換貨政策</a>
                    <a href='/'>會員回饋</a>
                    <a href='/'>隱私權政策 Privacy Policy</a>

                </div>
                <div>
                    <div>Follow us on</div>
                    <div>
                        <i className='facebook icon' />
                        <i className='instagram icon' />
                        <i className='twitter icon' />
                        <i className='discord icon' />
                    </div>

                </div>

            </div>
            <div className='rootScure'>
                Pay securely with
                <i className='big apple pay icon' />
            </div>
            <div className={arrowScroll?'rootArrow': 'hide'}>
                <i onClick={executeScroll} className='big arrow up icon'></i>
            </div>


        </div>
    )

}
export default Root;