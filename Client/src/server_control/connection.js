import axios from 'axios';

const SERVER_URL = 'http://127.0.0.1:3001/api'


export function SendLoginReq(user,pass){
    axios.post(SERVER_URL+'/login',{user,pass},{credentials: 'include'}).then((result)=>{
        if (result.data.data_status === 'success'){
            setCookie('Token',result.data.content,1);
            window.location = '/dashboard/home';
        }
        // if (result.status === 200){
        // }
    }).catch((err)=>{
        //to mute verbose
    }).finally(()=>{
        //to mute verbose
    });
    
}

export function checkLoginHolder(redirect=false){
    let ctoken = getCookie('Token');
    axios.post(SERVER_URL+'/checktoken',{ctoken},{credentials: 'include'}).then((result)=>{
        if (result.data.data_status !== 'success' && redirect){
            setCookie('Token','bye',0);
            window.location = '/login'
        }
    }).catch((err)=>{
        //to mute verbose
    }).finally(()=>{
        //to mute verbose
    });
}
export function checkLogin(redirect=false){
    let ctoken = getCookie('Token');
    axios.post(SERVER_URL+'/checktoken',{ctoken},{credentials: 'include'}).then((result)=>{
        if (result.data.data_status === 'success' && redirect){
            window.location = '/dashboard'                   
        }
    }).catch((err)=>{
        //to mute verbose
    }).finally(()=>{
        //to mute verbose
    });
}
export async function get_clients_min(){
    return axios.get(SERVER_URL+'/getclients')
}

export async function get_client(id){
    return axios.get(SERVER_URL+`/client?id=${id}`);
}

function setCookie(cname, cvalue, day) {
    const d = new Date();
    d.setTime(d.getTime() + (day*24*60*60*1000));
    const expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires+';path=/';
}
function getCookie(cname) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${cname}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

export function LogOut(){
    setCookie('Token','bye',0);
    window.location = '/login';
}


// axios.get('http://127.0.0.1:3001/')
// .then(function (response) {
// // handle success
//     console.log(response);
// })
// .catch(function (error) {
// // handle error
//     console.log(error);
// })
// .finally(function () {
// // always executed
// });