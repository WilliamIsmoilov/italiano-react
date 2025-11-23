/* eslint-disable @typescript-eslint/no-explicit-any */
/** SweetAlertHandling **/
import Swal from "sweetalert2";
import { Message } from "./config";
import table from '/images/table.jpg'

export const sweetErrorHandling = async (err: any) => {
  const error = err.response?.data ?? err;
  const message = error?.message ?? Message.error1;
  await Swal.fire({
    icon: "error",
    text: message,
    showConfirmButton: false,
  });
};


export const sweetErrorHandlings = async (err: any) => {
  const error = err.response?.data ?? err;
  const message = error?.message ?? Message.error3;
  await Swal.fire({
    icon: "error",
    text: message,
    showConfirmButton: false,
  });
};


export const sweetTopSuccessAlert = async (
  msg: string,
  duration: number = 2000
) => {
  await Swal.fire({
    position: "top-end",
    icon: "success",
    title: msg,
    showConfirmButton: false,
    timer: duration,
  });
};

export const sweetTopSmallSuccessAlert = async (
  msg: string,
  duration: number = 2000
) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: duration,
    timerProgressBar: true,
  });

  Toast.fire({
    icon: "success",
    title: msg,
  }).then();
};

export const sweetFailureProvider = (
  msg: string,
  show_button: boolean = false,
  forward_url: string = ""
) => {
  Swal.fire({
    icon: "error",
    title: msg,
    showConfirmButton: show_button,
    confirmButtonText: "OK",
  }).then(() => {
    if (forward_url !== "") {
      window.location.replace(forward_url);
    }
  });
};

export const sweetAcceptedProvider = (
  msg: string,
) => {
  Swal.fire({
  title: msg,
  text: "Thanks for your aproach",
  imageUrl:  table,
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: "Custom image"
});
}

