import { Link } from "react-router-dom";


const Phones = ({ phone }) => {

    const { brand, image, phone_name, slug } = phone || {}

    console.log(phone);
    return (
        <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative flex justify-center mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                <img
                    src={image}
                    className="h-full  object-cover"
                />
            </div>
            <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                    <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                        {phone_name}
                    </p>
                    <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                        {brand}
                    </p>
                    <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                        $ 100
                    </p>
                </div>

            </div>
            <div className="p-6 pt-0">
                <Link to={`/${slug}`}>
                    <button
                        className="block w-full btn btn-neutral select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                       View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Phones;