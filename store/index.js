import Vuex from "vuex";

const createStore = ()=>{
    return new Vuex.Store({
        namespaced: true,
        state:{
            fetchedPosts:[]
        },
        mutation:{
            setPosts(state, post){
                state.fetchedPosts = post
            }
        },
        actions:{
            setPosts(vuexContext,posts){
                vuexContext.commit("setPosts", posts)
            }
        },
    
        getters:{
            getPosts(state){
                return state.fetchedPosts
            }
        }
    }
    )
}
export default createStore