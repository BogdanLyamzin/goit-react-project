
import AwardsService from './awards-service';
import { fetchAwardsRequest, fetchAwardsSuccess, fetchAwardsError, buyAwardsRequest, buyAwardsSuccess, buyAwardsError } from './awards-actions';

const awardsService = new AwardsService();

export const fetchAwards = () => async dispatch => {
    dispatch(fetchAwardsRequest());
    try {
        const data = await awardsService.get('gift');
        dispatch(fetchAwardsSuccess(data.ruGifts));
    } catch (error) {
        dispatch(fetchAwardsError(error.message));
    }
};

export const buyGifts = (body) => async dispatch => {
    dispatch(buyAwardsRequest());
    try {
        const { data } = await awardsService.patchAwards(body);
        dispatch(buyAwardsSuccess(data.purchasedGiftIds));
    }
    catch (error) {
        dispatch(buyAwardsError(error));
    }
};

export default fetchAwards;

