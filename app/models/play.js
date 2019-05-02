import DS from 'ember-data';
const { Model,attr } = DS;

export default class PlayModel extends Model {
	@attr('number') user_id;
	@attr('number') game_id;
	@attr('number') choice;
}
