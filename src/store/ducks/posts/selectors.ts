import { PostsState } from "./contracts/state";

export const getSelectPosts = (state: PostsState) => state.items;