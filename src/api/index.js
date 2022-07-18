import axios from 'axios'


export const getPlacesData = async (type, sw, ne)=>{
    const URL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`
    try{
        const {data: {data}} = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                // restaurant_tagcategory_standalone: '10591',
                // restaurant_tagcategory: '10591',
                // limit: '30',
                // currency: 'USD',
                // open_now: 'false',
                // lunit: 'km',
                // lang: 'en_US'
            },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        })
        return data
    }catch(error){
        console.log(error)
    }
}

export const getWeatherData = async (lat,lng)=>{
    try {
        const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find',{
            params: {lon: lng, lat: lat,},
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
                'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
            }
        })
        return data
    } catch (error) {
        console.log(error)
    }
}
