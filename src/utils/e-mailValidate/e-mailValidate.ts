export function validateEmail(email: string): {
  valid: boolean;
  message: string;
} {
  if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
    return { valid: false, message: "Invalid Email format." };
  }
  return { valid: true, message: "" };
}


