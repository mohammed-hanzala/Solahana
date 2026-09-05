export const validateNewsletter = (data) => {
  const errors = [];
  if (!data.email || !data.email.includes('@')) errors.push('Valid email is required');

  return {
    error: errors.length > 0 ? errors : null,
    value: data,
  };
};
