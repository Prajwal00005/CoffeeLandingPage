import star from "../assets/Star_fill.svg"
import emptyStar from "../assets/Star.svg"

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

interface CoffeeCardProps {
    coffeeData: CoffeeItem
}

const CofeeCard: React.FC<CoffeeCardProps> = ({ coffeeData }) => {
    return (
        <>
            <div className="w-full p-4 ">
                <div className="relative rounded-lg">
                    <img
                        src={coffeeData.image}
                        alt="Some description"
                        className="h-50 w-full object-cover rounded-lg"
                    />
                    {coffeeData.popular ?
                        <div className="bg-yellow-500 px-3 py-1 rounded-lg text-sm md:text-xl text-gray-900 font-semibold absolute top-2 left-2">
                            Popular
                        </div> : null}

                    <div className='text-white'>
                        <div className='  flex justify-between mt-2 px-3'>
                            <span className='font-semibold md:font-bold md:text-xl '>{coffeeData.name}</span>
                            <span className='bg-blue-300 px-1 md:px-2 rounded-xl 
                                      font-medium  md:font-medium text-black'>{coffeeData.price}</span>
                        </div>
                        <div className='mt-2 md:mt-3 flex'>
                            <img src={coffeeData.rating > 4 ? star : emptyStar} alt="rating star" />

                            <span className='text-gray-200 font-medium  ml-3 mr-2'>{coffeeData.rating}{"   "}</span>

                            <span className='text-gray-400 font-normal md:font-medium '>votes({coffeeData.votes})</span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CofeeCard
