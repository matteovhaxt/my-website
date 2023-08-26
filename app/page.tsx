import Link from 'next/link'

export default function Home() {
  return (
    <div className='p-8 sm:h-screen flex flex-col justify-between'>
      <p className='py-2 text-4xl font-extrabold'>Matteo von Haxthausen</p>
      <div className='flex flex-col sm:flex-row justify-evenly items-center'>
        <p className='text-2xl font-semibold'>Software Developer, Student and Tech Enthusiast</p>
        <img className='rounded-full shadow-xl sm:max-h-96 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105' src="/portrait.png" alt="A picture of me" />
      </div> 
      <div className='grid gap-8 grid-cols-1 sm:grid-cols-3'>
        <HomeItem title='Portfolio' description='My past work experiences and personal projects.' link='/portfolio' />
        <HomeItem title='Blog' description='A collection of articles, essays and thoughts.' link='/posts' />
        <HomeItem title='About Me' description='Some information on my personal background.' link='/about' />
      </div>
    </div>
  )
}

function HomeItem({ title, description, link }: { title: string, description: string, link: string }) {
  return (
    <Link href={link}>
      <div className='bg-white p-8 rounded-3xl shadow-xl flex flex-col gap-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105'>
        <p className='text-xl font-bold'>{title}</p>
        <p className='text-gray-700'>{description}</p>
      </div>
    </Link>
  )
}