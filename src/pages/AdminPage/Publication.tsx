import React, { useState, useEffect } from "react";
import {
  CreatePublicationApi,
  DeleteApi,
  GetPublicationApi,
  UpdatePublicationApi,
} from "../../Api/Admin/Publication";
import Swal from "sweetalert2";
import DashBoardNavBar from "../../components/layout/DashBoardNavBar";

const Publication: React.FC = () => {
  const [Publications, setPublications] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editPublication, setEditPublication] = useState<any>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);

  const fetchPublications = async () => {
    setLoading(true);
    try {
      const data = await GetPublicationApi();
      if (data.status) {
        setPublications(data.data);
      }
    } catch (error) {
      console.error("Error fetching Publications:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPublications();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("Title", event.currentTarget.Title.value);
    formData.append("Description", event.currentTarget.Description.value);
    formData.append("Date", event.currentTarget.Date.value);
    formData.append("Publisedby", event.currentTarget.Publisedby.value);

    if (selectedFile) {
      formData.append("file", selectedFile);
    }

    try {
      if (editPublication) {
        let res = await UpdatePublicationApi(formData, editPublication._id);
        if (res.status) {
          Swal.fire("SUCCESS!", "Updated Successfully", "success");
          fetchPublications();
          setShowModal(false);
          setEditPublication(null);
          setImagePreview(null);
          setSelectedFile(null);
        } else {
          Swal.fire("Error!", res.message, "error");
        }
      } else {
        let res = await CreatePublicationApi(formData);
        if (res.status) {
          Swal.fire("SUCCESS!", "Added Successfully", "success");
          fetchPublications();
          setShowModal(false);
          setEditPublication(null);
          setImagePreview(null);
          setSelectedFile(null);
        } else {
          Swal.fire("Error!", res.message, "error");
        }
      }
    } catch (error) {
      console.error("Error saving Publication:", error);
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this Publication?"))
      return;
    setDeleting(id);
    try {
      const res = await DeleteApi(id);
      if (res.status) {
        Swal.fire("SUCCESS!", "Deleted Successfully", "success");
        fetchPublications();
      } else {
        Swal.fire("Error!", res.message, "error");
      }
    } catch (error) {
      console.error("Error deleting Publication:", error);
    }
    setDeleting(null);
  };

  return (
    <>
      <DashBoardNavBar></DashBoardNavBar>
      <div className="p-4 mt-24">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Publications Dashboard</h2>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={() => {
              setEditPublication(null);
              setImagePreview(null);
              setSelectedFile(null);
              setShowModal(true);
            }}
          >
            + Add Publication
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
                  <th className="px-6 py-3">Publised by</th>
                  <th className="px-6 py-3">Image</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {Publications.map((Publication: any) => (
                  <tr key={Publication._id} className="border-b">
                    <td className="px-6 py-4">{Publication.Title}</td>
                    <td className="px-6 py-4">{Publication.Description}</td>
                    <td className="px-6 py-4">{Publication.Date}</td>
                    <td className="px-6 py-4">{Publication.Publisedby}</td>
                    <td className="px-6 py-4">
                      <img
                        src={Publication.Image}
                        alt={Publication.Title}
                        className="h-12 w-12 rounded"
                      />
                    </td>
                    <td className="px-6 py-4" style={{ display: "flex" }}>
                      <button
                        className="text-blue-600 hover:underline mr-3"
                        onClick={() => {
                          setEditPublication(Publication);
                          setImagePreview(Publication.Image);
                          setShowModal(true);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="text-red-600 hover:underline flex items-center"
                        onClick={() => handleDelete(Publication._id)}
                        disabled={deleting === Publication._id}
                      >
                        {deleting === Publication._id ? (
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
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg w-96">
              <h2 className="text-lg font-semibold mb-4">
                {editPublication ? "Edit Publication" : "Add New Publication"}
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="block">Title:</label>
                  <input
                    type="text"
                    name="Title"
                    defaultValue={editPublication?.Title || ""}
                    required
                    className="w-full border p-2 rounded"
                  />
                </div>
                <div className="mb-3">
                  <label className="block">Description:</label>
                  <textarea
                    name="Description"
                    defaultValue={editPublication?.Description || ""}
                    required
                    className="w-full border p-2 rounded"
                  />
                </div>
                <div className="mb-3">
                  <label className="block">Date:</label>
                  <input
                    type="date"
                    name="Date"
                    defaultValue={editPublication?.Date || ""}
                    required
                    className="w-full border p-2 rounded"
                  />
                </div>
                <div className="mb-3">
                  <label className="block">Publised by:</label>
                  <input
                    type="text"
                    name="Publisedby"
                    defaultValue={editPublication?.Publisedby || ""}
                    required
                    className="w-full border p-2 rounded"
                  />
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
                    {editPublication ? "Update" : "Create"}
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

export default Publication;
