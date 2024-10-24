declare global {
  var registeredUser: {
    email: string;
    password: string;
    dob: string;
  } | undefined;
}

global.registeredUser = undefined;

export {};
