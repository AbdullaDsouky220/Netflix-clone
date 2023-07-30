import useSWR from 'swr'
import fetcher from '../lib/fetcher'

const useBillboard=()=>{
    const {data,error,isloading}=useSWR('/api/movies',fetcher,{
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })
    return {
        data,error,
        isloading
    }
}
export default useBillboard