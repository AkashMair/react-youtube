import axios from 'axios'

const KEY = 'AIzaSyA-u72gV15amjMJ64Wd4X-ALtaO-_V1xEo';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults: 5,
        key: KEY
    }

})