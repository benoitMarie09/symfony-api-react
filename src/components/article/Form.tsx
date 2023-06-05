import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Field from "../Field";
import { normalizeLinks } from "../../utils/dataAccess";
import TResource from "./type";
import { SubmissionError, TError } from "../../utils/types";

interface FormProps {
  onSubmit: (item: Partial<TResource>) => any;
  initialValues?: Partial<TResource>;
  error?: TError;
  reset: () => void;
}

const Form = ({ onSubmit, error, reset, initialValues }: FormProps) => {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<TResource>({
    defaultValues: initialValues
      ? {
          ...initialValues,
          tags: initialValues["tags"]?.map((emb: any) => emb["@id"]) ?? [],
          comments:
            initialValues["comments"]?.map((emb: any) => emb["@id"]) ?? [],
          author: initialValues["author"]?.["@id"] ?? "",
        }
      : undefined,
  });

  useEffect(() => {
    if (error instanceof SubmissionError) {
      Object.keys(error.errors).forEach((errorPath) => {
        if (errors[errorPath as keyof TResource]) {
          return;
        }
        setError(errorPath as keyof TResource, {
          type: "server",
          message: error.errors[errorPath],
        });
      });

      reset();
    }
  }, [error, errors, reset, setError]);

  const onFormSubmit: SubmitHandler<TResource> = (data) => {
    onSubmit({
      ...data,
      tags: normalizeLinks(data["tags"]),
      comments: normalizeLinks(data["comments"]),
    });
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Field
        register={register}
        name="title"
        placeholder="Get the value of title"
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="content"
        placeholder="Get the value of content"
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="tags"
        placeholder=""
        type="text"
        errors={errors}
      />


      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
};

export default Form;
