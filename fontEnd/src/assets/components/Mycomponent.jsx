import React from "react";
import { useForm } from "react-hook-form";

function MyComponent() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input ref={register} type="file" name="picture" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default MyComponent;
