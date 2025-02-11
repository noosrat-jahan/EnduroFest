import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { format } from "date-fns";

import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "../index.css";
import DatePicker from "react-datepicker";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyMarathon = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [myMarathon, setMyMarathon] = useState([]);
  const [regEndDate, setRegEndDate] = useState(new Date());

  const [marathonData, setMarathonData] = useState({});

  const [AllApplications, setAllApplications] = useState([]);

  // const myApplications = AllApplications.filter(myApplication => myApplication.applicantEmail === user?.email)

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_URL}/my-marathons?email=${user?.email}`,
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        setMyMarathon(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [user?.email]);

  const handleUpdateMarathon = (e, id) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.set("regEndDate", regEndDate);
    const marathonUpdateInfo = Object.fromEntries(formData.entries());
    console.log(marathonUpdateInfo, id);

    console.log("regenddate", regEndDate);
    axios
      .put(
        `${import.meta.env.VITE_API_URL}/all-marathons/${id}`,
        marathonUpdateInfo
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            text: "Marathon Information is Updated Successfully",
            showConfirmButton: false,
            timer: 4000,
          });
          navigate("/dashboard/my-marathon-list");
        }
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "btn btn-success",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_API_URL}/all-marathons/${id}`)
          .then((res) => {
            console.log(res.data);

            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remainingMarathon = myMarathon.filter(
                (marathon) => marathon._id !== id
              );
              setMyMarathon(remainingMarathon);
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>MyMarathon - EnduroFest</title>
      </Helmet>

      {/* component used from mamba UI  */}
      <div className="container  p-2 mx-auto sm:p-4 dark:text-gray-800">
        {myMarathon.length < 1 && (
          <h1 className="text-center font-bold text-red-500 text-2xl mb-3">
            {" "}
            Event Creation is Zero
          </h1>
        )}
        <h2 className="mb-4 text-2xl dark:text-white font-semibold leading-tight">
          My Created Marathons
        </h2>
        <div className="overflow-x-auto bg-gray-50 dark:bg-black">
          <table className="min-w-full text-sm">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="dark:bg-gray-800 dark:text-gray-100">
              <tr className="text-center">
                <th className="p-3">SL.No.</th>
                <th className="p-3">Title</th>
                <th className="p-3">Event Date</th>
                <th className="p-3">Total Registration Count</th>
                <th className="p-3 ">Location</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {myMarathon.map((mymarathon, index) => (
                <tr
                  key={mymarathon._id}
                  className="border-b border-opacity-20 self-center dark:border-gray-300 dark:bg-gray-600 dark:text-gray-50"
                >
                  <td className="p-3">
                    <p>{index + 1}</p>
                  </td>
                  <td className="p-3">
                    <p>{mymarathon.title}</p>
                  </td>
                  <td className="p-3">
                    <p>{format(mymarathon.eventStartDate, "MMMM do, yyyy")}</p>
                  </td>
                  <td className="p-3 text-center">
                    <p>{mymarathon.TotalRegistrationCount}</p>
                  </td>
                  <td className="p-3 text-center">
                    <p>{mymarathon.location}</p>
                  </td>
                  <td className="p-3 text-center flex gap-2">
                    <span className="px-3 py-1 font-bold rounded-md text-purple-900 dark:bg-violet-600 dark:text-gray-50">
                      {/* radixUI modal */}
                      <Dialog.Root>
                        <Dialog.Trigger asChild>
                          <button>
                            <FaRegEdit />
                          </button>
                        </Dialog.Trigger>
                        <Dialog.Portal>
                          <Dialog.Overlay className="fixed  inset-0 bg-blackA6 data-[state=open]:animate-overlayShow" />
                          <Dialog.Content className="fixed left-1/2 top-1/2  w-[90vw] lg:max-w-[500px] h-4/5 -translate-x-1/2 -translate-y-1/2 rounded-md overflow-y-scroll bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
                            <Dialog.Title className="m-0 text-xl text-center text-cyan-700  font-bold text-mauve12">
                              Update Event Information
                            </Dialog.Title>

                            <form
                              onSubmit={(e) => {
                                handleUpdateMarathon(e, mymarathon._id);
                              }}
                              className="card-body p-0"
                            >
                              {/* user email  */}
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text font-semibold text-lg">
                                    {" "}
                                    Email
                                  </span>
                                </label>
                                <input
                                  type="email"
                                  name="email"
                                  defaultValue={user?.email}
                                  readOnly
                                  className="input input-bordered"
                                  required
                                />
                              </div>

                              {/* title  */}
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text font-semibold text-lg">
                                    Marathon Title
                                  </span>
                                </label>
                                <input
                                  type="text"
                                  name="title"
                                  defaultValue={mymarathon?.title}
                                  className="input input-bordered"
                                  required
                                />
                              </div>

                              {/* image url  */}
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text font-semibold text-lg">
                                    {" "}
                                    Marathon Image
                                  </span>
                                </label>
                                <input
                                  type="text"
                                  name="image"
                                  defaultValue={mymarathon?.image}
                                  className="input input-bordered"
                                  required
                                />
                              </div>

                              <div className=" lg:flex gap-5">
                                {/* start reg date  */}
                                {/* <div className="form-control lg:w-1/2">
                                    <label className="label">
                                        <span className="label-text font-semibold text-lg">Start Registration Date</span>
                                    </label>
                                    <DatePicker
                                        className='input input-bordered w-full'
                                        selected={regStartDate}
                                        onChange={(date) => setRegStartDate(date)}
                                        required
                                    />
                                </div> */}

                                {/* end reg date  */}
                                <div className="form-control lg:w-1/2">
                                  <label className="label">
                                    <span className="label-text font-semibold text-lg">
                                      End Registration Date
                                    </span>
                                  </label>
                                  <DatePicker
                                    className="input input-bordered w-full"
                                    defaultValue={mymarathon.regEndDate}
                                    onChange={(date) => setRegEndDate(date)}
                                    selected={regEndDate}
                                    required
                                  />
                                </div>
                              </div>

                              <div className=" lg:flex gap-5">
                                {/* marathon strat date  */}
                                {/* <div className="form-control lg:w-1/2">
                                    <label className="label">
                                        <span className="label-text font-semibold text-lg">Marathon Start Date</span>
                                    </label>
                                    <DatePicker
                                        className='input input-bordered w-full'
                                        selected={eventStartDate}
                                        onChange={(date) => setEventStartDate(date)}
                                        required
                                    />
                                </div>
                                */}
                                {/* running distance  */}
                                <div className="form-control lg:w-1/2">
                                  <label className="label">
                                    <span className="label-text font-semibold text-lg">
                                      Running distance
                                    </span>
                                  </label>
                                  <select
                                    name="distance"
                                    defaultValue={mymarathon?.distance}
                                    class="w-full input appearance-auto border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                  >
                                    <option value="25k">25k</option>
                                    <option value="10k">10k</option>
                                    <option value="3k">3k</option>
                                  </select>
                                </div>
                              </div>

                              {/* event location  */}
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text font-semibold text-lg">
                                    Location
                                  </span>
                                </label>
                                <input
                                  type="text"
                                  name="location"
                                  defaultValue={mymarathon?.location}
                                  className="input input-bordered"
                                  required
                                />
                              </div>

                              {/* event description  */}
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text font-semibold text-lg">
                                    Description
                                  </span>
                                </label>
                                <textarea
                                  name="description"
                                  className="textarea textarea-bordered"
                                  defaultValue={mymarathon?.description}
                                ></textarea>
                              </div>

                              {/* event full details  */}
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text font-semibold text-lg">
                                    Details
                                  </span>
                                </label>
                                <textarea
                                  name="details"
                                  className="textarea textarea-bordered"
                                  defaultValue={mymarathon?.details}
                                ></textarea>
                              </div>

                              {/* submit button  */}
                              <div className="form-control mt-6">
                                <button
                                  type="submit"
                                  className="btn bg-cyan-600 text-lg font-semibold text-white"
                                >
                                  Update
                                </button>
                              </div>
                            </form>

                            <div className="mt-[25px] flex justify-end">
                              <Dialog.Close asChild>
                                <button className="inline-flex h-[35px] items-center justify-center rounded bg-green4 px-[15px] font-medium leading-none text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 focus:outline-none">
                                  Close
                                </button>
                              </Dialog.Close>
                            </div>
                          </Dialog.Content>
                        </Dialog.Portal>
                      </Dialog.Root>
                    </span>

                    <span className="px-3 py-1 font-semibold rounded-md text-red-600 dark:bg-violet-600 dark:text-gray-50">
                      <button
                        onClick={() => {
                          handleDelete(mymarathon._id);
                        }}
                      >
                        <MdDelete />
                      </button>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyMarathon;
