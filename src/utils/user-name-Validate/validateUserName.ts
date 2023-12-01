export function validateUserName(userName: string): {
  valid: boolean;
  message: string;
} {
  if (userName.length < 2 || userName.length > 50) {
    return {
      valid: false,
      message: "User Name must be between 2 and 50 characters long.",
    };
  }
  if (!/^[A-Za-z]+$/.test(userName)) {
    return { valid: false, message: "User Name can only contain letters." };
  }
  return { valid: true, message: "" };
}


