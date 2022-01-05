import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import {useFormik} from "formik";

type PropsType = {
    onSubmit: (values: any) => void
}

const AddMessageForm = (props: PropsType) => {

    const formik = useFormik({
        initialValues: {
            message: '',
        },
        onSubmit: values => {
            console.log('values', values)
            props.onSubmit(values.message)
            //alert(JSON.stringify(values, null, 2));
            formik.resetForm()
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <FormGroup>
                <TextField
                    id="outlined-textarea"
                    placeholder="Enter message"
                    label='message'
                    multiline
                    {...formik.getFieldProps('message')}
                />
                <Button type={'submit'} variant={'contained'} color={'primary'}>
                    Send
                </Button>
            </FormGroup>
        </form>
    );
};

export default AddMessageForm;