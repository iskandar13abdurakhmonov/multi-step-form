import React from "react";
import FormHeader from "./FormHeader";
import styles from "./PersonalInfo.module.css";
import Button from "../../UI/Button";
import Input from '../../UI/Input'
import { GlobalContext } from "../../hooks/GlobalContext";
import useForm from "../../hooks/useForm";

const PersonalInfo = () => {
  const { step, setStep } = React.useContext(GlobalContext);
  const { formData, handleChange, errors, validate } = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    if (validate()) {
      setStep(step + 1);
    }
  }

  return (
    <>
      <FormHeader
        title="Personal Info"
        info="Please provide your name, email address, and phone number."
      />
      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          id="name"
          label="Name"
          placeholder="e.g. Stephen King"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />
        <Input
          type="email"
          name="email"
          id="email"
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <Input
          type="number"
          name="phone"
          id="phone"
          label="Phone Number"
          placeholder="e.g. +1 234 567 890"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
        />
        <div className={styles.flexParent}>
          <div className={styles.buttonWrapper}>
            <Button id="next" buttonInfo="Next Step" />
          </div>
        </div>
      </form>
    </>
  );
};

export default PersonalInfo;
