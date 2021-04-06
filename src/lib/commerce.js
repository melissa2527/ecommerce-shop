import Commerce from '@chec/commerce.js';
// require('dotenv').config();
import {NEXT_API_KEY} from '../../config'

export const commerce = new Commerce(NEXT_API_KEY, true);
// export const commerce = new Commerce(process.env.NEXT_API_CHEC_PUBLIC_KEY, true);
// process.env.REACT_API_CHEC_PUBLIC_KEY