import axios from 'axios'


export function fetchSequence(url){
    return axios.get(url)
        .then(function (response){
            console.log(response);
            return response;
        })
        .catch(function (error){
            console.log(error);
        });
}
