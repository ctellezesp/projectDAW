import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AppProfileRoute extends Route {
	model(params) {
		console.log(params);
		return hash({
			game: this.store.findRecord('game', params.play_id),
			player: this.store.query('play', {game_id: params.play_id}),
		});
	}

	/*@action
	willTransition(){
		clearInterval(this.poll);
	}

	@action
	didTransition(params){
		this.poll = setInterval(async() => {
			let game = await this.store.findRecord('game', params.play_id);
		}, 5000);
	}*/
}