import $ from 'jquery';

let DbRequester = (function () {

    // DataBase parameters
    const baseUrl = "https://baas.kinvey.com/";
    const appId = "kid_rkFDPl2fg";
    const appSecret = "0f7a9ce0b6a14257b9c3b3f249a7ce27";
    const base64auth = btoa(appId + ":" + appSecret);
    const dbAuthHeaders = {"Authorization": "Basic " + base64auth};

    function loginUser(username, password) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "user/" + appId + "/login",
            headers: dbAuthHeaders,
            data: {
                username: username,
                password: password
            }
        })
    }

    function registerUser(username, email, password) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "user/" + appId,
            headers: dbAuthHeaders,
            contentType: "application/json",
            data: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        })
    }

    function logoutUser() {
        return $.ajax({
            method: "POST",
            url: baseUrl + "user/" + appId + "/_logout",
            headers: getKinveyAuthSession()
        });

        function getKinveyAuthSession() {
            return {"Authorization": "Kinvey " + sessionStorage.getItem("authToken")}
        }
    }

    return {loginUser,
            logoutUser,
            registerUser};
})();

export default DbRequester