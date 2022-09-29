import { HISTORY_STORE } from '../consts/stores';
import historyStore from './historyStore';



/**
 * Initiate all stores
 */
const history = new historyStore()


/**
 * Save the instance in global object
 */
const rootStores = {
	[HISTORY_STORE]:history
};

// Debugging purpose
if (process.env.NODE_ENV !== 'production') {
	(window as any)['stores'] = rootStores;
}

export default rootStores;
