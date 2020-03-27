import React, { useState } from 'react'
import { Slider } from 'primereact/slider';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext'
import './CCFilters.sass'

const CCFilters = (props) => {
    let [filterFlag, setFilterFlag] = useState(false)

    const options = [
        { label: 'Price (asc)', value: 'price asc' },
        { label: 'Price (desc)', value: 'price desc' },
        { label: 'Date added (asc)', value: 'date_added asc ', },
        { label: 'Date added (desc)', value: 'date_added desc', },
        { label: 'Name (asc)', value: 'name asc' },
        { label: 'Name (desc)', value: 'name desc' },
        { label: 'Changed(24h) (asc)', value: 'percent_change_24h asc' },
        { label: 'Changed(24h) (desc)', value: 'percent_change_24h desc' },
    ]
    const optionTemplate = (option) => {
        return (
            <div className="p-clearfix">
                <span style={{ float: 'left', margin: '.5em .25em 0 0' }}>
                    {option.label.split(" ")[1] === '(asc)' ? <i class="fas fa-long-arrow-alt-up"></i> :
                        <i className="fas fa-long-arrow-alt-down"></i>}
                    {option.label.split(" ")[0]}</span>
            </div>
        );
    }

    const crossClickHandle = () => {
        setFilterFlag(false)
        props.filters.clearFilters()
    }

    const onApplyClickHandler = () => {
        let sort = props.filters.sort ? props.filters.sort.split(" ") : []
        props.clearCC();
        props.getCCItems(1, props.filters.priceMin, props.filters.priceMax, sort[1], sort[0])
    }
    return (
        <>
            {filterFlag ?
                <div className='fltr'>
                    <div className='filters'>
                        <div className='filters__item'>
                            <div style={{ marginTop: '10px', marginLeft: '20px', display: 'flex', flexDirection: 'row' }}>
                                <span style={{ color: '#0495bf', fontSize: '18px', marginTop: '3px' }}>Price Range:</span>
                                <div style={{ marginLeft: '10px' , marginRight: '10px'}}>
                                    <InputText value={props.filters.priceMin} onChange={props.filters.minPriceChangeHandler} />
                                    <InputText value={props.filters.priceMax} onChange={props.filters.maxPriceChangeHandler} />
                                    <Slider max={20000} value={[props.filters.priceMin, props.filters.priceMax]} onChange={event => props.filters.setPrice(event.value)} range={true} style={{ width: '100%' }} />
                                </div>
                            </div>
                        </div>
                        <div className='filters__item' style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{ margin: '10px 10px' }}>
                                <span style={{ color: '#0495bf', fontSize: '18px' }}>Sort By</span>
                            </div>
                            <Dropdown itemTemplate={optionTemplate} options={options} value={props.filters.sort} onChange={e => { props.filters.setSort(e.value) }} style={{ width: '100px', height: '30px', marginTop: '10px', fontSize: '12px' }} />
                        </div>
                        <div    >
                            <button className='filters__btn' onClick={onApplyClickHandler}>Apply</button>
                            <span style={{ color: '#0495bf', fontSize: '18px', marginLeft: '10px'}} onClick={crossClickHandle}><i class="fas fa-times"></i></span>
                        </div>
                    </div>
                </div> :
                <div onClick={() => { setFilterFlag(true) }} className='fltr__filtr-btn'><span><i className="fas fa-filter"></i></span></div>

            }
        </>
    )

}

export default CCFilters