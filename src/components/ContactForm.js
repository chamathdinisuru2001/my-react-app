import React, { useState } from 'react';
import { Typography, Button,TextField } from '@mui/material';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [unsuceesMessage, setUnsuceesMessage] = useState('');

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.email) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Invalid email format';
    }
    if (!formData.message) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccessMessage('Form submitted successfully');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }else{
      setUnsuceesMessage('Form submission failed, please try again');
      setUnsuceesMessage('');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <div>
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          // error={!!errors.name}
          // helperText={errors.name}
          InputLabelProps={{
            style:{
                color: 'var(--text-primary)'
            },
          }}
          InputProps={{
            style:{
                color: 'var(--text-primary)',
                backgroundColor: 'var(--form-bg)',
                borderColor: 'var(--border)',
            },
          }}
        />
      </div>
      {errors.name && <Typography className="error">{errors.name}</Typography>}
      <div>
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          // error={!!errors.email}
          // helperText={errors.email}
          InputLabelProps={{
            style: {
              color: 'var(--text-primary)',
            },
          }}
          InputProps={{
            style: {
              color: 'var(--text-primary)',
              backgroundColor: 'var(--form-bg)',
              borderColor: 'var(--border)',
            },
          }}
        />
      </div>
      {errors.email && <Typography className="error">{errors.email}</Typography>}
      <div>
        <TextField
          label="Message"
          variant="outlined"
          name="message"
          value={formData.message}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={4}
          // error={!!errors.message}
          // helperText={errors.message}
          InputLabelProps={{
            style: {
              color: 'var(--text-primary)',
            },
          }}
          InputProps={{
            style: {
              color: 'var(--text-primary)',
              backgroundColor: 'var(--form-bg)',
              borderColor: 'var(--border)',
            },
          }}
        />
      </div>
      {errors.message && <Typography className="error">{errors.message}</Typography>}
      <button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
        Submit
      </button>
      {successMessage && <Typography className='success'>{successMessage}</Typography>}
      {unsuceesMessage && <Typography className='error'>{unsuceesMessage}</Typography>}
    </form>
  );
};

export default ContactForm;