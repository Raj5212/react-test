import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addFormData } from "../../redux/actions/formAction";

const AgentRegister = () => {
  const dispatch = useDispatch();
  const [age, setAge] = useState(null);
  const [checkInput, setCheckInput] = useState(false);

  const [state, setState] = useState({
    email: "",
    first_name: "",
    last_name: "",
    address1: "",
    address2: "",
    parmanentAddress1: "",
    parmanentAddress2: "",
    date: "",
    fileName: "",
    typeofFile: "",
  });

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First name is required"),

    last_name: Yup.string().required("Last name is required"),

    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),

    address1: Yup.string().required("address is required"),

    address2: Yup.string().required("address is required"),

    date: Yup.date()
      .max(new Date(Date.now() - 567648000000), "You must be at least 18 years")
      .required("Required"),
  });

  const handleSubmit = (values) => {
    let finalValues = values;
    if (checkInput) {
      finalValues.parmanentAddress1 = finalValues.address1;
      finalValues.parmanentAddress2 = finalValues.address2;
    }
    finalValues["documents"] = docList;

    console.log({ submit: finalValues });
    dispatch(addFormData(finalValues));
  };

  const [docList, setDocList] = useState([
    {
      filename: "",
      filetype: "",
      file: "",
    },
  ]);

  const setDocument = (e, index) => {
    console.log("im here");
    let oldDocs = docList;
    oldDocs[index][e.target.name] = e.target.value;
    setDocList(oldDocs);
    console.log({ oldDocs });
  };

  const setDocumentFile = (e, index) => {
    console.log("im here");
    let oldDocs = docList;
    oldDocs[index][e.target.name] = e.target.files[0];
    setDocList(oldDocs);
    console.log({ oldDocs });
  };

  return (
    <>
      <div className='card card-plain formdata'>
        <div className='mx-auto rounded-xl m-10 p-5'>
          <p className='text-3xl text-gray-700 font-bold'>
            REACT JS MACHINE TEST
          </p>
        </div>

        <Formik
          initialValues={{
            email: state.email,
            first_name: state.first_name,
            last_name: state.last_name,
            address1: state.address1,
            address2: state.address2,
            parmanentAddress1: state.parmanentAddress1,
            parmanentAddress2: state.parmanentAddress2,
            date: state.date,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ touched, errors, isSubmitting, values }) => {
            {
              /* console.log({ check: values.toggle }); */
            }
            setCheckInput(values.toggle);
            return (
              <Form>
                <div className='grid gap-6 mb-6 md:grid-cols-2 justify-items-center'>
                  <div className='w-80'>
                    <label
                      for='first_name'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'
                    >
                      First Name
                      <span className='text-red-700'>*</span>
                    </label>
                    <Field
                      type='text'
                      name='first_name'
                      id='first_name'
                      className={`bg-gray-50 border border-gray-300 text-gray-900 
        text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full 
        p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 form-control ${
          touched.first_name && errors.first_name ? "is-invalid" : ""
        }`}
                      placeholder='Enter your first name here..'
                    />
                    <ErrorMessage
                      name='first_name'
                      component='div'
                      className='text-red-700'
                    />
                  </div>

                  <div className='w-80'>
                    <label
                      for='last_name'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'
                    >
                      Last Name
                      <span className='text-red-700'>*</span>
                    </label>
                    <Field
                      type='text'
                      name='last_name'
                      id='last_name'
                      className={`bg-gray-50 border border-gray-300 text-gray-900
         text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
         dark:focus:ring-blue-500 dark:focus:border-blue-500 form-control ${
           touched.last_name && errors.last_name ? "is-invalid" : ""
         } `}
                      placeholder='Enter your last name here..'
                    />
                    <ErrorMessage
                      name='last_name'
                      component='div'
                      className='text-red-700'
                    />
                  </div>

                  <div className='w-80'>
                    <label
                      for='email'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'
                    >
                      E-mail
                      <span className='text-red-700'>*</span>
                    </label>
                    <Field
                      type='email'
                      name='email'
                      id='email'
                      className={`bg-gray-50 border 
    border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
    focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
    dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
    dark:focus:border-blue-500 form-control ${
      touched.email && errors.email ? "is-invalid" : ""
    }`}
                      placeholder='ex:myname@example.com'
                    />
                    <ErrorMessage
                      name='email'
                      component='div'
                      className='text-red-700'
                    />
                  </div>

                  <div className='w-80'>
                    <label
                      for='phone'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'
                    >
                      Date of Birth
                    </label>
                    <Field
                      type='date'
                      name='date'
                      id='date'
                      className={`{bg-gray-50 border border-gray-300 text-gray-900 text-sm 
        rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
        dark:focus:border-blue-500 form-control ${
          touched.date && errors.date ? "is-invalid" : ""
        }`}
                      placeholder='123-45-678'
                      pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
                    />
                    {age}
                    <ErrorMessage
                      name='date'
                      component='div'
                      className='text-red-700'
                    />
                  </div>

                  <div className='w-80'>
                    <label
                      for='website'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'
                    >
                      Residential Address
                      <p className='text-gray-400'>
                        Street 1<span className='text-red-700'>*</span>
                      </p>
                    </label>

                    <Field
                      type='text'
                      name='address1'
                      id='address1'
                      className={`bg-gray-50 border border-gray-300 
        text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 form-control ${
           touched.address1 && errors.address1 ? "is-invalid" : ""
         }`}
                    />
                    <ErrorMessage
                      name='address1'
                      component='div'
                      className='text-red-700'
                    />
                  </div>

                  <div className='w-80'>
                    <label
                      for='website'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      label
                      <p className='text-gray-400'>
                        Street 2<span className='text-red-700'>*</span>
                      </p>
                    </label>

                    <Field
                      type='text'
                      name='address2'
                      id='address2'
                      className={`bg-gray-50 border border-gray-300 
    text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
    block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 form-control ${
       touched.address2 && errors.address2 ? "is-invalid" : ""
     }`}
                    />
                    <ErrorMessage
                      name='address2'
                      component='div'
                      className='text-red-700'
                    />
                  </div>
                </div>
                <div className='grid gap-6 mb-6 md:grid-cols-1 justify-items-start ml-56'>
                  <div className='mb-6'>
                    <Field
                      type='checkbox'
                      name='toggle'
                      className='w-4 h-4 
border border-gray-300 rounded bg-gray-50 focus:ring-3 
focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 
dark:focus:ring-blue-600 dark:ring-offset-gray-800'
                      // InputProps={{ onChange: handleCheckBox(values) }}
                    />

                    <label
                      for='remember'
                      className='ml-2 text-sm font-medium text-black-900 dark:text-black-300'
                    >
                      Same as Residential Address
                    </label>
                  </div>
                </div>
                <div className='grid gap-6 mb-6 md:grid-cols-2 justify-items-center'>
                  <div className='w-80'>
                    <label
                      for='website'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'
                    >
                      Permanent Address
                      <p className='text-gray-400'>Street 1</p>
                    </label>

                    <Field
                      type='text'
                      name={checkInput ? "address1" : "parmanentAddress1"}
                      disabled={checkInput == true}
                      id='parmanentAddress1'
                      className='bg-gray-50 border border-gray-300 
 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    />
                  </div>

                  <div className='w-80'>
                    <label
                      for='website'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      label
                      <p className='text-gray-400'>Street 2</p>
                    </label>

                    <Field
                      type='text'
                      name={checkInput ? "address2" : "parmanentAddress2"}
                      disabled={checkInput == true}
                      id='parmanentAddress2'
                      // InputProps={{ onChange: handleCheckBox(values) }}
                      className='bg-gray-50 border border-gray-300 
 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    />
                  </div>
                </div>

                <h1>Upload Documents</h1>

                {docList.length  > 0
                  ? docList?.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className='grid gap-6 mb-6 md:grid-cols-4 justify-items-center'
                        >
                          <div className='w-80'>
                            <label
                              for='website'
                              className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'
                            >
                              <p className='text-gray-400'>
                                File Name
                                <span className='text-red-700'>*</span>
                              </p>
                            </label>

                            <input
                              type='text'
                              name='filename'
                              id='fileName'
                              onChange={(e) => setDocument(e, index)}
                              className='bg-gray-50 border border-gray-300 
                               text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                                block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                              placeholder='sfsafds'
                            />
                            <ErrorMessage
                              name='fileName'
                              component='div'
                              className='text-red-700'
                            />
                          </div>

                          <div className='w-80'>
                            <label
                              for='website'
                              className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'
                            >
                              <p className='text-gray-400'>
                                Type of File
                                <span className='text-red-700'>*</span>
                              </p>
                            </label>

                            <select
                              className='bg-gray-50 border border-gray-300 
                  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                              name='filetype'
                              onChange={(e) => setDocument(e, index)}
                            >
                              <option>Select File</option>
                              <option
                                value={[
                                  "jpg",
                                  "png",
                                  "gif",
                                  "jpeg",
                                  "svg",
                                  "webp",
                                ]}
                              >
                                Image
                              </option>
                              <option value='pdf'>Pdf</option>
                            </select>

                            <ErrorMessage
                              name='typeoffile'
                              component='div'
                              className='text-red-700'
                            />
                          </div>

                          <div className='w-80'>
                            <div
                              className='mt-7 bg-gray-50 border border-gray-300 
                              text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                              block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                              dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            >
                              <input
                                className='bg-gray-50 border border-gray-300 
                    text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                    block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                type='file'
                                name='file'
                                id='file'
                                onChange={(e) => setDocumentFile(e, index)}
                                accept={docList[index].filetype}
                              />
                              <ErrorMessage
                                name='file'
                                component='div'
                                className='text-red-700'
                              />
                            </div>
                          </div>

                          <div className='w-24 mt-8'>
                            <button
                              type='button'
                              onClick={() =>
                          {if(docList.length < 2){
                            setDocList([
                                  ...docList,
                                  {
                                    filename: "",
                                    filetype: "",
                                    file: "",
                                  },
                                ])
                          }
                            
                                
                           
                          }
                             
                              }
                              className='bg-gray-50 border border-gray-300 p-5
                            text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                        block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                           dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            >
                              +
                            </button>
                          </div>
                        </div>
                      );
                    })
                  : null}
                <button
                  type='submit'
                  className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
text-sm w-full sm:w-auto px-5 py-2.5 text-center 
dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  Submit
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default AgentRegister;
