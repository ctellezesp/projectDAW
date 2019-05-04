import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AppProfileRoute extends Route {
	@tracked params2;
	model(params) {
		this.params2 = params;
		return hash({
			game: this.store.findRecord('game', params.play_id),
			player: this.store.query('play', {game_id: params.play_id}),
		});
	}

	@action
	willTransition(){
		clearInterval(this.poll);
	}

	@action
	didTransition(){
		this.poll = setInterval(async() => {
			return hash({
				game: this.store.findRecord('game', this.params2.play_id),
				player: this.store.query('play', {game_id: this.params2.play_id}),
			});
		}, 5000);
	}
}