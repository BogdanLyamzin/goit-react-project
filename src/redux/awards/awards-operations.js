<<<<<<< HEAD
import axios from 'axios';
import { fetchAwardsRequest, fetchAwardsSuccess, fetchAwardsError, buyAwardsRequest, buyAwardsSuccess, buyAwardsError } from './awards-actions';
=======
import AwardsService from './awards-service';
import { fetchAwardsRequest, fetchAwardsSuccess, fetchAwardsError } from './awards-actions';
>>>>>>> dev

const awardsService = new AwardsService();

export const fetchAwards = () => async dispatch => {
    dispatch(fetchAwardsRequest());
    try {
<<<<<<< HEAD
        const response = await axios.get('/gift');
        console.log(response);
        dispatch(fetchAwardsSuccess(response.data.ruGifts));
=======
        const data = await awardsService.get('gift');
        console.log(data);
        dispatch(fetchAwardsSuccess(data.ruGifts))
>>>>>>> dev
    } catch (error) {
        dispatch(fetchAwardsError(error.message));
    }
}
<<<<<<< HEAD

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

=======
>>>>>>> dev
export default fetchAwards;

