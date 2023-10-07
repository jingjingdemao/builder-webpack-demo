import { helloword } from './helloworld';
import { common } from '../../common/index';

document.getElementById('root').innerHTML = helloword() + common();
