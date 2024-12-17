export const validateName = (name: string): string | null => {
    if (!name.trim()) {
      return "O nome não pode estar vazio.";
    }
    if (name.trim().length < 3) {
      return "O nome deve ter pelo menos 3 caracteres.";
    }
    return null;
  };
  
  export const validateEmail = (email: string): string | null => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      return "O e-mail não pode estar vazio.";
    }
    if (!emailRegex.test(email)) {
      return "O e-mail informado não é válido.";
    }
    return null;
  };
  
  export const validatePassword = (password: string): string | null => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password) {
      return "A senha não pode estar vazia.";
    }
    if (!passwordRegex.test(password)) {
      return "A senha deve conter pelo menos 8 caracteres, incluindo letra maiúscula, minúscula, número e caractere especial.";
    }
    return null;
  };
  
  export const validatePasswordConfirmation = (password: string, confirmation: string): string | null => {
    if (!confirmation) {
      return "A confirmação de senha não pode estar vazia.";
    }
    if (password !== confirmation) {
      return "As senhas não coincidem.";
    }
    return null;
  };
  