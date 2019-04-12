import 'whatwg-fetch'
const clientId = 'dce2cuPUDbONgZlEImZwjw';
const secret = 'VBpEdfopuEyiPl8v9gbdfYmXY8mnFet6eocuPDd7rI5Zr2DOqbVsj21drp4lKBjSgHU_Acc2nkrjYDjclEmgQ_rdtD_1526wi20o9iejxIUKJfWo1SQTcv1OpVD9W3Yx';
let accessToken = '';
const Yelp = {
    getAccessToken() {
        if(accessToken) {
            return new Promise(resolve => {
                resolve(accessToken)
            });
        }

        // Need to request a new access token
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${clientId}&client_secret=${secret}`, {
            method: 'POST'
        }).then(response => {
            if(response.ok) {
                return response.json();
            }
        }).then(jsonResponse => {
            accessToken = jsonResponse.access_token;
        });
    },
    search(term, location, sortBy) {
        return  Yelp.getAccessToken().then(() => {
            return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }).then(response => {
                if(response.ok) {
                    return response.json();
                }
            }).then(jsonResponse => {
                if(jsonResponse.businesses) {
                    return jsonResponse.businesses.map(business => {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zipcode,
                            category: business.categories.title,
                            rating: business.rating,
                            reviewCount: business.review_count
                        }
                    });
                }
            });
        })
    }
}

export default Yelp;