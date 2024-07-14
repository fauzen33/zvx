import React from 'react'

export const Sidemenu = () => {
  return (
		<div className='h-fit w-max mx-1'>
			<div className=' text-white'>
				<h1 className='flex m-2 bg-[#393E46] py-2 rounded-md px-3 transition-all active:bg-white cursor-pointer hover:bg-[#00ADB5]'>
					<img src='/imgs/icons/home.png' alt='home' className='w-6 mr-2 ' />
					Главная
				</h1>
				<h1 className='flex m-2 bg-[#393E46] py-2 rounded-md px-3 transition-all active:bg-white cursor-pointer hover:bg-[#00ADB5]'>
					<img
						src='/imgs/icons/search.png'
						alt='search'
						className='w-6 mr-2 '
					/>
					Поиск
				</h1>
				<h1 className='flex m-2 bg-[#393E46] py-2 rounded-md px-3 transition-all active:bg-white cursor-pointer hover:bg-[#00ADB5]'>
					<img src='/imgs/icons/bell.png' alt='bell' className='w-6 mr-2 ' />
					Уведомления
				</h1>
				<h1 className='flex m-2 bg-[#393E46] py-2 rounded-md px-3 transition-all active:bg-white cursor-pointer hover:bg-[#00ADB5]'>
					{' '}
					<img
						src='/imgs/icons/messages.png'
						alt='messages'
						className='w-6 mr-2 '
					/>
					Сообщения
				</h1>
				<h1 className='flex m-2 bg-[#393E46] py-2 rounded-md px-3 transition-all active:bg-white cursor-pointer hover:bg-[#00ADB5]'>
					{' '}
					<img
						src='/imgs/icons/bookmark.png'
						alt='mark'
						className='w-6 mr-2 '
					/>
					Закладки
				</h1>
				<h1 className='flex m-2 bg-[#393E46] py-2 rounded-md px-3 transition-all active:bg-white cursor-pointer hover:bg-[#00ADB5]'>
					{' '}
					<img src='/imgs/icons/list.png' alt='list' className='w-6 mr-2 ' />
					Список
				</h1>
				<h1 className='flex m-2 bg-[#393E46] py-2 rounded-md px-3 transition-all active:bg-white cursor-pointer hover:bg-[#00ADB5]'>
					<img src='/imgs/icons/user.png' alt='profile' className='w-6 mr-2 ' />
					Профиль
				</h1>
			</div>
		</div>
	)
}
