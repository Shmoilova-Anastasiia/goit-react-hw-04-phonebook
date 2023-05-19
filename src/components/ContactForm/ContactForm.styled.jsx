import styled from '@emotion/styled'
import { Form as FormikForm, Field, ErrorMessage as FormikError } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  max-width: 100%;
  
  padding:10px;
  justify-content: center;
  `;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
 

  max-width: 100%;
 
`;

export const LabelWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 8px;
  font-size:20px;
`;

export const FieldFormik = styled(Field)`
max-width: 100%;
font-size:20px;
border-radius: 5px;
padding: 10px;
`;

export const ErrorMessage = styled(FormikError)`
  max-width: 500px;
  font-style: italic;
  color: #9e0202;
`;

export const StyledButton = styled.button`
display: inline-flex;
align-items: center;
justify-content: center;
width: 200px;
padding: 10px;
border-radius: 5px;
font-size: 20px;
margin-top: 20px;
margin-bottom:40px;

&:hover {
    border-color: #69de32;
`;
