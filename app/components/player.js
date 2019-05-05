import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class PlayerComponent extends Component {
	//@tracked options = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
	@tracked options = [
		{ id: 1, name: 'Rock', img: '/media/rock.png' },
	  	{ id: 2, name: 'Paper', img: '/media/paper.png' },
	  	{ id: 3, name: 'Scissors', img: '/media/scissors.png' },
	  	{ id: 4, name: 'Lizard', img: '/media/lizard.png' },
	  	{ id: 5, name: 'Spock', img: '/media/spock.png' }
  	]
	@tracked selected = { id: 0, name: 'Select a choice', img: '/media/option.png' }
	@tracked turn;
	@tracked oculto = true;
	@tracked name;
	@service store;
	@service parent;
	
	@action 
	chooseGame(option){
		console.log(option.name);
		this.selected = {
			id: option.id,
			name: option.name,
			img: option.img
		};
		switch(option.name){
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
		let turn = this.turn;
		let id = this.args.id;

		return this.args.play(id, turn);
	}
}
