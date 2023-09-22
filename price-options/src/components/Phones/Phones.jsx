import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import axios from 'axios';

const Phones = () => {

    const url = 'https://openapi.programming-hero.com/api/phones?search=iphone'
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        // fetch(url)
        // .then(res=>res.json())
        // .then(data=>setPhones(data.data))

        axios.get(url)
            .then(data => {
                const phoneData = data.data.data;
                const phoneWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                console.log(phoneWithFakeData)
                setPhones(phoneWithFakeData);
            })

    }
        , [])

    return (
        <div>
            <h2 className="text-5xl">Phones:{phones.length}</h2>
            <BarChart width={1200} height={400} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey="name"></XAxis>
                <YAxis dataKey="price"></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;