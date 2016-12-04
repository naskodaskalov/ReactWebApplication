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

    function getKinveyUserAuthHeaders() {
        return {
            'Authorization': "Kinvey " + sessionStorage.getItem('authToken'),
        };
    }

    function createAd(title, author, body, price, phone, picture) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "appdata/" + appId + "/ads",
            headers: getKinveyUserAuthHeaders(),
            data: JSON.stringify({
                title, author, body, price, phone, picture
            })
        })
    }

    function editAd(adID, title, author, body, price, phone, picture) {
        return $.ajax({
            method: "PUT",
            url: baseUrl + "appdata/" + appId + "/ads" + adID,
            headers: getKinveyUserAuthHeaders(),
            data: JSON.stringify({
                title, author, body, price, phone, picture
            })
        })
    }

    function loadAdDetails(adID, onAdSuccess) {
        return $.ajax({
            method: "GET",
            url: baseUrl + "appdata/" + appId + "/ads/" + adID,
            headers: getUserAuthHeaders()
        }).then(onAdSuccess);

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

    function logoutUser() {
        return $.ajax({
            method: "POST",
            url: baseUrl + "user/" + appId + "/_logout",
            headers: getUserAuthHeaders()
        });
    }

    function getUserAuthHeaders() {
        return {"Authorization": "Kinvey " + sessionStorage.getItem("authToken")}
    }

    return {loginUser,
            logoutUser,
            registerUser,
            createAd,
            editAd,
            loadAdDetails,
            showAds,
            getAd};
})();

export default DbRequester