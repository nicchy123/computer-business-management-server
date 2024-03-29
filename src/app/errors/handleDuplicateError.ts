import { TErrorSources, TGenericErrorResponse } from '../interface/error';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleDuplicateError = (err: any): TGenericErrorResponse => {

    const match = err.message.match(/"([^"]*)"/);
    const message = match && match[1];
    const duplicateField = Object.keys(err.keyValue)[0];
  const errorSources:TErrorSources = [
    {
      path: duplicateField,
      message: `"${message}" is already exist`,
    }
  ]
  const statusCode = 400;
  return {
    statusCode,
    message,
    errorSources
  };
};
export default handleDuplicateError;