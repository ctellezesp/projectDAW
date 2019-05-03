import ActiveModelAdapter from 'active-model-adapter';

export default class CrearAdapter extends ApplicationAdapter {
	urlForUpdateRecord(id, modelName, snapshot){
		let baseUrl = this.buildURL();

		return `${baseUrl}/games/${id}/start`;
	}
}
