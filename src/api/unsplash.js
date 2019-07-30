import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            "Client-ID f7311b71cc798d00ff1926bbe46795072e8ce2deb5b9f4538217304db80e0ee6"
    }
});