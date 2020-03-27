import React from 'react'
import './CCcard.sass'

const CCcard = (props) => {
    return (

        <div className='card-holder'>
            <div className='card-holder__name'>
                <span>{props.name} </span>
                <span>({props.symbol})</span>
            </div>
            <div className='info'>
                <div>
                    <div className='price'>
                        <span className='price__label'>Price: </span>
                        <span className='price__value'>{props.price}</span>
                    </div>
                    <div className='change'>
                        <span className='change__label'>Change(24h): </span>
                        <span className='change__value'> 
                            {props.change > 0 ?
                            <i style={{ color: '#00cc00' }} className="fas fa-long-arrow-alt-up"></i>: 
                            <i style={{ color: 'red' }} className="fas fa-long-arrow-alt-down"></i>
                            }
                         {props.change}</span>
                    </div>
                </div>
                <div style={{width:64, height:64}}>
                    <img alt='' src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${props.cur_id}.png`} />
                </div>
            </div>
        </div>
    )
}

export default CCcard