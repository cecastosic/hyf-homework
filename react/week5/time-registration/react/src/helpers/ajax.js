
// import firebaseInst from "./firebase.js";

// export default async function getPrivateContent () {
//     const token = await firebaseInst.getAuth().currentUser.getIdToken();
//     const header = {
//         'Content-Type': 'application/json',
//         'authorization': `Bearer ${token}`
//     }
//     const result = await fetch("http://localhost:5000/auth", {
//         headers: header,
//         method: 'POST'
//     });    

//     if (result.status !== 200) {
//         throw result.statusText;
//     } else {
//         return result.json();
//     }
// }


import firebaseInst from "./firebase.js";

const errorMsg = "Oops! Something went wrong";

async function _AJAX (url) {

    var token;
    try {
        token = await firebaseInst.getAuth().currentUser.getIdToken(); 
    }
    catch (err) {
        throw err;
    }
   
    const header = {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
    }

    try {
        var result = await fetch(url, {
            headers: header,
            method: 'POST'
        });    
    } catch (err) {
        throw errorMsg;
    }

    if (result.status !== 200) {
        throw result.statusText;
    } else {
        const json = await result.json();
        return json;
    }
}


export default async function ajaxContent (url, setLoader = () => "") {
    
    setLoader(true);
    var result;
    try {
        result = await _AJAX(url)
        result = result.body;
    }
    catch (err) {
        result = err;
    }
    setLoader(false);
    return result;
}

const ajaxUrls = {
    main : "auth"
}

export {ajaxUrls}

// export default async function getPrivateContent () {
//     return ajaxContent("http://localhost:5000/auth")
// }