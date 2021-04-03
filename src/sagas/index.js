import { all } from 'redux-saga/effects';
import { cartSagas } from '../containers/Cart';
import { authenticationSaga } from '../containers/Authentication';

// import { sagas as createSagas } from '../containers/CreateSurvey';
// import { sagas as participantSagas } from '../containers/Participant';
// import { memberListSaga} from '../containers/ManageUsers'
// import { emailTemplateSaga} from '../containers/EmailPage'

// export const runSagas = sagas => {
//   if (Array.isArray(sagas)) {
//     return sagas.map(saga => saga())
//   }
//   if (isFunction(sagas)) {
//     return Array.of(sagas())
//   }
//   throw new TypeError(`${sagas} should be an Array or Function`)
// }
export default function* rootSaga() {
    yield all([
        ...cartSagas,
        ...authenticationSaga
    ]);
}