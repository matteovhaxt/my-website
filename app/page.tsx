"use client"

import Link from 'next/link'
import React, { useState, useEffect, MouseEventHandler } from 'react';
import './globals.css'

export default function Home() {
  return (
    <div className='p-8 sm:h-screen flex flex-col gap-8 justify-between'>
      <div className='flex flex-col sm:flex-row justify-between items-center sm:items-start'>
        <div>
          <p className='py-2 text-4xl font-extrabold'>Matteo von Haxthausen</p>
          <p className='py-6 text-2xl font-semibold'>Software Developer, Student and Tech Enthusiast</p>
        </div>
        <Button text='Contact' path='/icons/send.png' onClick={() => {}} />
      </div>
      <div className='flex flex-col sm:flex-row gap-4 justify-evenly items-center'>
        <div className='sm:w-1/2 text-center'>
          <Typewriter text='Welcome to my website!' />
        </div>
        <div className='sm:w-1/2 flex justify-center'>
          <img className='rounded-full shadow-xl sm:max-h-96 transition ease-in-out delay-150 hover:scale-110' src="/portrait.png" alt="A picture of me" />
        </div>
      </div> 
      <div className='grid gap-8 grid-cols-1 sm:grid-cols-4'>
        <Item title='Portfolio' description='My past work experiences and personal projects.' link='/portfolio' />
        <Item title='Blog' description='A collection of articles, essays and thoughts.' link='/posts' />
        <Item title='About Me' description='Some information on my personal background.' link='/about' />
        <div className='grid gap-2 grid-cols-2'>
          <Social path='/icons/github.png' link='https://github.com/matteovhaxt' />
          <Social path='/icons/stack_overflow.png' link='https://stackoverflow.com/users/13111236/matteo' />
          <Social path='/icons/linked_in.png' link='https://www.linkedin.com/in/matteovonhaxthausen/' />
          <Social path='/icons/x.png' link='https://twitter.com/matteovhaxt' />
        </div>
      </div>
    </div>
  );
}

function Button({ text, path, onClick }: { text: string, path: string, onClick: MouseEventHandler<HTMLButtonElement> }) {
  return (
    <div className='p-4 bg-stone-900 rounded-2xl flex flex-row gap-2 items-center'>
      <img className='h-6 w-6' src={path} alt={"icon from " + path} />
      <button onClick={onClick} className='text-xl font-semibold text-white'>{text}</button>
    </div>
  );
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

function Item({ title, description, link }: { title: string, description: string, link: string }) {
  return (
    <Link href={link}>
      <div className='bg-white p-8 rounded-3xl shadow-xl flex flex-col gap-2 transition ease-in-out delay-150 hover:scale-105'>
        <p className='text-xl font-bold'>{title}</p>
        <p className='text-gray-700'>{description}</p>
      </div>
    </Link>
  );
}

function Social({ link, path}: { link: string, path: string }) {
  return (
    <div className='p-4 bg-stone-900 text-white flex items-center justify-center rounded-xl shadow-lg transition ease-in-out delay-150 hover:scale-105'>
      <a href={link}>
        <img className='h-8 w-8' src={path} alt={"icon from " + path} />
      </a>
    </div>
  );
}