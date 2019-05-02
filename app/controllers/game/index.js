import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class GameIndexController extends Controller {
	@action
	createGame(){
		let game = this.store.createRecord('game');
		game.save();
	}

	@tracked options = this.model.users;
	@tracked user  = this.store.query('user', {id: 1});
	@action
	selectUser(myUser){
		//this.user = id.id;
		this.set('user', myUser.id)
		console.log(this.user);
	}
}