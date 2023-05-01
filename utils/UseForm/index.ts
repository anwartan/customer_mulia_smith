import { useState, useEffect, use } from "react";
import HttpService from "../../services/http.service";

interface FormValues {
  [key: string]: any;
}

interface FormErrors {
  [key: string]: string;
}

interface ValidationSchema {
  [key: string]: (value: any) => string | undefined;
}

interface Config {
  validationSchema?: ValidationSchema;
}

const useForm = (
  urlForm: string,
  initialValues: FormValues,
  onSubmit: (values: any) => void,
  config?: Config
) => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    if (isSubmitting && Object.keys(errors).length === 0) {
      onSubmit(values);
    }
  }, [errors]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (config?.validationSchema && config.validationSchema[name]) {
      const errorMessage = config.validationSchema[name](value);
      setErrors({ ...errors, [name]: errorMessage || "" });
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      // Make API call and handle response
      const response = await HttpService.post(urlForm, values);

      const data = response.data;
      if (response.status == 200) {
        setErrors({});
        onSubmit(data);
        setIsSubmitting(false);
        setValues(initialValues);
      } else {
        setValues(initialValues);
      }
    } catch (error) {
      if (error.response.data.meta.message == "Validation errors") {
        const apiErrors: FormErrors = {};
        const dataErrors = error.response.data.data;
        Object.keys(dataErrors).forEach((fieldName) => {
          apiErrors[fieldName] = dataErrors[fieldName][0];
        });
        setErrors(apiErrors);
      }
      setIsSubmitting(false);
    }
  };

  return { values, errors, handleChange, handleBlur, handleSubmit };
};

export default useForm;
