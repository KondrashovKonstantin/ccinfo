import React, { useEffect, useState } from 'react'
import './CClist.sass'
import CCcard from './CCcard/CCcard'
import Preloader from '../common/Preloader/Preloader'
import CCFilters from './CCFilters/CCFilters'


const CClist = (props) => {
    let [priceMax, setPriceMax] = useState(20000)
    let [priceMin, setPriceMin] = useState(0)
    let [sort, setSort] = useState()

    useEffect(() => {
        props.getCCItems(props.startItem)
    }, [])
    
    let cardsArray = props.items.map(current => {
        return <CCcard key={current.id} cur_id={current.id} name={current.name} symbol={current.symbol} price={current.quote.USD.price.toFixed(5)} change={current.quote.USD.percent_change_24h.toFixed(3)} />
    }) 
    const setPrice = (arr) => {
        setPriceMin(arr[0])
        setPriceMax(arr[1])
    }
    const minPriceChangeHandler = (event) => {
        if (event.target.value >= priceMax) {
            setPriceMin(priceMax)
        }
        else {
            setPriceMin(event.target.value)
        }
    }
    const maxPriceChangeHandler = (event) => {
        if (event.target.value <= priceMin) {
            setPriceMax(priceMin)
        }
        else {
            setPriceMax(event.target.value)
        }
    }
    const clearFilters = () =>{
        setSort()
        setPriceMin(0)
        setPriceMax(20000)
    }
    const showMoreClickHandler = () =>{
        let sort_type = sort? sort.split(" ")[1]: undefined
        let sort_value = sort?  sort.split(" ")[0]: undefined
        props.getCCItems(props.startItem, priceMin, priceMax, sort_type, sort_value ) 
    }
    return (
        <>
            <CCFilters
            filters={{priceMax, priceMin, sort, setPrice,minPriceChangeHandler,maxPriceChangeHandler, setSort,clearFilters}}
            getCCItems={props.getCCItems} 
            clearCC={props.clearCC} 
            startItem={props.startItem}/>
            <div className='cc-list'>
                {cardsArray}
            </div>
            <div className='shmore-btn'>
                {props.isFetching ? <Preloader /> :
                    <button onClick={showMoreClickHandler}>Show More!</button>}
            </div>
        </>
    )
}

export default CClist
