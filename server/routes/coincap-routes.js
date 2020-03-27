const axios = require('axios').default
const { Router } = require('express');
const config = require('config');

const router = Router();
const instance = axios.create({ baseURL: 'https://pro-api.coinmarketcap.com/v1/', headers: { 'Content-Type': 'application/json', 'X-CMC_PRO_API_KEY':config.get('coincap-key') } })

router.get('/cryptoc', async (req, res) => {
    let page = req.query.page !=null ? req.query.page : 1
    let min_price = req.query.price_min 
    let max_price = req.query.price_max
    let sort_dir = req.query.sort_dir 
    let sort = req.query.sort
    try{
    let uri = `cryptocurrency/listings/latest?limit=30&start=${page}${min_price?`&price_min=${min_price}`:''}${max_price?`&price_max=${max_price}`:''}${sort_dir?`&sort_dir=${sort_dir}`:''}${sort?`&sort=${sort}`:''}`
    instance.get(uri)
    .then(response => res.status(200).json(response.data.data))
    .catch(error => res.status(400).json({uri, error}))
    }
    catch(e){console.log(e)}
})


module.exports = router