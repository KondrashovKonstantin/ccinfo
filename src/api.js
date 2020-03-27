import * as axios from 'axios'

const instance = axios.create({ baseURL: '/api/coincap', headers: { 'Content-Type': 'application/json'} })

export const API = {
    getCClist(page, min_price, max_price,sort_dir,sort) {
        return instance.get(`cryptoc?page=${page}${min_price?`&price_min=${min_price}`:''}${max_price?`&price_max=${max_price}`:''}${sort_dir?`&sort_dir=${sort_dir}`:''}${sort?`&sort=${sort}`:''}`).then(response => response)
    },

}