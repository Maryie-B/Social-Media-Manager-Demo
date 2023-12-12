import {create} from 'zustand';
import axiosInstance from '../axiosConfig';

const useAllPostsStore = create((set) => ({
    posts: [],
    isLoading: false,
    singlePost: null,
    fetchPosts: async () => {
        set({ isLoading: true });
        try {
            const response = await axiosInstance.get('http://127.0.0.1:8000/posts/');
            const data = await response.data;
            console.log(data);
            set({ posts: [...data], isLoading: false });
        } catch (error) {
            console.log(error.msg);
            set({ isLoading: false });
        }
    },
    fetchSinglePost: async (id) => {
        set({ isLoading: true });
        try {
            const response = await axiosInstance.get(`http://127.0.0.1:8000/post/${id}`);
            const data = await response.data;
            set({ singlePost: data, isLoading: false });
        } catch (error) {
            console.log(error.msg);
            set({ isLoading: false });
        }
    },
}));

export default useAllPostsStore;

