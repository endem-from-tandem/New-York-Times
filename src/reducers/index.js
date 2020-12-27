const initialState = {
    user:null,
    articles:[],
    loading:true,
    error:null,

    article:null,
    articleLoaded:true,
    articleError:null,
}

const reducer = (state = initialState, action) => {
    console.log(action.type)
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user:action.payload
            }

        case 'FETCH_ARTICLES_REQUEST':
            return{
                ...state,
                articles:[],
                loading:true,
                error:null
            }
        case 'FETCH_ARTICLES_SUCCESS':
            return{
                ...state,
                articles:action.payload,
                loading:false
            }
        case 'FETCH_ARTICLES_FAILURE':
            return{
                ...state,
                loading:false,
                error:action.payload
            }

         case 'FETCH_ARTICLE_REQUEST':
            return{
                ...state,
                articleError:null,
                article:null,
                articleLoading:true
            }
        case 'FETCH_ARTICLE_SUCCESS':
            return{
                ...state,
                article:action.payload,
                articleLoading:false
            }
        case 'FETCH_ARTICLE_FAILURE':
            return{
                ...state,
                articleLoading:false,
                articleError:action.payload
            }

        default:
            return state
    }
}

export default reducer