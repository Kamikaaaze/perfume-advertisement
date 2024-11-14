import './Perfume.css'

function Perfume(){

    return(
        <div className="card">
            <div><img src='./images/133516637261915553.jpg' className='thumb'></img></div>
            <div className='right'>
                <p style={{fontFamily:'arial',fontSize:'10px', letterSpacing:'4px',color:'GrayText'}}>PERFUME</p>
                <p className='desc'>Gabrielle Essence Eau De Parfum</p>
                <p className='detail'>Its a detailed invention of the company using latest technologies which provide what the client wants and in absolute necessity</p>

                <div className='price'><p style={{fontSize:'25px',fontWeight:'900',color:'rgb(61, 129, 104)'}}>$149.99</p>
                <p style={{fontSize:'15px'}}><s>$169.99</s></p></div>
                
                <button className='submit'>Add To Cart</button>
            </div>
        </div>
    )
}
export default Perfume;