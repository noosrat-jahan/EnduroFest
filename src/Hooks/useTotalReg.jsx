import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query';

const useTotalReg = () => {
    const [applications, setApplications] = useState([])

    useEffect(()=>{
        axios.get('https://endurofest-server-zeta.vercel.app/all-applications')
        .then(res => {
            console.log(res.data);
            setApplications(res.data)
        })
    },[])

    const singleApplication = applications.map(app => app)
    console.log(singleApplication);

    const { refetch, data: totalRegCount = [] } = useQuery({
        queryKey: ['totalRegCount', user?.email],
        queryFn: async () =>{
            const res = await axios.get(`/cart?email=${user.email}`)
            console.log(res.data);
            return res.data
        }
    })

    return [totalRegCount, refetch]
};

export default useTotalReg;