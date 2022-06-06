import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import Details from "./Details";
import Settings from "./Settings";
import Review from "./Review";

const defaultData = {
  truck: "",
  capacity: "",
  contact: "",
  phone: "",
  email: "",
  date: "",
  pricing: "",
  build: "",
  fueature: "",
  currency: ""
};

const steps = [
    { id: "details" }, 
    { id: "settings" }, 
    { id: "review" }
];

function Form() {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setForm, navigation };

  switch (step.id) {
    case "details":
      return <Details {...props}/>;
    case "settings":
      return <Settings {...props}/>;
    case "review":
      return <Review {...props}/>;
  }

  return <Details />;
}

export default Form;
