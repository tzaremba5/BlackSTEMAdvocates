import React from 'react'
import Link from 'next/link'

function Logo() {
  return (
    <div>
      <Link href="/">
        <h1 className="px-4 py-4 font-mono font-bold text-[25px]
         select-none cursor-pointer lg:text-3xl"> BLACK <br/> STEM <br/> ADVOCATES <br/> PROJECT </h1>
      </Link>
    </div>
  )
}

export default Logo