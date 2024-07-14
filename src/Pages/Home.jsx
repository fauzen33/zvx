import React from 'react'
import { Header } from '../components/Header'
import { Sidemenu } from '../components/Sidemenu'
import { Posts } from '../components/Posts'
import { UpdatesMenu } from '../components/UpdatesMenu'

export const Home = () => {
	return (
		<div className='bgDiv bg-[#222831] '>
			<Header className=' fixed-top top-0 w-full' />
			<div className=' flex w-100 justify-center items-start m-auto w-full bg-[#222831]'>
				<div className='side-block'>
					<Sidemenu />
				</div>

				<Posts />
				<div className='updates-menu'>
					<UpdatesMenu />
				</div>
			</div>
		</div>
	)
}
