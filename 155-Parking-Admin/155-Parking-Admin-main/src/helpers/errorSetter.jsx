export const errorSetter = (error, setError) => {
  Object.entries(error?.details)?.map(([key, value]) => {
    setError(key, { message: value });
  });
};
