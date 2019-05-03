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
	@tracked user;
	@action
	selectUser(myUser){
		console.log(myUser);
		this.set('user', myUser);
	}

	@action addUser(game){
		let selectUser = this.store.createRecord('play', {
			user_id: Number(this.user),
			game_id: Number(game)
		})
		selectUser.save();
	}
}