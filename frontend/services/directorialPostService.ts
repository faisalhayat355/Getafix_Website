import axios from "axios";
class Post{
    create(formData:any){
        const url = "http://127.0.0.1:8000/directorial/create";
        const config = {
            headers:{
                'content-type': 'multipart/form-data',
            }
        };
        return axios.post(url, formData, config);
    }

    getPosts(){
        const url = "http://127.0.0.1:8000/get-directorial-posts";
        return axios.get(url);
    }

    update(formData:any){
        const url = "http://127.0.0.1:8000/directorial/update-directorial";
        const config = {
            headers:{
                'content-type': 'multipart/form-data',
            }
        };
        return axios.post(url, formData, config);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Post ();