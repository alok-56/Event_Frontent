import React, { useState, useEffect } from "react";
import {
  CreateEventApi,
  DeleteApi,
  GetEventApi,
  UpdateEventApi,
} from "../../Api/Admin/Event";
import Swal from "sweetalert2";
import DashBoardNavBar from "../../components/layout/DashBoardNavBar";

const Event: React.FC = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editEvent, setEditEvent] = useState<any>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const data = await GetEventApi();
      if (data.status) {
        setEvents(data.data);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("Title", event.currentTarget.Title.value);
    formData.append("Description", event.currentTarget.Description.value);
    formData.append("type", event.currentTarget.type.value);
    formData.append("eventlocation", event.currentTarget.eventlocation.value);
    formData.append("eventdate", event.currentTarget.eventdate.value);
    formData.append("link", event.currentTarget.link.value);


    if (selectedFile) {
      formData.append("file", selectedFile);
    }

    try {
      if (editEvent) {
        let res = await UpdateEventApi(formData, editEvent._id);
        if (res.status) {
          Swal.fire("SUCCESS!", "Updated Successfully", "success");
          fetchEvents();
          setShowModal(false);
          setEditEvent(null);
          setImagePreview(null);
          setSelectedFile(null);
        } else {
          Swal.fire("Error!", res.message, "error");
        }
      } else {
        let res = await CreateEventApi(formData);
        if (res.status) {
          Swal.fire("SUCCESS!", "Added Successfully", "success");
          fetchEvents();
          setShowModal(false);
          setEditEvent(null);
          setImagePreview(null);
          setSelectedFile(null);
        } else {
          Swal.fire("Error!", res.message, "error");
        }
      }
    } catch (error) {
      console.error("Error saving event:", error);
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;
    setDeleting(id);
    try {
      const res = await DeleteApi(id);
      if (res.status) {
        Swal.fire("SUCCESS!", "Deleted Successfully", "success");
        fetchEvents();
      } else {
        Swal.fire("Error!", res.message, "error");
      }
    } catch (error) {
      console.error("Error deleting event:", error);
    }
    setDeleting(null);
  };

  return (
    <>
      <DashBoardNavBar></DashBoardNavBar>
      <div className="p-4 mt-24">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Events Dashboard</h2>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={() => {
              setEditEvent(null);
              setImagePreview(null);
              setSelectedFile(null);
              setShowModal(true);
            }}
          >
            + Add Event
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-6">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-6 py-3">Title</th>
                  <th className="px-6 py-3">Description</th>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">Type</th>
                  <th className="px-6 py-3">Image</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event: any) => (
                  <tr key={event._id} className="border-b">
                    <td className="px-6 py-4">{event.Title}</td>
                    <td className="px-6 py-4">{event.Description}</td>
                    <td className="px-6 py-4">{event.eventdate}</td>
                    <td className="px-6 py-4">{event.type}</td>
                    <td className="px-6 py-4">
                      <img
                        src={event.Image}
                        alt={event.Title}
                        className="h-12 w-12 rounded"
                      />
                    </td>
                    <td className="px-6 py-4" style={{ display: "flex" }}>
                      <button
                        className="text-blue-600 hover:underline mr-3"
                        onClick={() => {
                          setEditEvent(event);
                          setImagePreview(event.Image);
                          setShowModal(true);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="text-red-600 hover:underline flex items-center"
                        onClick={() => handleDelete(event._id)}
                        disabled={deleting === event._id}
                      >
                        {deleting === event._id ? (
                          <div className="w-4 h-4 border-2 border-red-500 border-t-transparent rounded-full animate-spin mr-2"></div>
                        ) : (
                          "Delete"
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {showModal && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center mt-20">
            <div className="bg-white p-6 rounded shadow-lg w-96">
              <h2 className="text-lg font-semibold mb-4">
                {editEvent ? "Edit Event" : "Add New Event"}
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="block">Title:</label>
                  <input
                    type="text"
                    name="Title"
                    defaultValue={editEvent?.Title || ""}
                    required
                    className="w-full border p-2 rounded"
                  />
                </div>
                <div className="mb-3">
                  <label className="block">Description:</label>
                  <textarea
                    name="Description"
                    defaultValue={editEvent?.Description || ""}
                    required
                    className="w-full border p-2 rounded"
                  />
                </div>
                <div className="mb-3">
                  <label className="block">Location:</label>
                  <input
                    type="text"
                    name="eventlocation"
                    defaultValue={editEvent?.eventlocation || ""}
                    required
                    className="w-full border p-2 rounded"
                  />
                </div>
                <div className="mb-3">
                  <label className="block">Event Date:</label>
                  <input
                    type="date"
                    name="eventdate"
                    defaultValue={editEvent?.eventdate || ""}
                    required
                    className="w-full border p-2 rounded"
                  />
                </div>
                <div className="mb-3">
                  <label className="block">Event Link :</label>
                  <input
                    type="text"
                    name="link"
                    defaultValue={editEvent?.link || ""}
                    required
                    className="w-full border p-2 rounded"
                  />
                </div>
                <div className="mb-3">
                  <label className="block">Type:</label>
                  <select
                    name="type"
                    defaultValue={editEvent?.type || "Upcoming"}
                    required
                    className="w-full border p-2 rounded"
                  >
                    <option value="Upcoming">Upcoming</option>
                    <option value="Past">Past</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="block">Upload Image:</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(event) => {
                      const file = event.target.files?.[0];
                      if (file) {
                        setSelectedFile(file);
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setImagePreview(reader.result as string);
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                    className="w-full border p-2 rounded"
                  />
                </div>

                {imagePreview && (
                  <div className="mb-3">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="h-16 w-16 rounded"
                    />
                  </div>
                )}

                <div className="flex justify-between">
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-500 text-white rounded"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded flex items-center"
                    disabled={loading}
                  >
                    {loading && (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    )}
                    {editEvent ? "Update" : "Create"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Event;
