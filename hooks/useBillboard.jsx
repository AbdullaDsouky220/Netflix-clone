import useSWR from 'swr'
import fetcher from '../lib/fetcher'

const useBillboard=()=>{
    const {data,error,isloading}=useSWR('/api/random',fetcher,{
        refreshInterval:false,
        revalidateOnFocus:false,
        revalidateOnMount:false
    })
    return {
        data,error,
        isloading
    }
}
export default useBillboard