import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class GameCrearController extends Controller {
	@action
	startGame(id){
		this.store.findRecord('game', id).then(function(post) {
		  post.set('status', 2);
		  post.save();
		});
	}
}
