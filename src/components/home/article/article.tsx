import React, {Component } from 'react'
import { connect } from 'react-redux'
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

interface IArticleProps{
    id:string,
    nys:any,
    loading:boolean,
    error:boolean,
    article:any,
    articleLoaded:any, 
    articleRequested:any,
    articleError:any
}

class Article extends Component<IArticleProps>{
    state = {
        redirect:false
    }
    componentDidMount(){
        const {
            id,
            nys,
            articleError,
            articleLoaded,
            articleRequested
        } = this.props

        articleRequested()
        nys.getArticle(id)
            .then((data)=>{
                articleLoaded(data)
             
            })
            .catch((err)=>{
                articleError(err)
            })
    }

    componentDidUpdate(prevProps) {
        if (this.props.id !== prevProps.id) {
            const {
                id,
                nys,
                articleError,
                articleLoaded,
                articleRequested
            } = this.props
    
            articleRequested()
            nys.getArticle(id)
            .then((data)=>{
                articleLoaded(data)
                
            })
            .catch((err)=>{
                articleError(err)
            })
        }
    }

    render(){
        const {
            error,
            loading,
            article
        } = this.props
        const {redirect} = this.state
        
        if(error){
            return <ErrorIndicator/>
        }
    
        if(loading){
            return <Loader/>
        }
        
        if(!article) {
            return null
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
               
                <button onClick = {()=>this.setState({redirect:true})} className = {_.moreButton}>
                    Read more
                </button>
                </div>
            </div>
        )
    }
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


export default compose(
    withNyapiService(),
    connect(mapStateToProps, mapDispatchToProps)
) (Article)