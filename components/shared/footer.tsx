'use client'
import { ChevronUp } from 'lucide-react'
import Link from 'next/link'
import { APP_NAME } from '@/lib/constants'

import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer className='bg-black  text-white underline-link'>
      <div className='w-full'>
        <Button
          variant='ghost'
          className='bg-gray-800 w-full  rounded-none '
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronUp className='mr-2 h-4 w-4' />
          Back to top
        </Button>
        </div>
      <div className='p-4'>
        <div className='flex justify-center  gap-3 text-sm'>
          <Link href='/page/conditions-of-use'>
            Conditions of Use
          </Link>
          <Link href='/page/privacy-policy'>Privacy Notice</Link>
          <Link href='/page/help'>Help</Link>
        </div>
        <div className='flex justify-center text-sm'>
          <p> © 2000-2024, {APP_NAME}, Inc. or its affiliates</p>
        </div>
        <div className='mt-8 flex justify-center text-sm text-gray-400'>
          123, Mainstreet, Downtown, KE,  zip 24355 | +254 787 043 864
        </div>
      </div>
    </footer>
  )
}