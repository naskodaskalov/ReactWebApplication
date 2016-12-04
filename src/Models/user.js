import observer from './observer';

let user = function () {
    function saveAuthToken(userData){
        sessionStorage.setItem("authToken", userData._kmd.authtoken);
        sessionStorage.setItem("username", userData.username);
        sessionStorage.setItem("userId", userData._id);

        observer.onSessionUpdate();
    }

    return {saveAuthToken}
}();

export default user;