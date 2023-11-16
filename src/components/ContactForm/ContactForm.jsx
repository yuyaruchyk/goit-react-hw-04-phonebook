import { MainForm, Btn, StyledLabel, StyledField, Error } from './ContactForm.styled';
import * as Yup from 'yup';
import { Formik } from 'formik';

const PhonebookSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={PhonebookSchema}
      onSubmit={(values, actions) => {
        actions.resetForm();
        onAdd(values);
      }}
    >
      <MainForm>
        <StyledLabel>
          Name
          <StyledField name="name" placeholder="Name" />
          <Error component={'span'} name="name" />
        </StyledLabel>

        <StyledLabel>
          Phone
          <StyledField name="number" placeholder="Number" />
          <Error component={'span'} name="number" />
        </StyledLabel>

        <Btn type="submit">Add contact</Btn>
      </MainForm>
    </Formik>
  );
};
