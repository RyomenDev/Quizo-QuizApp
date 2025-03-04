export const ValidateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const ValidatePassword = (password) => {
  let res = {
    minLength: password.length >= 6,
    hasLowerCase: /[a-z]/.test(password),
    hasUpperCase: /[A-Z]/.test(password),
    hasNumberOrSymbol: /[\d!@#$%^&*(),.?":{}|<>]/.test(password),
    isValid:
      password.length >= 6 &&
      /[a-z]/.test(password) &&
      /[A-Z]/.test(password) &&
      /[\d!@#$%^&*(),.?":{}|<>]/.test(password),
  };
  return res;
};

// export const ValidatePassword = (password) => {
//   const minLength = password.length >= 6;
//   const hasLowerCase = /[a-z]/.test(password);
//   const hasUpperCase = /[A-Z]/.test(password);
//   const hasNumberOrSymbol = /[\d!@#$%^&*(),.?":{}|<>]/.test(password);

//   console.log("Hii");
//   console.log({ minLength, hasLowerCase, hasUpperCase, hasNumberOrSymbol });

//   return {
//     minLength,
//     hasLowerCase,
//     hasUpperCase,
//     hasNumberOrSymbol,
//     isValid: minLength && hasLowerCase && hasUpperCase && hasNumberOrSymbol,
//   };
// };

// export const ValidatePassword = (password) => {
//   return {
//     minLength: password.length >= 6,
//     hasLowerCase: /[a-z]/.test(password),
//     hasUpperCase: /[A-Z]/.test(password),
//     hasNumberOrSymbol: /[\d!@#$%^&*(),.?":{}|<>]/.test(password),
//   };
// };
