import { useEffect, useState } from 'react';
import bgCafe from '../assets/bg-cafe-lg.jpg';
import CofeeCard from './CofeeCard';

interface CoffeeItem {
    id: number;
    name: string;
    image: string;
    price: string; // consider changing to number if you plan to do calculations
    rating: number;
    votes: number;
    popular: boolean;
    available: boolean;
}

const Cofee: React.FC = () => {
    const [coffeeList, setCoffeeList] = useState<CoffeeItem[]>([]);

    const fetchData = async () => {
        try {
            const response = await fetch("https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json");
            const data = await response.json();
            setCoffeeList(data);
        } catch (error) {
            console.error("Error fetching coffee data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>

            <div className="h-screen w-full ">
                <div className="h-70 w-full">
                    <img src={bgCafe} alt="" className='h-full w-full' />
                </div>
                <div className='container mx-auto h-auto relative -top-30 rounded-2xl p-5' style={{ backgroundColor: '#1B1D1F' }}>

                    <div className=' text-center pt-20'>
                        <h1 className='font-bold text-white text-2xl lg:text-3xl'>Our Collection</h1>
                        <p className='text-gray-400 text-sm lg:text-xl w-[80%] lg:w-[50%] mx-auto mt-5'>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
                        </p>
                        <div className='mt-3 md:mt-8 flex gap-5 justify-center'>
                            <button className='text-white font-semibold text-sm md:text-lg px-2 py-1 bg-gray-600 rounded-lg'>All Products</button>

                            <button className='text-white font-semibold text-sm md:text-lg '>All Products</button>
                        </div>
                    </div>

                    <div className='mt-10  w-[90%] mx-auto h-auto'>

                        <div className='grid md:grid-cols-2 lg:grid-cols-3 '>
                            {coffeeList.map((coffee) => (
                                <CofeeCard key={coffee.id} coffeeData={coffee} />
                            ))}

                        </div>

                    </div>

                </div>
            </div >
        </>
    )
}

export default Cofee
