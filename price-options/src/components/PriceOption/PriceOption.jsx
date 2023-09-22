import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {

    const { name, price, features } = option;

    return (
        <div className='bg-blue-600 ml-2 flex flex-col rounded-md p-6 text-white'>
            <h2>
                <span className='font-extrabold text-center text-7xl'>{price}</span>
                <span className='text-3xl'></span>
            </h2>
            <h3 className='text-5xl text-center my-8'>
                {name}
            </h3>

            <div className='pl-6 flex-grow'>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className='bg-lime-500 p-3 font-bold rounded-lg hover:bg-green-800 my-4 w-full'>Buy Now</button>

        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object

}

export default PriceOption;