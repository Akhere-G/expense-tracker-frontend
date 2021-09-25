import { GoogleLoginError, Map } from "./types";

export const toDateInputValue = (date: Date = new Date()) => {
  return date.toJSON().slice(0, 10);
};

export const isInDevelopment = () =>
  !process.env.NODE_ENV || process.env.NODE_ENV === "development";

export const range = (x: number) =>
  Array(5)
    .fill(1)
    .map((t, i) => i);

export const mapGoogleLoginError = (errorCode: string) => {
  const map: Map = {
    [GoogleLoginError.access_denied]:
      "Permissions need to be accepted to continue.",
    [GoogleLoginError.idpiframe_initialization_failed]:
      "Third party cookies need to be enabled.",
    [GoogleLoginError.immediate_failed]: "Could not connect to Google.",
    [GoogleLoginError.popup_closed_by_user]: "Pop up closed.",
  };

  return map[errorCode] || "Could not log in.";
};
