import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import {inject as service} from '@ember/service';

export default class PlayerComponent extends Component {
	@tracked options = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
	@tracked selected = 'Choice your game';
	@tracked turn;
	@tracked store = service();
	
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
	play(){
		console.log(this.turn);
		console.log(this.args);
		debugger;
		post = this.store.query('play', {

		  filter: {
		    game_id: this.args.model.game.id,
		    user_id: this.args.player.user.username
		  }
		}).then(function(post) {
		  console.log(post);
		  debugger;
		});
	}
}
