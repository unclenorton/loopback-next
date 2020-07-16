import {RequestBodyValidationOptions} from '../types';

export const defaultValidationOptions: RequestBodyValidationOptions = {
  $data: true,
  ajvKeywords: true,
  ajvErrors: true,
};
