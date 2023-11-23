import { Frown } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
    return (
        <main className='flex flex-col justify-center items-center gap-y-6 sm:gap-y-8'>
            <Frown className="h-20 w-20 sm:h-40 sm:w-40 text-accent" />
            <p className='text-text text-xl sm:text-2xl text-center font-semibold'>Sorry, this page does not exist</p>
            <Link href="/" className='text-xl sm:text-2xl text-accent border-4 border-accent px-4 py-2 rounded-full cursor-pointer font-semibold hover:border-dotted hover:text-text'>Return Home</Link>
        </main>
    )
}