import React from 'react'
import './Header.css'

export const Header = () => {
  return (
		<div className='header-container '>
			<div>
				<h1 className='text-white text-3xl font-bold p-2 mx-2'>ZVX</h1>
			</div>
			<div className='justify-end flex-row flex'>
				<input
					type='text'
					placeholder='Поиск'
					className='m-2 bg-[#393E46] px-1 mx-3 h-3/5 rounded-md text-white'
				/>
				<img
					src='/imgs/kot.jpg'
					alt='avatar'
					className='h-10 rounded-full mr-5 ml-3 mt-1'
				/>
			</div>
		</div>
	)
}
