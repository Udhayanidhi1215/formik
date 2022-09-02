import React from "react";
import { useFormik } from "formik";

function App() {
  const form = useFormik({
    initialValues: { name: "", email: "", password: "" },
    onSubmit: (values) => {
      alert(`Hello! ,${values.name} You Successfully Login! `);
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "*Required";
      }
      if (!values.email) {
        errors.email = "*Required";
      } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)) {
        errors.email = "* Invalid Email";
      }
      if (!values.password) {
        errors.password = "*Required";
      } else if (values.password.length > 8) {
        errors.password = "*Maximum 8 characters";
      } else if (values.password.length < 4) {
        errors.password = "*Minimum 5 characters";
      }
      return errors;
    },
  });

  return (
    <div>
      <form onSubmit={form.handleSubmit}>
        <label>NAME</label>
        <br></br>
        <input
          type="text"
          name="name"
          onChange={form.handleChange}
          value={form.values.name}
          onBlur={form.handleBlur}
        />
        {form.touched.name && form.errors.name ? (
          <div>{form.errors.name}</div>
        ) : null}
        <br></br>
        <label>EMAIL</label>
        <br></br>
        <input
          type="email"
          name="email"
          onChange={form.handleChange}
          value={form.values.email}
          onBlur={form.handleBlur}
        />
        {form.touched.email && form.errors.email ? (
          <div>{form.errors.email}</div>
        ) : null}
        <br></br>
        <label>PASSWORD</label>
        <br></br>
        <input
          type="password"
          name="password"
          onChange={form.handleChange}
          value={form.values.password}
          onBlur={form.handleBlur}
        />
        {form.touched.password && form.errors.password ? (
          <div>{form.errors.password}</div>
        ) : null}
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
