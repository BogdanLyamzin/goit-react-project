import axios from 'axios';
import { fetchAwardsRequest, fetchAwardsSuccess, fetchAwardsError, buyAwardsRequest, buyAwardsSuccess, buyAwardsError } from './awards-actions';

axios.defaults.baseURL = 'https://kidslike-v1-backend.goit.global';
axios.defaults.headers.common.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MGFlMDIxZjY2MmVmOTAwMTdlZDZmY2MiLCJzaWQiOiI2MGFlMDMxNzY2MmVmOTAwMTdlZDZmY2YiLCJpYXQiOjE2MjIwMTY3OTF9.X8rEnsOrOi0WQ-hcbs7aCYfT4jeaGAdI2Sg2EetjWM4';

const fetchAwards = () => async dispatch => {
    dispatch(fetchAwardsRequest());
    try {
        const response = await axios.get('/gift');
        console.log(response);
        dispatch(fetchAwardsSuccess(response.data.ruGifts));
    } catch (error) {
        dispatch(fetchAwardsError(error.message));
    }
}

export const buyGifts = (body) => async dispatch => {
    dispatch(buyAwardsRequest());
    try {
        const { data } = await axios.patch('/gift', body);
        dispatch(buyAwardsSuccess(data.purchasedGiftIds));
    }
    catch (error) {
        dispatch(buyAwardsError(error));
    }
};

export default fetchAwards;
