// import Image from 'next/image'
// import React from 'react'


// function OfferCard() {
//     return (
//         <div className='w-full'>
//             <div>
//                 <Image />
//                 <h3>E-commerce Development</h3>
//                 <p>We offer site development, hosting, and other services for a seamless online business experience.</p>
//             </div>
//         </div>
//     )
// }

// export default OfferCard    

    import Image from 'next/image';
    import React from 'react';

    function OfferCard() {
        return (
            <div className="w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 px-4 mb-8">
                <div className="border border-gray-200 rounded-lg p-4">
                    <Image 
                        src="/path/to/your/image.jpg" // Provide the path to your image
                        alt="E-commerce Development" // Provide an appropriate alt text
                        width={300} // Specify the width of the image
                        height={200} // Specify the height of the image
                    />
                    <h3 className="text-lg font-semibold mt-4">E-commerce Development</h3>
                    <p className="text-sm text-gray-600 mt-2">We offer site development, hosting, and other services for a seamless online business experience.</p>
                </div>
            </div>
        );
    }

    export default OfferCard;
