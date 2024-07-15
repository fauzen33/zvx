import axios from 'axios'
import { PostsState } from '../../store/ducks/posts/contracts/state'

export const PostsApi = {
	fetchPosts(): Promise<PostsState['items']> {
		return axios
			.get('https://6694d9a54bd61d8314c8e569.mockapi.io/postss')
			.then(({ data }) => data)
	},
}
