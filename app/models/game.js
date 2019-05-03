import DS from 'ember-data';
const { Model, attr } = DS;
import EmberObject, { computed } from '@ember/object';


export default class GameModel extends Model {
	@attr('number') code;
	@attr('number') status;
	@attr('number') total_users;
	@attr('number') winner_id;
	@attr('string') winner_name;

	get myStatus(){
		switch(this.status){
			case 1: return "Create";
			break;
			case 2: return "Started";
			break;
			case 3: return "Completed";
			break;
		}
	}
}
