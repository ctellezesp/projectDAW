import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class AppProfileRoute extends Route {
	model(params) {
		return hash({
			user: this.store.peekRecord('user', 1),
			game: this.store.query('game', {id: params.play_id})
		});
		
	}
}