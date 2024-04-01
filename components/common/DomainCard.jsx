// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// function DomainCard() {
//     return (
//         <div className=' flex flex-col gap-[24px] w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 px-4 mb-8'>
//             <div>
//                 <h1>
//                     E-commerce
//                 </h1>
//                 <h2>Amazon,Flipkart</h2>
//             </div>
//             <div> <Image alt='img' /></div>
//             <div className='pt-[16px] pb-[16px]'>
//             <Link href='/'>Veiw case study for instakart</Link>
//             </div>
            
//         </div>
//     )
// }

// export default DomainCard

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function DomainCard() {
    return (
        <div className='flex flex-col gap-[16px]  w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 px-4 mb-8'>
            
            <div className='flex flex-col gap-[24px]'>
            <div>
                <h1 className='text-xl font-semibold'>
                    E-commerce
                </h1>
                <h2 className='text-lg font-normal'>Amazon, Flipkart</h2>
            </div>
            <div>
                <Image  alt='Image' />
            </div>
            </div>
           
            <div className='pt-4 pb-4 '>
                <Link href='/'>
                  View case study for Instakart
                </Link>
            </div>
        </div>
    )
}

export default DomainCard
