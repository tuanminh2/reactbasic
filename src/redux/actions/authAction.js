import { ValidRegister } from "../../utils/Valid.js";
import { postAPI } from "../../utils/fetchData";
export const register = (userRegister) => async (dispatch) => {
  const check = ValidRegister(userRegister);

  if (check.errLength > 0) {
    return dispatch({
      type: "ALERT",
      payload: { error: check.errMsg },
    });
  }
  try {
    dispatch({ type: "ALERT", payload: { loading: true } });
    const res = await postAPI("/auth/register", userRegister);

    dispatch({ type: "ALERT", payload: { success: "Register Success!" } });
  } catch (err) {
    dispatch({ type: "ALERT", payload: { error: err.response.data.msg } });
  }
};
