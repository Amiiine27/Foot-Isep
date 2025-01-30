import React from 'react'
import Link from 'next/link';

function LinkElement({label, url}) {
  return (
    <>
        <Link href={url}>
            <p className="text-xl flex items-center justify-center hover:text-gl ease-in-out duration-200">{label}</p>
        </Link>
    </>
    
  )
}

export default LinkElement