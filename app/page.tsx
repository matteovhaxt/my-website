"use client"

import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import './globals.css'

export default function Home() {
  return (
    <div className='p-8 sm:h-screen flex flex-col gap-8 justify-between'>
      <div>
        <p className='py-2 text-4xl font-extrabold'>Matteo von Haxthausen</p>
        <p className='py-6 text-2xl font-semibold'>Software Developer, Student and Tech Enthusiast</p>
      </div>
      <div className='flex flex-col sm:flex-row gap-4 justify-evenly items-center'>
        <div className='sm:w-1/2 text-center'>
          <Typewriter text='Welcome to my website!' />
        </div>
        <div className='sm:w-1/2 flex justify-center'>
          <img className='rounded-full shadow-xl sm:max-h-96 transition ease-in-out delay-150 hover:scale-110' src="/portrait.png" alt="A picture of me" />
        </div>
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
      <div className='bg-white p-8 rounded-3xl shadow-xl flex flex-col gap-2 transition ease-in-out delay-150 hover:scale-105'>
        <p className='text-xl font-bold'>{title}</p>
        <p className='text-gray-700'>{description}</p>
      </div>
    </Link>
  )
}

function Typewriter({ text }: { text: string }) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 100);
  
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, 100, text]);

  return (
    <span className='hero-font text-4xl font-extrabold'>
      {currentText} {currentIndex != text.length ? '_' : ''}
    </span>
  );
}