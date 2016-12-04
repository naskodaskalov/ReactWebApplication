import $ from 'jquery';

let DbRequester = (function () {

    // DataBase parameters
    const baseUrl = "https://baas.kinvey.com/";
    const appId = "kid_rkFDPl2fg";
    const appSecret = "0f7a9ce0b6a14257b9c3b3f249a7ce27";
    const base64auth = btoa(appId + ":" + appSecret);
    const dbAuthHeaders = {"Authorization": "Basic " + base64auth};


    function getUserAuthHeaders() {
        return {"Authorization": "Kinvey " + sessionStorage.getItem("authToken")}
    }

    // User request

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
            headers: getUserAuthHeaders()
        });
    }

    // Ads request

    function createAd(title, author, body, price, phone, picture) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "appdata/" + appId + "/ads",
            headers: getUserAuthHeaders(),
            contentType: "application/json",
            data: JSON.stringify({
                title: title,
                author: author,
                body: body,
                price: price,
                phone: phone,
                picture: picture
            })
        })
    }

    function showAds() {
        return $.ajax({
            method: "GET",
            url: baseUrl + "appdata/" + appId + "/ads",
            headers: getUserAuthHeaders()
        })
    }

    function getAd(adId) {
        return $.ajax({
            method: "GET",
            url: baseUrl + "appdata/" + appId + "/ads/" + adId,
            headers: getUserAuthHeaders()
        })
    }

    return{loginUser, registerUser, logoutUser, createAd, showAds, getAd}
})();

export default DbRequester