const APIControler = (function(){

    const clientId = 'd9827efb2c79463b92becb457a635a04';
    const clientSecret = '6f2f0a36046f4f21980873a48c7bdab0';

    // Private methods
    const _getToken = async () =>  {

        const result = await fetch('https://accounts.spotify.com/api/token',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorisation': 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });

        const data = await result.json();
        return data.access_token;
    }

    const _getTracks = async (token, tracksEndPoint) => {

        const limit = 10;

        const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
            method: 'GET',
            headers: {'Authorization' : 'Bearer' + token}
        });

        const data = result.json();
        return data.items;
    }

    const _getTrack = async (token, tracksEndPoint) => {

        const result = await fetch(`${tracksEndPoint}`, {
            method: 'GET',
            headers: {'Authorization' : 'Bearer' + token}
        });

        const data = result.json();
        return data;
    }

    return {
        getToken() {
            return _getToken();
        },
        getTracks(token, tracksEndPoint) {
            return _getTracks(token, tracksEndPoint);
        },
        getTrack(token, tracksEndPoint) {
            return _getTrack(token, tracksEndPoint);
        }
    }

})();