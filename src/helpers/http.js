import {default as axios} from 'axios'

export const getData = async(url, history)=>{
    try{
        const data = await axios.get(url)
        return data
    }catch(e){
        if(e.message.includes('404')){
            history.push('/404')
        }
    }
}

export default axios