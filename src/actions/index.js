const setUser = (user) => {
    return{
        type: 'SET_USER',
        payload:user
    }
}

const articlesLoaded = (newArticles) => {
    return{
        type: 'FETCH_ARTICLES_SUCCESS',
        payload: newArticles
    }
}

const articlesRequested = () => {
    return{
        type: 'FETCH_ARTICLES_REQUEST'
    }
}

const articlesError = (error) => {
    return{
        type: 'FETCH_ARTICLES_FAILURE',
        payload:error
    }
}

const fetchArticles = (nys, dispatch) => () => {
    dispatch(articlesRequested())
    nys.getData()
      .then((data)=> dispatch(articlesLoaded(data)))
      .catch((err) => dispatch(articlesError(err)))
}


const articleLoaded = (newArticle) => {
    return{
        type: 'FETCH_ARTICLE_SUCCESS',
        payload: newArticle
    }
}

const articleRequested = () => {
    return{
        type: 'FETCH_ARTICLE_REQUEST'
    }
}

const articleError = (error) => {
    return{
        type: 'FETCH_ARTICLE_FAILURE',
        payload:error
    }
}

export {
    setUser,
    
    fetchArticles,

    articleError,
    articleLoaded,
    articleRequested
}