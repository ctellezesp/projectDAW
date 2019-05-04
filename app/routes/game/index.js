import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { action } from '@ember/object';


export default class GameIndexRoute extends Route {
	model(){
		return hash({
			games: this.store.findAll('game'),
			users: this.store.findAll('user')
		})
	}

	@action
	willTransition () {
		clearInterval(this.poll);
	}

	@action
	didTransition () {
		this.poll = setInterval(async () => {
			//polling
			return hash({
				games: this.store.findAll('game'),
				users: this.store.findAll('user')
			})
		}, 5000);
	}


}
