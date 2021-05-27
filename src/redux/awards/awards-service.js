import BaseHttpService from '../../shared/service/base-http-service';

class AwardsService extends BaseHttpService {

  async fetchAwards () {
    try {
      const {data} = await this.get('/gift');
        this.saveToken(data.token);
        return data;
    } catch (error) {

    }
  }
  async patchAwards(body) {
    try {
      const { data } = await this.patch('gift', body);
      return data;
    }
    catch (error) {
    }
  }
}

export default AwardsService