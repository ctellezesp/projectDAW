import DS from 'ember-data';
const { Model, attr } = DS;

export default class GameModel extends Model {
	@attr('number') code;
	@attr('number') status;
	@attr('number') total_users;
}
