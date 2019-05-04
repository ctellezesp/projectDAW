import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class GameCrearController extends Controller {
	@tracked options = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
	@tracked selected = 'Choice your game';
	@tracked turn;
	@action
	startGame(id){
		this.store.findRecord('game', id).then(function(post) {
		  post.set('status', 2);
		  post.save();
		});
	}

	@action 
	chooseGame(option){
		this.selected = option;
		switch(this.selected){
			case "Rock": this.turn = 1;
			break;
			case "Paper": this.turn = 2;
			break;
			case "Scissors": this.turn = 3;
			break;
			case "Lizard": this.turn = 4;
			break;
			case "Spock": this.turn = 5;
			break;
		}
	}

	@action
	async play(selectId, selectTurn) {
	  let turn = selectTurn;
		let id = selectId;
		console.log(turn);
		console.log(id);
	  	let post = await this.store.findRecord('play', id).then((result) => {
	   	result.set('choice', turn);
		result.save();
		});
	}
}
