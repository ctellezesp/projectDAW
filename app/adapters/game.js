import ApplicationAdapter from './application';

export default class GameAdapter extends ApplicationAdapter {
	urlForUpdateRecord(id, modelName, snapshot){
		let baseUrl = 'https://polar-basin-61192.herokuapp.com';

		return `${baseUrl}/games/${id}/start`;
	}
}

