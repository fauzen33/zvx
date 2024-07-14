import React from 'react'

export const AddPostForm = () => {
	return (
		<div className='bg-[#393E46] w-full h-fit rounded-lg flex-col'>
			<div className='flex flex-row'>
				<img
					src='/imgs/kot.jpg'
					alt='avatar'
					className='max-h-9 m-1 rounded-full '
				/>
				<textarea
					name='newPost'
					id=''
					placeholder='Что у вас нового?'
					className='w-full m-2 bg-[#393E46] text-white min-w-10 min-h-8  '
				></textarea>
			</div>
			<div className='flex flex-row-reverse items-center'>
				<button className='text-white px-2 py-1 bg-[#222831] m-2 rounded-xl transition-all duration-300 active:bg-white cursor-pointer hover:bg-[#00ADB5]'>
					Опубликовать
				</button>
				<img src='/imgs/icons/camera.png' alt='photo' className='h-6 mx-1' />
				<img src='/imgs/icons/video.png' alt='photo' className='h-6 mx-1' />
				<img src='/imgs/icons/music.png' alt='photo' className='h-6 mx-1' />
			</div>
		</div>
	)
}
