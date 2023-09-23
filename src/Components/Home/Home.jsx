
import { useLoaderData } from 'react-router-dom';
import Phones from '../Pages/Phones/Phones';

const Home = () => {
    const phones = useLoaderData()
    const mainData=phones.data;
    // console.log(mainData);


    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 my-16'>
            {
                mainData?.map(phone=> <Phones key={phone.id} phone={phone}></Phones>)
            }
        </div>
    );
};

export default Home;