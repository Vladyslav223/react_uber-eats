import React from 'react';
import { Formik } from 'formik';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import './FormCheckout.scss';

const FormCheckout = () => (
  <Formik
    initialValues={{
      name: '', surname: '', adress: '', phone: '',
    }}
    onSubmit={() => {}}
  >
    {props => (
      <form
        onSubmit={props.handleSubmit}
        className="form-checkout"
        noValidate
        autoComplete="off"
      >
        <Input
          value={props.values.name}
          name="name"
          onChange={props.handleChange}
          placeholder="NAME"
          inputProps={{ 'aria-label': 'name' }}
        />
        <Input
          value={props.values.surname}
          name="surname"
          onChange={props.handleChange}
          placeholder="SURNAME"
          inputProps={{ 'aria-label': 'surname' }}
        />
        <Input
          value={props.values.adress}
          name="adress"
          onChange={props.handleChange}
          placeholder="ADRESS"
          inputProps={{ 'aria-label': 'adress' }}
        />
        <Input
          value={props.values.phone}
          name="phone"
          onChange={props.handleChange}
          placeholder="NAME"
          inputProps={{ 'aria-label': 'phone' }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
        >
              Order
        </Button>
      </form>
    )}
  </Formik>

);

export default FormCheckout;

FormCheckout.propTypes = {
  values: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
};

FormCheckout.defaultProps = {
  values: null,
  handleSubmit: null,
  handleChange: null,
};
