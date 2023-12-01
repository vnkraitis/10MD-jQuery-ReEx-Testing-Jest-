export function validatePassword(password: string): {
  valid: boolean;
  message: string;
} {
  if (password.length < 8) {
    return {
      valid: false,
      message: "Password too short, must be at least 8 characters.",
    };
  }
  if (!/\d/.test(password)) {
    return { valid: false, message: "Password doesn't contain any numbers." };
  }
  if (!/[!@#$%^&*]/.test(password)) {
    return {
      valid: false,
      message:
        "Password doesn't contain any special characters (!, @, #, $, %, ^, &, *).",
    };
  }
  return { valid: true, message: "" };


}


