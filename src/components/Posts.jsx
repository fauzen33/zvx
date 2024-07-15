import React from 'react'


export const Posts = (postss) => {
	return (
		<div>
			<div className='bg-[#393E46] w-full h-fit rounded-lg my-2 p-3 flex flex-col'>
				<div className='flex flex-row items-center'>
					<img src={postss.avatarUrl} className='h-10  rounded-full' />
					<div className='flex flex-col'>
						<h1 className='text-white text-base mx-3 my-0'>
							{postss.fullname}
						</h1>
						<h2 className='text-slate-400  mx-3 text-xs'>@{postss.username}</h2>
						<p className='text-slate-400  mx-3 text-xs'>Сегодня в 14:88</p>
					</div>
				</div>
				<div>
					<p className='text-white text-base'>{postss.text}</p>
					{/* <img
							src='/imgs/Broodmother_icon.jpg'
							alt='post'
							className='w-full mt-2 rounded-lg'
						/> */}
				</div>
				<div className='flex flex-row items-center mt-2 gap-1'>
					<img src='/imgs/icons/like.png' alt='like' className='w-6' />
					<p className='text-white text-base mx-1'>1488</p>
					<img src='/imgs/icons/messages.png' alt='comment' className='w-6' />
					<p className='text-white text-base mx-1'>911</p>
				</div>
			</div>
		</div>
	)
}
