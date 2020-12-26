import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {
    articleLoaded,
    articleRequested,
    articleError
} from '../../../actions'
import compose from '../../../utils/compose'
import ErrorIndicator from '../../error-indicator'
import { withNyapiService } from '../../hoc'
import Loader from '../../loader'


const _ = require('./article.module.scss')

interface IArticle{
    id:any,
    nys:any,
    loading:boolean,
    error:any,
    article:any,
    articleLoaded:any, 
    articleRequested:any,
    articleError:any
}


const Article:React.FC<IArticle> = (props) =>{
    const [redirect, setRedirect] = useState(false)
    const [loadingKastil, setLoadingKastil] = useState(true)
    const {
        nys,
        loading,
        error,
        id,
        article,
        articleLoaded,
        articleError,
        articleRequested
    } = props
 
    useEffect(()=> {
        setLoadingKastil(true)
        articleRequested()
        nys.getArticle(id)
            .then((data)=>{
                articleLoaded(data)
                setLoadingKastil(false)
            })
            .catch((err)=>{
                articleError(err)
                setLoadingKastil(false)
            })
    },[id])

    if(error){
        return <ErrorIndicator/>
    }

    if(loading){
        return <Loader/>
    }
    if(loadingKastil){
        return <Loader/>
    }

    if(redirect){
        window.location.assign(article.web_url)
    }

    return(
        <div>
            <div className = {_.article}>
            <h3>
                {article.headline.main}
            </h3>
            <div className = {_.description}>
               {article.lead_paragraph}
            </div>
            <div className = {_.tags}>
               {article.keywords.map((keyword)=>{
                   return <div key ={keyword.value}>{keyword.value}</div>
               })}
            </div>
            <div className = {_.date}>
               {article.pub_date.substr(0,10)}
            </div>
           
            <button onClick = {()=>setRedirect(true)} className = {_.moreButton}>
                Read more
            </button>
            </div>
        </div>
    )
} 

const mapStateToProps = (state) => {
    return{
        article: state.article,
        error: state.articleError,
        loading: state.articleLoading
    }
}

const mapDispatchToProps = {
    articleLoaded, 
    articleRequested,
    articleError
}

export default
compose(
    withNyapiService(),
    connect(mapStateToProps, mapDispatchToProps) 
) (Article)