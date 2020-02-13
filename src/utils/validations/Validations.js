import * as Yup from 'yup';

/*
sample login validation
 */
export const validationsLogin = Yup.object().shape({
  email: Yup
    .string()
    .email('hatalı format')
    .required('zorunlu'),
  password: Yup
    .string()
    .min(3,'geçersiz')
    .required('zorunlu')
});

/*export const validationsWeldingCalculatorFilledButt = Yup.object().shape({
  thickness: Yup
    .number()
    .required('zorunlu')
    .max(10000, '1-10000 arası olmalıdır')
    .min(0, '0-10000 arası olmalıdır'),
  long: Yup
    .number()
    .required('zorunlu')
    .max(10000, '1-10000 arası olmalıdır')
    .min(0, '0-10000 arası olmalıdır'),
  height: Yup
    .number()
    .required('zorunlu')
    .max(5, '0-5 arası olmalıdır')
    .min(0, '0-5 arası olmalıdır'),
  density: Yup
    .number()
    .required('zorunlu')
});*/
