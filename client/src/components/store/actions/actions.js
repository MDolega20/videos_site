// import axios from 'axios';

// export const FETCH_PRIMARY_DATA_BEGIN = 'FETCH_PRIMARY_DATA_BEGIN';
// export const FETCH_PRIMARY_DATA_SUCCESS = 'FETCH_PRIMARY_DATA_SUCCESS';
// export const FETCH_PRIMARY_DATA_FAILURE = 'FETCH_PRIMARY_DATA_FAILURE';

// export const SORT_LOCALIZATIONS_BEGIN = 'SORT_LOCALIZATIONS_BEGIN';
// export const SORT_LOCALIZATIONS_SUCCESS = 'SORT_LOCALIZATIONS_SUCCESS';

// export const FETCH_LOCALIZATION_DATA_BEGIN = 'FETCH_LOCALIZATION_DATA_BEGIN';
// export const FETCH_LOCALIZATION_DATA_SUCCESS = 'FETCH_LOCALIZATION_DATA_SUCCESS';
// export const FETCH_LOCALIZATION_DATA_FAILURE = 'FETCH_LOCALIZATION_DATA_FAILURE';

// export const SET_CURRENT_LOC_ID = 'SET_CURRENT_LOC_ID';

// export const SHOW_LOADING = 'SHOW_LOADING';
// export const HIDE_LOADING = 'HIDE_LOADING';

// export const LOGGING_BEGIN = 'LOGGING_BEGIN';
// export const LOGGING_SUCCESS = 'LOGGING_SUCCESS';
// export const LOGGING_FAILURE = 'LOGGING_FAILURE';

// export const LOGGING_REMEMBER_READ = 'LOGGING_REMEMBER_READ';

// export const LOGOUT = 'LOGOUT';

// export const REGISTER_BEGIN = 'REGISTER_BEGIN';
// export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
// export const REGISTER_FAILURE = 'REGISTER_FAILURE';

// export const SEND_COMMENT_BEGIN = 'SEND_COMMENT_BEGIN';
// export const SEND_COMMENT_SUCCESS = 'SEND_COMMENT_SUCCESS';
// export const SEND_COMMENT_FAILURE = 'SEND_COMMENT_FAILURE';

// export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
// export const DEL_NOTIFICATION = 'DEL_NOTIFICATION';

// export const ADD_LOADING_MESSEGE = 'ADD_LOADING_MESSEGE';
// export const DEL_LOADING_MESSEGE = 'DEL_LOADING_MESSEGE';

// export const SEND_LOCALIZATION_DATA_BEGIN = 'SEND_LOCALIZATION_DATA_BEGIN';
// export const SEND_LOCALIZATION_DATA_SUCCESS = 'SEND_LOCALIZATION_DATA_SUCCESS';
// export const SEND_LOCALIZATION_DATA_FAILURE = 'SEND_LOCALIZATION_DATA_FAILURE';

// export const fetchPrimaryDataBegin = () => ({
//   type: FETCH_PRIMARY_DATA_BEGIN
// });
// export const fetchPrimaryDataSuccess = fetchedData => ({
//   type: FETCH_PRIMARY_DATA_SUCCESS,
//   payload: {
//     fetchedData
//   }
// });
// export const fetchPrimaryDataFailure = error => ({
//   type: FETCH_PRIMARY_DATA_FAILURE,
//   payload: {
//     error
//   }
// });
// export const SortLocalizationsBegin = () => ({
//   type: SORT_LOCALIZATIONS_BEGIN
// });
// export const SortLocalizationsSuccess = sortedData => ({
//   type: SORT_LOCALIZATIONS_SUCCESS,
//   payload: {
//     sortedData
//   }
// });
// export const fetchLocalizationDataBegin = () => ({
//   type: FETCH_LOCALIZATION_DATA_BEGIN
// });
// export const fetchLocalizationDataSuccess = fetchedData => ({
//   type: FETCH_LOCALIZATION_DATA_SUCCESS,
//   payload: {
//     fetchedData
//   }
// });
// export const fetchLocalizationDataFailure = error => ({
//   type: FETCH_LOCALIZATION_DATA_FAILURE,
//   payload: {
//     error
//   }
// });
// export const showLoading = text => ({
//   type: SHOW_LOADING,
//   payload: {
//     text
//   }
// });
// export const hideLoading = () => ({
//   type: HIDE_LOADING,
// });
// export const hideLoadingTime = () => {
//   return dispatch => {
//     setTimeout(() => {
//       dispatch(hideLoading());
//     }, 2000)
//   }
// }
// export const addLoadingMessege = (text, id) => ({
//   type: ADD_LOADING_MESSEGE,
//   payload: {
//     text,
//     id
//   }
// });
// export const delLoadingMessege = (id) => ({
//   type: DEL_LOADING_MESSEGE,
//   payload: {
//     id
//   }
// });
// export function fetchPrimaryData() {
//   return (dispatch) => {
//     let loadingActionId = 1;
//     dispatch(fetchPrimaryDataBegin());
//     dispatch(addLoadingMessege("Pobieranie danych", loadingActionId));
//     return axios.get(Links.primary_localizations)
//       .then((response) => {
//         if (response.data.code === 200) {
//           dispatch(fetchPrimaryDataSuccess(response.data.data));
//           dispatch(delLoadingMessege(loadingActionId));

//           dispatch(sortLocalizations(response.data.data));
//           return response.data.data;
//         } else {
//           dispatch(fetchPrimaryDataFailure(response.data.messege));
//           dispatch(delLoadingMessege(loadingActionId));
//         }
//       })
//       .catch(error => {
//         dispatch(fetchPrimaryDataFailure(error));
//         dispatch(delLoadingMessege(loadingActionId));
//       });
//   };
// }
// export function sortLocalizations(data) {
//   return dispatch => {
//     //order by apparent temperature
//     let placesSorted = data.sort(function (a, b) {
//       return (a.current_weather[0].apparent_temperature === null) - (b.current_weather[0].apparent_temperature === null) || -(a.current_weather[0].apparent_temperature > b.current_weather[0].apparent_temperature) || +(a.current_weather[0].apparent_temperature < b.current_weather[0].apparent_temperature);
//     });

//     dispatch(SortLocalizationsSuccess(placesSorted));
//   }
// }
// export function fetchLocalizationData(query) {
//   return dispatch => {
//     let loadingActionId = 2,
//     loadingActionId2 = 6;
//     dispatch(fetchLocalizationDataBegin());
//     dispatch(addLoadingMessege("Ładowanie", loadingActionId2));
//     dispatch(addLoadingMessege("Pobieranie danych lokalizacji", loadingActionId));
//     return axios.get(Links.details_localization + "?" + query)
//       .then((response) => {
//         if (response.data.code === 200) {
//           dispatch(fetchLocalizationDataSuccess(response.data.data));
//           dispatch(delLoadingMessege(loadingActionId));
//           return response.data.data;
//         } else {
//           dispatch(fetchLocalizationDataFailure(response.data.messege));
//         }
//       })
//       .catch(error => {
//         dispatch(fetchLocalizationDataFailure(error));
//         dispatch(delLoadingMessege(loadingActionId));
//       });
//   };
// }
// export const loginBegin = () => ({
//   type: LOGGING_BEGIN
// });
// export const loginSuccess = responseData => ({
//   type: LOGGING_SUCCESS,
//   payload: {
//     responseData
//   }
// });
// export const loginFailure = error => ({
//   type: LOGGING_FAILURE,
//   payload: {
//     error
//   }
// });
// export function loginTry(reqBody, save) {
//   return dispatch => {
//     let loadingActionId = 3;
//     dispatch(loginBegin());
//     dispatch(addLoadingMessege("Logowanie", loadingActionId));
//     return axios.post(Links.login, reqBody)
//       .then((response) => {
//         if (response.data.code === 200) {
//           dispatch(loginSuccess(response.data.data));
//           dispatch(addNotification("Zalogowano"));
//           save = true; // TODO temporary fix 
//           if (save) {
//             dispatch(loginRememberSave(response.data.data));
//           }
//           dispatch(delLoadingMessege(loadingActionId));
//           return response.data.data;
//         } else {
//           dispatch(loginFailure(response.data.error.messege));
//           dispatch(addNotification("Błąd: " + response.data.error.messege));
//           dispatch(delLoadingMessege(loadingActionId));
//         }
//       })
//       .catch(error => {
//         dispatch(loginFailure(error.response.status));
//         dispatch(addNotification("Błąd: " + error.response.status));
//         dispatch(delLoadingMessege(loadingActionId));
//       });
//   };
// }
// export const loginRememberRead = userData => ({
//   type: LOGGING_REMEMBER_READ,
//   payload: {
//     userData
//   }
// });
// export function loginRememberSave(userData) {
//   return dispatch => {
//     localStorage.setItem(Cookies.user_data, JSON.stringify(userData));
//     return true;
//   };
// }
// export function loginRememberForget() {
//   return dispatch => {
//     localStorage.removeItem(Cookies.user_data);
//     return true;
//   };
// }
// export function loginRemember() {
//   return dispatch => {
//     if (localStorage.getItem(Cookies.user_data) !== null) {
//       dispatch(loginRememberRead(JSON.parse(localStorage.getItem(Cookies.user_data))));
//     }
//     return true;
//   };
// }
// export const logout = () => ({
//   type: LOGOUT,
// });
// export function logoutTry() {
//   return dispatch => {
//     dispatch(logout());
//     dispatch(loginRememberForget());
//     dispatch(addNotification("Wylogowano"));
//   }
// }
// export const registerBegin = () => ({
//   type: REGISTER_BEGIN
// });
// export const registerSuccess = responseData => ({
//   type: REGISTER_SUCCESS,
//   payload: {
//     responseData
//   }
// });
// export const registerFailure = error => ({
//   type: REGISTER_FAILURE,
//   payload: {
//     error
//   }
// });
// export function registerTry(reqBody) {
//   return dispatch => {
//     let loadingActionId = 4;
//     dispatch(registerBegin());
//     dispatch(addLoadingMessege("Rejestracja", loadingActionId));
//     return axios.post(Links.register, reqBody)
//       .then((response) => {
//         if (response.data.code === 200) {
//           dispatch(registerSuccess(response.data.data));
//           dispatch(addNotification("Zarejestrowano"));
//           dispatch(delLoadingMessege(loadingActionId));
//           return response.data.data;
//         } else {
//           dispatch(registerFailure(response.data.error.messege));
//           dispatch(addNotification("Błąd: " + response.data.error.messege));
//           dispatch(delLoadingMessege(loadingActionId));
//         }
//       })
//       .catch(error => {
//         dispatch(registerFailure(error.response.status));
//         dispatch(addNotification("Błąd: " + error.response.status));
//         dispatch(delLoadingMessege(loadingActionId));
//       });
//   };
// }
// export const sendCommentBegin = () => ({
//   type: SEND_COMMENT_BEGIN
// });
// export const sendCommentSuccess = fetchedData => ({
//   type: SEND_COMMENT_SUCCESS,
//   payload: {
//     fetchedData
//   }
// });
// export const sendCommentFailure = error => ({
//   type: SEND_COMMENT_FAILURE,
//   payload: {
//     error
//   }
// });
// export function sendComment(reqBody) {
//   return dispatch => {
//     dispatch(sendCommentBegin());
//     return axios.post(Links.comment, reqBody)
//       .then((response) => {
//         if (response.data.code === 200) {
//           dispatch(sendCommentSuccess(response.data.data));
//           dispatch(addNotification("Dodano komentarz"));
//           return response.data.data;
//         } else {
//           dispatch(sendCommentFailure(response.data.messege));
//           dispatch(addNotification("Błąd: " + response.data.error.messege));
//         }
//       })
//       .catch(error => {
//         dispatch(sendCommentFailure(error));
//         dispatch(addNotification("Błąd: " + error.response.status));
//       });
//   };
// }
// export const addNotification = text => ({
//   type: ADD_NOTIFICATION,
//   payload: {
//     text
//   }
// });
// export const sendLocalizationDataBegin = () => ({
//   type: SEND_LOCALIZATION_DATA_BEGIN
// });
// export const sendLocalizationDataSuccess = responseData => ({
//   type: SEND_LOCALIZATION_DATA_SUCCESS,
//   payload: {
//     responseData
//   }
// });
// export const sendLocalizationDataFailure = error => ({
//   type: SEND_LOCALIZATION_DATA_FAILURE,
//   payload: {
//     error
//   }
// });
// export const sendLocalizationDataTry = (reqBody, itemName) => {
//   return dispatch => {
//     // let loadingActionId = 7;
//     dispatch(sendLocalizationDataBegin());
//     // dispatch(addLoadingMessege("Wysyłanie danych", loadingActionId));
//     return axios.post(Links.info +"/" + itemName, reqBody)
//       .then((response) => {
//         if (response.data.code === 200) {
//           dispatch(sendLocalizationDataSuccess(response.data.data));
//           dispatch(addNotification("Wysłano dane"));
//           // dispatch(delLoadingMessege(loadingActionId));
//           return response.data.data;
//         } else {
//           dispatch(sendLocalizationDataFailure(response.data.error.messege));
//           dispatch(addNotification("Błąd: " + response.data.error.messege));
//           // dispatch(delLoadingMessege(loadingActionId));
//         }
//       })
//       .catch(error => {
//         dispatch(sendLocalizationDataFailure(error.response.status));
//         dispatch(addNotification("Błąd: " + error.response.status));
//         // dispatch(delLoadingMessege(loadingActionId));
//       });
//   };
// }