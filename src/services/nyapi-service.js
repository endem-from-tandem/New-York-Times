export default class NyapiService{
    echo = 'echo from NyapiService'

    api_key = '90A0eXesoTyx6TGbrdwPZHNzf0qS9PuL'
    async getData(){
        const res= await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=fashion&api-key=${this.api_key}`)
        if(!res.ok){
            throw new Error(
                `cant get resource` +
                `status-${res.status}`
            )
        }
        const json = await res.json()
        return json.response.docs
    }
    async getArticle(id){
        const res= await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=_id:"nyt://article/${id}"&api-key=${this.api_key}`)
        if(!res.ok){
            throw new Error(
                `cant get resource` +
                `status-${res.status}`
            )
        }
        const json = await res.json()
        return json.response.docs[0]
    }
 }