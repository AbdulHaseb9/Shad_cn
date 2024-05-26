import Link from 'next/link'
import React from 'react'
import { Button } from './button'

export default function Navigatetohome() {
    return (
        <div className='my-10 text-center'>
            <Link href={'/'}><Button>Go to Home</Button></Link>
        </div>
    )
}
