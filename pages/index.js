import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Sidebar from '@/components/Sidebar'
import Trending from '@/components/Trending'
import PostsFeed from '@/components/PostsFeed'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-black min-h-screen text-[#e7e9ea] 
    max-w-[1400px] mx-auto flex'>
      {/* <Sidebar/>  */}
      {/* <PostsFeed /> */}
      <Trending />
    </div>
  )
}
