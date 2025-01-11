interface EmailData {
  to: string;
  subject: string;
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<void> => {
  // Here you would implement the actual email sending logic
  // For now, we'll simulate the API call
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
};