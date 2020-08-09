import axios from 'axios'
var token = ''
const client_secret = '85e241e639b84213b08aa5c186890f86'
const client_id = '0013d6d1e3b94a909990d747090f57cb'
const authorize = () =>{
    const url = 'https://accounts.spotify.com/api/token'
    axios.post(url,new URLSearchParams({grant_type: "client_credentials"}).toString(),{headers:{
        'Authorization': 'Basic '+ btoa(client_id + ':'+ client_secret) ,
        'Content-Type': "application/x-www-form-urlencoded"
    }}).then((res) => {
        token = res.data.access_token;
        console.log(res);
    }).catch((error) => {
        console.log(error)
    })
}

const getTracks = (query) => {
    var name = query.query.query
    const url = `https://api.spotify.com/v1/search?q=${name}&type=track`

    return axios.get(url, {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json",
            "Content-Type": "application/json",
        }
    }).then((res) => {
        return res.data      
    })

}

export default { getTracks, authorize }