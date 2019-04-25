import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class GameCrearController extends Controller {
	@tracked options = ['Piedra', 'Papel', 'Tijera', 'Lagarto', 'Spock'];
	@tracked selected = 'Selecciona tu juego';
	@action 
	chooseGame(option){
		this.set('selected', option);
	}
}
