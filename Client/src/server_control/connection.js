import axios from 'axios';


export default function Conntest(setdata){
    axios.get('http://127.0.0.1:3001/',{})
    .then(function (response) {
    // handle success
        setdata(response.data);
    })
    .catch(function (error) {
    // handle error
        console.log(error);
    })
    .finally(function () {
    // always executed
    });
    // return(<div>{test}</div>)
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