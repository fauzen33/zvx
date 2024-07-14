import axios from 'axios'
import { PostsState } from '../../store/ducks/posts/contracts/state'

export const PostsApi = {
	fetchPosts(): Promise<PostsState['items']> {
		return axios.get('https://trycode.pw/c/7CZU9.json').then(({ data }) => data)
	},
}
