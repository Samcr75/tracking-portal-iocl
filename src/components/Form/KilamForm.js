import { PhotoIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ioclImg from "../../assets/images/iocl.png";
import { FormHelperText } from "@mui/material";

export default function KilamForm() {
  const [valNew, setNew] = useState(false);
  const [valExist, setExist] = useState(false);
  const [valOthers, setOthers] = useState(false);
  // const [valbug, setBug] = useState(false);
  const [valOthersConcerned, setOthersConcerned] = useState(false);
  const [valOthersProcessInvolved, setOthersProcessInvolved] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userDegination, setUserDegination] = useState("");
  // const [userDescription, setUserDescription] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [valueNew, setValueNew] = useState(false);
  const [valueNew2, setValueNew2] = useState(false);

  const formik = useFormik({
    initialValues: {
      userName: "",
      contact: "",
      email: "",
      password: "",
      role: "",
      status: "",
      ChangeType: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .min(5, "Must be at least 5 characters")
        .required("Required"),
      contact: Yup.string()
        .matches(/^\d{10,15}$/, "Must be a valid phone number")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(5, "Must be at least 5 characters")
        .required("Required"),
      role: Yup.string().required("Required"),
      status: Yup.string().required("Required"),
      ChangeType: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // function FormValidation() {
  //   const [values, setValues] = useState({
  //     Requirements : '',
  //     Change : ''
  //   })
  // const [errors, setErrors] = useState({})
  // function handleInput(event) {
  //   const newObj = {...values, [event.target.Requirements]: event.target.value}
  //   setValues(newObj)
  // }

  // function handleValidation(event) {
  //    event.preventDefault();
  //    setErrors(validation(values));

  // }

  useEffect(() => {
    setUserDetails();
  }, []);

  const handleValueNew = (e) => {
    setValueNew(true);
    // setValueNew(neha => !neha);
    //if you want to reverse the state then you can use this method.
    // on single click it will trigger the state and on clicking it again then the state will be reverse
  };
  const handleValueNewReset = (e) => {
    setValueNew(false);
  };
  const handleValueNew2 = (e) => {
    setValueNew2(true);
    // setValueNew(neha => !neha);
    //if you want to reverse the state then you can use this method.
    // on single click it will trigger the state and on clicking it again then the state will be reverse
  };
  const handleValueNewReset2 = (e) => {
    setValueNew2(false);
  };

  const handleNew = (e) => {
    // e.preventDefault();
    // alert(popup);
    setNew(true);
    setExist(false);
    setOthers(false);
  };
  const handleExist = () => {
    setExist(true);
    setNew(false);
    setOthers(false);
  };
  const handleOthers = () => {
    setOthers(true);
    setExist(false);
    setNew(false);
  };

  const handleBug = (e) => {
    // e.preventDefault();
    // alert(popup);
    setNew(false);
    setExist(false);
    setOthers(false);
  };

  const handleOthersConcerned = (e) => {
    // e.preventDefault();
    // setOthersConcerned(true);
    if (e.target.checked) {
      setOthersConcerned(true);
    } else {
      setOthersConcerned(false);
    }
  };

  const handleOthersProcessInvolved = (e) => {
    // e.preventDefault();
    if (e.target.checked) {
      setOthersProcessInvolved(true);
    } else {
      setOthersProcessInvolved(false);
    }
  };

  const inpVal = [
    {
      name: "Nehal",
      designation: "SDE",
      placeholder: "Name",
    },
    {
      name: "SDE",
      designation: "Sambar",
      placeholder: "Designation",
    },
    {
      name: "Parantha",
      designation: "SDE",
      placeholder: "Dish",
    },
  ];

  const setUserDetails = (e) => {
    setUserName("Neha");
    setUserEmail("Neha@gmail.com");
    setUserDegination("Developer");
  };
  const [getdata, setdata] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          "http://localhost:5021/api/Master/GETCHANGETYPE"
        );
        const result = await response.json();
        setdata(result);
        console.log("data", result);
      } catch (error) {}
    };
    fetchdata();
  }, []);
  return (
    <form
      onSubmit={formik.handleSubmit}
      onReset={formik.handleReset}
      className="p-4 bg-orange-200 m-2 rounded-md"
    >
      <div className="borde border-gray-400 border-2 rounded-lg p-2">
        <div className="flex h-16 shrink-0 items-center justify-between font-extrabold ">
          <label
            htmlFor="Information Systems Department"
            className=" grid grid-colblock text-sm font-medium leading-6 text-gray-900 sm:pt-1.5 px-10 drop-shadow-md"
          >
            इंडियन ऑयल कॉर्पोरेशन डलडिटेि
            <b> व्यापार विकास-कॉपोरेट कायाालय</b>
          </label>
          {/* <div className="flex h-16 shrink-0 items-center justify-center"> */}
          <div className="h-full w-[.15px] bg-gray-400 bg-opacity-9 " />
          <img
            className="h-24 w-auto mb-2 drop-shadow-md"
            // src="data:image/png;base64,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"
            src={ioclImg}
            alt="Your Company"
          />
          {/* </div> */}

          <div className="h-full w-[.15px] bg-gray-400 bg-opacity-9  " />

          <label
            htmlFor="Indian Oil Corporation Limited"
            className="grid grid-cols-1block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5 px-10 drop-shadow-md "
          >
            <b>Indian Oil Corporation Limited</b>
            Business Development – Corporate Office
          </label>
        </div>

        {/* {nehal ? (
          <h1 className="text-3xl font-bold text-violet-600">Nehal is true </h1>
        ) : (
          <h1 className="text-3xl font-bold text-blue-600">Nehal is false </h1>
        )}
        <button className="bg-red-500 p-4" onClick={handleNehal}>
          Nehal
        </button> */}

        <div className="h-[.15px] w-full bg-gray-400 bg-opacity-9 " />
        <div className="flex justify-center ">
          <label
            htmlFor="Information Systems Department"
            className="block text-sm leading-6 text-gray-900 sm:pt-1.5 font-extrabold drop-shadow-md "
          >
            <b>Information Systems Department</b>
          </label>
        </div>
      </div>
      {/* bg-gradient-to-r from-slate-200 to-orange-200  */}
      <div className=" sm:space-y-8">
        <div className="borde border-gray-400 border-2 rounded-lg p-2">
          <div className="borde ">
            {/* <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0"> */}
            <div className="sm:flex gr sm:grid-cols-2 sm:items-start justify-between sm:gap-4 sm:py-6">
              <div className=" onSubmit={handleValidation}">
                <label
                  htmlFor="Requirements Description and Background"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  <div>
                    {" "}
                    Requirements Description and Background (Attach file if
                    required)<span style={{ color: "red" }}>*</span>
                  </div>
                </label>
              </div>
              <div className="sm:grid w-full">
                <div className="mt-2 w-full sm:mt-0 px-5">
                  <textarea
                    rows={2}
                    cols={30}
                    //value={this.state.textareaValue}
                    //onChange={(event) => this.handleOnChange(event)}
                    className=" w-full p-2 rounded-md drop-shadow-md"
                    placeholder="Please Enter..."
                    {...formik.getFieldProps("userName")}
                    // onChange={handleInput}
                  />
                  {/* {errors.Requirements && <p style={{color: "red"}}>{errors.Requirements}</p>} */}
                  <p className="px-1">
                    {formik.touched.userName && formik.errors.userName && (
                      <FormHelperText error>
                        {formik.errors.userName}
                      </FormHelperText>
                    )}
                  </p>
                </div>

                {/* stttttttttt */}

                <div className="w-full px-5 ">
                  <div className="mt-2 sm:col-span-2 sm:mt-0 rounded-md drop-shadow-md">
                    <div
                    //  className="
                    // //  max-w-2xl justify-center rounded-lg border border-dashed border-gray-900/25"
                    >
                      <div className="text-center items-baseline flex gap-3">
                        {/* <PhotoIcon  aria-hidden="true" className="mx-auto h-4 w-4 text-gray-300" /> */}
                        <div className="justify-between mt-4 flex text-sm leading-6 text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-sm px-2 bg-white font-semibold 
                            text-black focus-within:outline-none focus-within:ring-2
                             focus-within:ring-black focus-within:ring-offset-2
                              hover:text-indigo-500 hover:bg-slate-50 transform transition-all ease-in-out duration-300 hover:scale-105 "
                          >
                            <span className="rounded-md py-1">
                              Upload a file
                            </span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          {/* <p className="pl-1">or drag and drop</p> */}
                        </div>
                        <p className="text-xs leading-5 py-9 text-gray-600">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* finnnnnnnnnn */}
            </div>

            <div className="h-[.15px] w-full bg-gray-400 bg-opacity-9 " />

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="Change Type"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Change Type
                <p className="px-">
                  {formik.touched.ChangeType && formik.errors.ChangeType && (
                    <FormHelperText error>
                      {formik.errors.ChangeType}
                    </FormHelperText>
                  )}
                </p>
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <div className="mt-4 sm:coExistingl-span-2 sm:mt-0">
                  <div className="max-w-lg space-y-6">
                    <div
                      className="sm:inline-flex sm:flex-cols-1 items-center align-middle
                      justify-between w-full"
                    >
                      <div className="relative flex flex-co max-w-28 w-full gap-x-3 items-center">
                        <input
                          id="New"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          onChange={handleNew}
                          // {...formik.getFieldProps("ChangeType")}
                        />
                        <label
                          htmlFor="New"
                          className="font-medium text-gray-900"
                        >
                          New
                        </label>
                      </div>

                      <div className="relative w-full flex gap-x-3 items-center">
                        <input
                          id="Existing Process Change"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          onChange={handleExist}
                        />

                        <label
                          htmlFor="Existing Process Change"
                          className="font-medium text-gray-900 w-full flex-nowrap"
                        >
                          Existing Process Change
                        </label>
                      </div>
                    </div>

                    <div className="py- block">
                      {valNew && (
                        <div className="py- space-y-2">
                          <h1 className="font-semibold">
                            Functional Approval Date & Reference No
                          </h1>
                          <div className="mt-2 w-full sm:mt-0 ">
                            <textarea
                              rows={2}
                              cols={30}
                              //value={this.state.textareaValue}
                              //onChange={(event) => this.handleOnChange(event)}
                              className=" w-full p-2 rounded-md drop-shadow-md"
                              placeholder="Please Enter..."
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="py- block">
                      {valExist && (
                        <div className="py- space-y-2">
                          <h1 className="font-semibold">
                            Functional Approval Date & Reference No
                          </h1>
                          <div className="mt-2 w-full sm:mt-0 ">
                            <textarea
                              rows={2}
                              cols={30}
                              //value={this.state.textareaValue}
                              //onChange={(event) => this.handleOnChange(event)}
                              className=" w-full p-2 rounded-md drop-shadow-md"
                              placeholder="Please Enter..."
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="sm:flex sm:flex-cols-1 justify">
                      <div className="relative max-w-28 w-full flex gap-x-3 items-center">
                        <input
                          id="Bug Fix"
                          name="push-notifications"
                          type="radio"
                          onChange={handleBug}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />

                        <label
                          htmlFor="Bug Fix"
                          className="font-medium text-gray-900"
                        >
                          Bug Fix
                        </label>
                      </div>

                      <div className="relative flex gap-x-3 items-center">
                        <input
                          id="Others"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          onChange={handleOthers}
                        />

                        <label
                          htmlFor="Others"
                          className="font-medium text-gray-900"
                        >
                          Other
                        </label>
                      </div>
                    </div>
                    <div className="py- block">
                      {valOthers && (
                        <h1 className="mt-1 font-semibold">
                          <p className="mt-1 font-semibold">
                            Pls specify details
                            <div className="mt-2 w-full sm:mt-0 ">
                              <textarea
                                rows={2}
                                cols={30}
                                //value={this.state.textareaValue}
                                //onChange={(event) => this.handleOnChange(event)}
                                className=" w-full p-2 rounded-md drop-shadow-md"
                                placeholder="Please Enter..."
                              />
                            </div>
                          </p>
                        </h1>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="h-[.15px] w-full bg-gray-400 bg-opacity-9 " /> */}

            {/* <div className="sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:py-6">
              <label
                htmlFor="Functional Approval Date & Reference No (Only for New & Existing Process Change)"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Functional Approval Date & Reference No 
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  // name="name"
                  // id="last-name"
                  autocomplete="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}
            <div className="h-[.15px] w-full bg-gray-400 bg-opacity-9 " />

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="Requirement Document attached"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Requirement Document attached
              </label>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="push-YES"
                    name="push-notifications"
                    type="radio"
                    // type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="YES" className="font-medium text-gray-900">
                    YES
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="push-NO"
                    name="push-notifications"
                    type="radio"
                    //  type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="NO" className="font-medium text-gray-900">
                    NO
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="borde border-gray-400 border-2 rounded-lg p-2 pb-4">
          <div className="flex flex-col space-y-3 max-w-72 w-full">
            <div className="sm: flex flex-col sm:grid-cols-3 sm:items-start max-w-96 w-full sm:gap-4 sm:py-">
              <label
                htmlFor="Requested by(Business User)"
                className="block max-w-96 w-full text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Requested by (Business User)
              </label>
            </div>
            <div className="mt-2 sm:col-span-2 sm:mt-0 w-full">
              <input
                type="text"
                placeholder="Enter Your Name"
                name="name"
                // id="last-name"
                autocomplete="name"
                className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              />
            </div>

            <div className="mt-2 sm:col-span-2 sm:mt-0 w-full">
              {/* <label
                  htmlFor=""
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                  ></label> */}

              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  placeholder="  Enter Your Designation"
                  name="name"
                  // id="last-name"
                  autocomplete="Designation"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:gri sm:grid-cols-3 sm:items-start sm:gap-4 ">
              {/* <label
                  htmlFor=""
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                ></label> */}
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  placeholder="  Enter Your Signature"
                  name="name"
                  // id="last-name"
                  autocomplete="Signature"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 
                    shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                    focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* <div className="sm:gri sm:grid-cols-3 sm:items-start sm:gap-4 sm:py- w-full">
              
             
            </div> */}
          </div>
        </div>
        {/* {start} */}
        <div className="borde border-gray-400 border-2 rounded-lg p-2 pb-4">
          <div className="sm:flex justify-between px-2">
            <div className="flex flex-col space-y-3 max-w-72 w-full">
              <div>
                <h2 className="text-sm font-semibold leading-7 w-full text-gray-900">
                  Person Responsible /1st Point of Contact
                </h2>
              </div>

              <div className="mt-2 sm:col-span-2 sm:mt-0 w-full gap-4">
                <input
                  type="text"
                  placeholder={userName}
                  value={userName}
                  // name={inputVal?.name}
                  id="txtUserName"
                  autocomplete="name"
                  className="block w-full  rounded-md border-0 p-1.5 text-gray-900 
                shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>

              <div className="mt-2 sm:col-span-2 sm:mt-0 w-full gap-4">
                <input
                  type="text"
                  placeholder={userEmail}
                  value={userEmail}
                  id="txtUserEmail"
                  autocomplete="name"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 
                shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>

              <div className="mt-2 sm:col-span-2 sm:mt-0 w-full gap-4">
                <input
                  type="text"
                  placeholder={userDegination}
                  value={userDegination}
                  // name={inputVal?.name}
                  id="txtUserDeginstion"
                  autocomplete="name"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 
                shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* <div className="flex flex-col space-y-3"> */}
            {/* <div className="sm:gri flex flex-col sm:grid-cols-3 sm:items-start sm:gap-4 ">
                <label
                  htmlFor="Requested by(Business User)"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Requested by (Business User)
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0 w-full">
                  <input
                    type="text"
                    placeholder="  Enter Your Name"
                    name="name"
                    // id="last-name"
                    autocomplete="name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  />
                </div>
              </div> */}

            {/* <div className="sm:gri sm:grid-cols-3 sm:items-start sm:gap-4 sm:py- w-full"> */}
            {/* <label
                  htmlFor=""
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                  ></label> */}
            {/* <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    placeholder="  Enter Your Designation"
                    name="name"
                    // id="last-name"
                    autocomplete="Designation"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  />
                </div> */}
            {/* </div> */}

            {/* <div className="sm:gri sm:grid-cols-3 sm:items-start sm:gap-4 "> */}
            {/* <label
                  htmlFor=""
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                ></label> */}
            {/* <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    placeholder="  Enter Your Signature"
                    name="name"
                    // id="last-name"
                    autocomplete="Signature"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 
                    shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                    focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  />
                </div> */}
            {/* </div> */}

            {/* <div className="sm:gri sm:grid-cols-3 sm:items-start sm:gap-4 sm:py- w-full">
             
            </div> */}
            {/* </div> */}

            {/* <div className="h-[.15px] w-full bg-gray-400 bg-opacity-9  " /> */}

            <div className="flex flex-col space-y-3 max-w-72 w-full">
              <div className="sm: flex flex-col sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-">
                <label
                  htmlFor="Requested by(Business User)"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Location-In-Charge
                </label>
              </div>
              <div className="mt-2 sm:col-span-2 sm:mt-0 w-full">
                <input
                  type="text"
                  placeholder="  Enter Your Name"
                  name="name"
                  // id="last-name"
                  autocomplete="name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>

              <div className="mt-2 sm:col-span-2 sm:mt-0 w-full">
                {/* <label
                  htmlFor=""
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                  ></label> */}

                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    placeholder="  Enter Your Designation"
                    name="name"
                    // id="last-name"
                    autocomplete="Designation"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:gri sm:grid-cols-3 sm:items-start sm:gap-4 ">
                {/* <label
                  htmlFor=""
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                ></label> */}
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    placeholder="  Enter Your Signature"
                    name="name"
                    // id="last-name"
                    autocomplete="Signature"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 
                    shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                    focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* <div className="sm:gri sm:grid-cols-3 sm:items-start sm:gap-4 sm:py- w-full">
              
             
            </div> */}
            </div>
          </div>
        </div>
        {/* {------REFERENCE FOR DROP DOWN BUTTON------} */}

        {/* <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
          <label
            htmlFor="country"
            className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
          >
            Country
          </label>
          <div className="mt-2 sm:col-span-2 sm:mt-0">
            <select
              id="country"
              name="country"
              autocomplete="country-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
        </div> */}
        <div className="mt-4 m-0 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="inline-flex justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm 
            hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
             focus-visible:outline-blue-700"
            onClick={handleValueNewReset}
          >
            Reset
          </button>
          <button
            type="submit"
            className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm 
            hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
             focus-visible:outline-indigo-600"
            onClick={handleValueNew}
          >
            Submit
          </button>
        </div>
        {valueNew && (
          <div className="sm:space-y-8">
            <div className="borde border-gray-400 border-2 rounded-lg p-2">
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="Tick Concerned Application:"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Tick Concerned Application:
                </label>
                {/* <div className="mt-2 sm:col-span-2 sm:mt-0"> */}
                <div className=" mt-4 sm:col-span-2 sm:mt-0">
                  <div className="sm:flex max-w-lg gap-12">
                    <div className="relative flex space-x-1">
                      <div className="flex h-6 items-center ">
                        <input
                          id="YAS"
                          name="YAS"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="YAS"
                          className="font-medium text-gray-900"
                        >
                          YAS
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-1">
                      <div className="flex h-6 items-center">
                        <input
                          id="EWMS"
                          name="EWMS"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="EWMS"
                          className="font-medium text-gray-900"
                        >
                          EWMS
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-1">
                      <div className="flex h-6 items-center">
                        <input
                          id="iSMART"
                          name="iSMART"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="iSMART"
                          className="font-medium text-gray-900"
                        >
                          iSMART
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-1">
                      <div className="flex h-6 items-center">
                        <input
                          id="Others"
                          name="Others"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          onChange={handleOthersConcerned}

                          //onClick={!hand}
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="Others"
                          className="font-medium text-gray-900"
                        >
                          Others
                        </label>

                        {/* <p className="mt - 1">
                        If others, pls specify details
                        ________________________________________
                      </p> */}
                      </div>
                    </div>
                  </div>
                  {valOthersConcerned && (
                    <div className="py- space-y-2">
                      <h1 className="font-semibold">Please specify details</h1>
                      <div className="mt-2 w-full sm:mt-0 ">
                        <textarea
                          rows={2}
                          cols={30}
                          //value={this.state.textareaValue}
                          //onChange={(event) => this.handleOnChange(event)}
                          className=" w-full p-2 rounded-md drop-shadow-md"
                          placeholder="Please Enter..."
                        />
                      </div>
                    </div>
                  )}
                </div>
                {/* </div> */}
              </div>

              <div className="h-[.15px] w-full bg-gray-400 bg-opacity-9" />

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="Process Involved"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Process Involved
                </label>
                {/* <div className="mt-2 sm:col-span-2 sm:mt-0"> */}
                <div className="mt-4 sm:col-span-2 sm:mt-0">
                  <div className="sm:flex max-w-lg gap-6 ">
                    <div className="relative flex gap-x-1">
                      <div className="flex h-6 items-center">
                        <input
                          id="Inbound"
                          name="Inbound"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="Inbound"
                          className="font-medium text-gray-900"
                        >
                          Inbound
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-1">
                      <div className="flex h-6 items-center">
                        <input
                          id="Outbound"
                          name="Outbound"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="Outbound"
                          className="font-medium text-gray-900"
                        >
                          Outbound
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-1">
                      <div className="flex h-6 items-center">
                        <input
                          id="Others"
                          name="Others"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          onChange={handleOthersProcessInvolved}
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="Others"
                          className="font-medium text-gray-900"
                        >
                          Others
                        </label>

                        {/* <p className="mt - 1">
                        If others, pls specify details
                        ________________________________________
                      </p> */}
                      </div>
                    </div>
                    {valOthersProcessInvolved && (
                      <div className="py- space-y-2">
                        <h1 className="font-semibold">
                          Please specify details
                        </h1>
                        <div className="mt-2 w-full sm:mt-0 ">
                          <textarea
                            rows={2}
                            cols={30}
                            //value={this.state.textareaValue}
                            //onChange={(event) => this.handleOnChange(event)}
                            className=" w-full p-2 rounded-md drop-shadow-md"
                            placeholder="Please Enter..."
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {/* </div> */}
              </div>
              <div className="h-[.15px] w-full bg-gray-400 bg-opacity-9" />

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="Plant Affected"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Plant Affected
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <div className="mt-4 sm:col-span-2 sm:mt-0">
                    <div className="sm:flex max-w-lg space-x-3">
                      <div className="relative flex gap-x-1">
                        <div className="flex h-6 items-center">
                          <input
                            id="Polymer Terminal, Panipat"
                            name="Polymer Terminal, Panipat"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        <div className="text-sm leading-6">
                          <label
                            htmlFor="Polymer Terminal, Panipat"
                            className="font-medium text-gray-900"
                          >
                            Polymer Terminal, Panipat
                          </label>
                        </div>
                      </div>
                      <div className="relative flex gap-x-1">
                        <div className="flex h-6 items-center">
                          <input
                            id="PTA Terminal, Panipat"
                            name="PTA Terminal, Panipat"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        <div className="text-sm leading-6">
                          <label
                            htmlFor="PTA Terminal, Panipat"
                            className="font-medium text-gray-900"
                          >
                            PTA Terminal, Panipat
                          </label>
                        </div>
                      </div>
                      <div className="relative flex gap-x-1">
                        <div className="flex h-6 items-center">
                          <input
                            id="Polymer Terminal, Paradip"
                            name="Polymer Terminal, Paradip"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        <div className="text-sm leading-6">
                          <label
                            htmlFor="Polymer Terminal, Paradip"
                            className="font-medium text-gray-900"
                          >
                            Polymer Terminal, Paradip
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="inline-flex justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm 
            hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
             focus-visible:outline-blue-700"
                onClick={handleValueNewReset2}
              >
                Reset
              </button>
              <button
                type="submit"
                className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleValueNew2}
              >
                Submit
              </button>
            </div>
          </div>
        )}
        {valueNew2 && (
          <div className="borde border-gray-400 border-2 rounded-lg p-2">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-1">
              <label
                htmlFor="Reviewed by"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Reviewed by
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="Name"
                  id="Reviewed by"
                  autocomplete="Name"
                  placeholder="  Reviewed by"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-1">
              <label
                htmlFor="Engg-In-Charge"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Engg-In-Charge
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="Name"
                  id="Engg-In-Charge"
                  autocomplete="Name"
                  placeholder="  Engg-In-Charge"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-1">
              <label
                htmlFor="HOD, BD-IS"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                HOD, BD-IS
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="Name"
                  id="HOD, BD-IS"
                  autocomplete="Name"
                  placeholder="  HOD, BD-IS"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-1">
              <label
                htmlFor="Implementor"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Implementor
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="Name"
                  id="Implementor"
                  autocomplete="Name"
                  placeholder="  Implementor"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      {getdata.map((item) => (
        <li>{item.changetypename}</li>
      ))}
    </form>
  );
}
