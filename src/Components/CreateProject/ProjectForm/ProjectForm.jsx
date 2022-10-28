import React from 'react';
import s from './ProjectForm.module.sass'
import {Form, Formik} from "formik";
import {Route, Routes, useNavigate} from "react-router-dom";
import $ from 'jquery'
import General from "./General";
import Info from "./Info";
import ProjectSidebar from "../ProjectSidebar/ProjectSidebar";
import Award from "./Award";
import Contacts from "./Contacts";
import 'yup-phone'
import Wallet from "./Wallet";
import Navigation from "../Navigation/Navigation";
import {useSelector} from "react-redux";
import {CreateProjectSchema} from "./createProjectSchema";
import {projectAPI} from "../../../api/api";


$('body').on('focus', '.form-input', function () {
  $(this).addClass('focused')
})
$('body').on('blur', '.form-input', function () {
  if ($(this).val() === '') {
    $(this).removeClass('focused');
  }
});


const ProjectForm = () => {
  const navigate = useNavigate();
  const project = useSelector((state) => state.project)

  return (
    <Formik
      initialValues={project.data}
      validationSchema={CreateProjectSchema}
      onSubmit={(values, {resetForm, setSubmitting, setFieldValue}) => {

        values.is_project_global === 'true' ?
          setFieldValue(values.is_project_global, true) :
          setFieldValue(values.is_project_global, false);

        values.is_fundraising_limited === 'true' ?
          setFieldValue(values.is_fundraising_limited, true) :
          setFieldValue(values.is_fundraising_limited, false)

        projectAPI.postProject(values)
          .then(function () {
            setSubmitting(false);
            let links = document.getElementsByClassName('check-link');
            for (let link of links) {
              link.classList.remove('error');
            }
            resetForm();
            navigate('/thankyou');
          })
          .catch(function (error) {
            console.log(values)
            console.log(error.response.data.detail);
          });
      }}
    >
      {({
          isSubmitting,
          setFieldValue,
          getFieldProps,
          values,
          isValid
        }) => (
        <Form className={s.main}>
          <Routes>
            <Route path={'/'} element={<General setFieldValue={setFieldValue} getFieldProps={getFieldProps}/>}/>
            <Route path={'info'} element={<Info />}/>
            <Route path={'award'} element={<Award values={values} setFieldValue={setFieldValue}/>}/>
            <Route path={'contacts'} element={<Contacts />}/>
            <Route path={'wallet'} element={<Wallet />}/>
          </Routes>
          <ProjectSidebar/>
          <Navigation isSubmitting={isSubmitting} isValid={isValid}/>
        </Form>
      )}
    </Formik>
  );
};

export default ProjectForm;