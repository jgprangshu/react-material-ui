/**
 *
 * Asynchronously loads the component for Start
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
