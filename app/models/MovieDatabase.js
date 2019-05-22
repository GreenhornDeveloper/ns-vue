export default class MovieDatabase{
    
    constructor(baseURL, endpoint, type, apiKey, searchParams){
        this.baseURL = baseURL;
        this.endpoint = endpoint;
        this.type = type;
        this.apiKey = apiKey;
        this.searchParams = searchParams;
    }

    createEndpoint(){
        return `${this.baseURL}/${this.endpoint}/${this.type}?api_key=${this.apiKey}&${this.searchParams}`
    }

}