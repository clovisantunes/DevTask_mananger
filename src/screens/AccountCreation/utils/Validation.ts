export const validateName = (name: string): string | null => {
  if (!name.trim()) {
      return "The name cannot be empty.";
  }
  if (name.trim().length < 3) {
      return "The name must have at least 3 characters.";
  }
  return null;
};

export const validateEmail = (email: string): string | null => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.trim()) {
      return "The email cannot be empty.";
  }
  if (!emailRegex.test(email)) {
      return "The provided email is not valid.";
  }
  return null;
};

export const validatePassword = (password: string): string | null => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!password) {
      return "The password cannot be empty.";
  }
  if (!passwordRegex.test(password)) {
      return "The password must contain at least 8 characters, including uppercase, lowercase, number, and special character.";
  }
  return null;
};

export const validatePasswordConfirmation = (password: string, confirmation: string): string | null => {
  if (!confirmation) {
      return "The password confirmation cannot be empty.";
  }
  if (password !== confirmation) {
      return "The passwords do not match.";
  }
  return null;
};
