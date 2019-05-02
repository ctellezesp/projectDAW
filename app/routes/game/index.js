import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class GameIndexRoute extends Route {
	model(){
		return hash({
			games: this.store.findAll('game'),
			users: this.store.findAll('user')
		})
	}


}
