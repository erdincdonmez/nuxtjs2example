import Vuex from "vuex";

const createStore = ()=>{
    return new Vuex.Store({
        //namespaced: true,
        state:{
            fetchedPosts:[],

        },
        getters:{
            getPosts(state){
                return state.fetchedPosts
            }
        },
        mutations:{
            setPosts(state, post){
                state.fetchedPosts = post
            }
        },
        actions:{
            setPosts(vuexContext,posts){
                vuexContext.commit("setPosts", posts)
            }
        },
    }
    )
}
export default createStore