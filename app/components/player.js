import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PlayerComponent extends Component {
	@tracked options = ['Piedra', 'Papel', 'Tijera', 'Lagarto', 'Spock'];
	@tracked selected = 'Selecciona tu juego';
	
	@action 
	chooseGame(option){
		this.set('selected', option);
	}
}
