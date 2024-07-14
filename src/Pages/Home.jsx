import React from 'react'
import { Header } from '../components/Header'
import { Sidemenu } from '../components/Sidemenu'
import { Posts } from '../components/Posts'
import { UpdatesMenu } from '../components/UpdatesMenu'
import { useDispatch } from 'react-redux'
import { fetchPosts } from '../store/ducks/posts/actionCreators'
import { useSelector } from 'react-redux'
import { selectPostsItems } from '../store/ducks/posts/selectors'
import { AddPostForm } from '../components/AddPostForm'


export const Home = () => {
	const dispatch = useDispatch()
	const posts = useSelector(selectPostsItems);

	React.useEffect(() => {
		dispatch(fetchPosts())
	}, [])
	return (
		<div className='bgDiv bg-[#222831] '>
			<Header className=' fixed-top top-0 w-full' />
			<div className=' flex w-100 justify-center items-start m-auto w-full bg-[#222831]'>
				<div className='side-block'>
					<Sidemenu />
				</div>
				<div className=' flex w-1/3 mx-1 my-2 flex-col'>
					<AddPostForm />
				{posts.map((postss) => (
					<Posts key={postss._id} text={postss.text} user={postss.user} />
				))}
				</div>

				<div className='updates-menu'>
					<UpdatesMenu />
				</div>
			</div>
		</div>
	)
}
