import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class AppProfileRoute extends Route {
	model(params) {
		console.log(params);
		return hash({
			game: this.store.findRecord('game', params.play_id),
			player: this.store.query('play', {game_id: params.play_id})
		});
	}
}