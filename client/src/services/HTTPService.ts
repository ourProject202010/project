import {GetParamsType} from "../types";


export class HTTPService {
    baseUrl: string = 'http://localhost:4000/api/';


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
        const {path, data} = params;
        const token = localStorage.getItem('token');
        const body = JSON.stringify(data)
        try {
            const response = await fetch(`${this.baseUrl}${path}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authentication': `Bearer ${token}`
                },
                body
            });
            const result = await response.json();
        }
        catch(error) {
            console.log('get error', error)
        }
    }
}
