

const Favorites = ({ phone }) => {
    console.log(phone);
    const { brand, image, phone_name, mainFeatures } = phone || {}
    return (
        <div className="flex justify-center items-center h-[90vh] mt-20 lg:mt-0">
            <div className="relative w-96 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative flex justify-center mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}
                        className="h-full  object-cover"
                    />
                </div>
                <div className="p-6">
                    <div className="mb-2  items-center justify-between">
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            {phone_name}
                        </p>
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            {brand}
                        </p>
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            $ 100
                        </p>
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            {mainFeatures.storage}
                        </p>
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            {mainFeatures.displaySize}
                        </p>
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            {mainFeatures.chipSet}
                        </p>
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            {mainFeatures.memory}
                        </p>
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            $ 100
                        </p>
                    </div>

                </div>
                <div className="p-6 pt-0">

                    <button
                      
                        className="block w-full btn btn-neutral select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        Add to Favorites
                    </button>

                </div>
            </div>


        </div>
    );
};

export default Favorites;