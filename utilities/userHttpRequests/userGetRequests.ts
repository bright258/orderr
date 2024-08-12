import { showMessage } from "react-native-flash-message";
import { GetOneUserDetailsFromAPIGetRoute } from "../httpRequests/fetchGetApi";
import { setUserDetails } from "../reduxFile";


export const retrieveAndReduxStoreUserInfo = (
    userId: string,
    dispatch: any
  ) => {

    GetOneUserDetailsFromAPIGetRoute(userId).then((data) => {
        dispatch(setUserDetails(data));      
      })
      .catch((error) => {
        showMessage({ message: "error " + error });
    });
  };
