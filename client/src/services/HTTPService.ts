export class HTTPService {
    baseUrl: string = 'http://localhost:3001/api/';


    makeGet = async (params: GetParamsType) => {
        const {path} = params;
        try {
            const response = await fetch(`${this.baseUrl}path`);
            const result = await response.json();
        }
        catch(error) {
            console.log('get error', error)
        }
    }
    makePost = async (params: GetParamsType) => {
        const {path, method, body, headers} = params;
        try {
            const response = await fetch(`${this.baseUrl}path`, {method, headers, body});
            const result = await response.json();
        }
        catch(error) {
            console.log('get error', error)
        }
    }
}

type GetParamsType = {
    path: string
    method: string
    headers: {[key: string]: string}
    body: any
}