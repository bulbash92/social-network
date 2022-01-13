import React from 'react';
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useFormik} from "formik";


type PostFormType = {
    addPost: (value: string) => void
}


const PostForm = (props: PostFormType) => {

    const formik = useFormik({
        initialValues: {
            post: '',
        },
        onSubmit: values => {
            console.log('values', values)
            props.addPost(values.post)
            // props.onSubmit(values.post)
            formik.resetForm()
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <FormGroup>
                <TextField
                    style={{width: '160px', marginBottom: '10px'}}
                    id="outlined-textarea"
                    placeholder="Enter message"
                    label='post'
                    multiline
                    {...formik.getFieldProps('post')}
                />
                <Button type={'submit'} style={{width: '60px'}} variant={'contained'} color={'primary'}>
                    Send
                </Button>
            </FormGroup>
        </form>
    );
};

export default PostForm;