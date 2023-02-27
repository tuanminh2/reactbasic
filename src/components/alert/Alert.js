import React from "react";
import Loading from "./Loading";
import ToastSuccess from "./ToastSuccess";
import ToastDanger from "./ToastDanger";
import { useSelector } from "react-redux";
export const Alert = () => {
  const alertState = useSelector((state) => state.alertState);
  console.log(alertState);
  return (
    <div className="" >
     
      {alertState.loading && <Loading />}
     
      {alertState.success && (
        <>
          <ToastSuccess
            title="Success"
            body={alertState.success}
            bgColor="bg-success"
          />
        </>
      )}
     
      { alertState.error && (
        <ToastDanger
          title="Error"
          body={alertState.error}
          bgColor="bg-danger"
        />
      )}
    </div>
  );
};

export const showSuccessMsg = (msg) => {
  return <div className="successMsg">{msg}</div>;
};

export const showErrorMsg = (msg) => {
  return <div className="errMsg">{msg}</div>;
};
