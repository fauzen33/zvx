import React from 'react'
import Modal from '../components/Modal'

function SignIn() {
	const [modalActive, setModalActive] = React.useState(false)
	const [modalActiveReg, setModalActiveReg] = React.useState(false)
	return (
		<div className='flex justify-center items-center h-screen bg-[#222831]'>
			<div className='flex flex-col w-3/4 items-center'>
				<h1 className='text-5xl font-bold pb-10 text-[#DDE6ED] selection:bg-[#00ADB5]'>
					Самый конченый пет проект.
				</h1>
				<p className='text-2xl m-5 text-[#DDE6ED] selection:bg-[#00ADB5]'>
					Станьте такими же кончеными прямо сейчас!
				</p>
				<div>
					<button
						className='p-2 w-52 bg-[#393E46] text-white rounded-lg m-5 hover:bg-[#00ADB5] transition-all active:bg-white '
						onClick={() => setModalActive(true)}
					>
						Войти
					</button>
					<Modal
						active={modalActive}
						setActive={setModalActive}
						children={
							<div className='flex items-center justify-center flex-col'>
								<h2 className='text-white font-bold text-2xl mb-10 selection:bg-[#00ADB5]'>
									Войти в ZVX
								</h2>
								<input
									placeholder='Почта или @ник'
									type='text'
									autoComplete='on'
									className=' bg-[#393E46] rounded p-2 m-5 w-3/4 text-white transition-all border-none hover:bg-[#505763] outline-none '
								/>
								<input
									placeholder='Пароль'
									type='password'
									autoComplete='on'
									className=' bg-[#393E46] rounded p-2 m-5 w-3/4 text-white transition-all border-none hover:bg-[#505763] outline-none '
								/>
								<button className='p-2 w-3/4 bg-[#393E46] text-white rounded-lg m-5  hover:bg-[#505763] transition-all active:bg-[#00ADB5]'>
									Войти
								</button>
								<p className='text-slate-500 underline cursor-pointer'>
									забыли пароль?
								</p>
							</div>
						}
					/>
					<button
						className='p-2 w-52 bg-[#393E46] text-white rounded-lg m-5  hover:bg-[#00ADB5] transition-all active:bg-white'
						onClick={() => setModalActiveReg(true)}
					>
						Зарегистрироваться
					</button>
					<Modal
						active={modalActiveReg}
						setActive={setModalActiveReg}
						children={
							<div className='flex items-center justify-center flex-col'>
								<h2 className='text-white font-bold text-2xl mb-10 selection:bg-[#00ADB5]'>
									Регистрация в ZVX
								</h2>
								<input
									placeholder='Почта'
									type='text'
									autoComplete='on'
									className=' bg-[#393E46] rounded p-2 m-5 w-3/4 text-white transition-all border-none hover:bg-[#505763] outline-none '
								/>
								<input
									placeholder='@уникальныйНик'
									type='text'
									autoComplete='on'
									className=' bg-[#393E46] rounded p-2 m-5 w-3/4 text-white transition-all border-none hover:bg-[#505763] outline-none '
								/>
								<input
									placeholder='Пароль'
									type='password'
									autoComplete='on'
									className=' bg-[#393E46] rounded p-2 m-5 w-3/4 text-white transition-all border-none hover:bg-[#505763] outline-none '
								/>
								<input
									placeholder='Пароль еще раз'
									type='password'
									autoComplete='on'
									className=' bg-[#393E46] rounded p-2 m-5 w-3/4 text-white transition-all border-none hover:bg-[#505763] outline-none '
								/>
								<button className='p-2 w-3/4 bg-[#393E46] text-white rounded-lg m-5  hover:bg-[#505763] transition-all active:bg-[#00ADB5]'>
									Далее
								</button>
							</div>
						}
					/>
					<div className='flex flex-row m-5 w-auto py-2 px-4 rounded-xl transition-all cursor-default hover:bg-slate-600 '>
						<img
							src='/imgs/Broodmother_icon.jpg'
							alt='bruda'
							className='h-9 rounded-lg'
						/>
						<p className='text-[#DDE6ED] ml-2 text-lg'>
							<span className='text-pink-400 font-bold'>bruda</span>: я вахуй
						</p>
					</div>
					<div className='flex flex-row m-5 w-auto py-2 px-4 rounded-xl transition-all cursor-default hover:bg-slate-600 '>
						<img
							src='/imgs/Pudge_icon.jpg'
							alt='puj'
							className='h-9 rounded-lg'
						/>
						<p className='text-[#DDE6ED] ml-2 text-lg'>
							<span className='text-yellow-400 font-bold'>puj</span>: я тож
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignIn
