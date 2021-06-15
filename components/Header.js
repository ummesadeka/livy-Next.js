import React from 'react'
import Image from 'next/image'

function Header() {
    return (
        <header className=''>
            <h1>header</h1>
            <Image 
            className='object-contain'
              src ="/livy.jpg"
              width={200}
              height={100}
             />
        </header>
    )
}

export default Header
