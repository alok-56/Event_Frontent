import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import DashBoardNavBar from "../../components/layout/DashBoardNavBar";
import {
  CollabarationDeleteApi,
  CreateCollabarationApi,
  GetCollabarationApi,
  UpdateCollabarationApi,
} from "../../Api/Admin/Collabaration";

const Collaboration: React.FC = () => {
  const [collaborations, setCollaborations] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editCollaboration, setEditCollaboration] = useState<any>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);

  const fetchCollaborations = async () => {
    setLoading(true);
    try {
      const data = await GetCollabarationApi();
      if (data.status) {
        setCollaborations(data.data);
      }
    } catch (error) {
      console.error("Error fetching collaborations:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCollaborations();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("Name", event.currentTarget.Name.value);
    formData.append("Title", event.currentTarget.Title.value);
    formData.append("Expertise", event.currentTarget.Expertise.value);
    formData.append("Role", event.currentTarget.Role.value);

    if (selectedFile) {
      formData.append("file", selectedFile);
    }

    try {
      if (editCollaboration) {
        let res = await UpdateCollabarationApi(formData, editCollaboration._id);
        if (res.status) {
          Swal.fire("SUCCESS!", "Updated Successfully", "success");
          fetchCollaborations();
          setShowModal(false);
          setEditCollaboration(null);
          setImagePreview(null);
          setSelectedFile(null);
        } else {
          Swal.fire("Error!", res.message, "error");
        }
      } else {
        let res = await CreateCollabarationApi(formData);
        if (res.status) {
          Swal.fire("SUCCESS!", "Added Successfully", "success");
          fetchCollaborations();
          setShowModal(false);
          setEditCollaboration(null);
          setImagePreview(null);
          setSelectedFile(null);
        } else {
          Swal.fire("Error!", res.message, "error");
        }
      }
    } catch (error) {
      console.error("Error saving collaboration:", error);
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this collaboration?"))
      return;
    setDeleting(id);
    try {
      const res = await CollabarationDeleteApi(id);
      if (res.status) {
        Swal.fire("SUCCESS!", "Deleted Successfully", "success");
        fetchCollaborations();
      } else {
        Swal.fire("Error!", res.message, "error");
      }
    } catch (error) {
      console.error("Error deleting collaboration:", error);
    }
    setDeleting(null);
  };

  return (
    <>
      <DashBoardNavBar />
      <div className="p-4 mt-24">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Collaborations Dashboard</h2>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={() => {
              setEditCollaboration(null);
              setImagePreview(null);
              setSelectedFile(null);
              setShowModal(true);
            }}
          >
            + Add Collaboration
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
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Designation</th>
                  <th className="px-6 py-3">Expertise</th>
                  <th className="px-6 py-3">Role</th>
                  <th className="px-6 py-3">Image</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {collaborations.map((collab: any) => (
                  <tr key={collab._id} className="border-b">
                    <td className="px-6 py-4">{collab.Name}</td>
                    <td className="px-6 py-4">{collab.Title}</td>
                    <td className="px-6 py-4">{collab.Expertise}</td>
                    <td className="px-6 py-4">{collab.Role}</td>
                    <td className="px-6 py-4">
                      <img
                        src={collab.Image}
                        alt={collab.Title}
                        className="h-12 w-12 rounded"
                      />
                    </td>
                    <td className="px-6 py-4 flex">
                      <button
                        className="text-blue-600 hover:underline mr-3"
                        onClick={() => {
                          setEditCollaboration(collab);
                          setImagePreview(collab.Image);
                          setShowModal(true);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="text-red-600 hover:underline flex items-center"
                        onClick={() => handleDelete(collab._id)}
                        disabled={deleting === collab._id}
                      >
                        {deleting === collab._id ? (
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
            <div className="bg-white p-6 rounded shadow-lg w-[500px]">
              <h2 className="text-lg font-semibold mb-4">
                {editCollaboration
                  ? "Edit Collaboration"
                  : "Add New Collaboration"}
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="block">Name:</label>
                  <input
                    type="text"
                    name="Name"
                    defaultValue={editCollaboration?.Name || ""}
                    required
                    className="w-full border p-2 rounded"
                  />
                </div>
                <div className="mb-3">
                  <label className="block">Designation:</label>
                  <input
                    type="text"
                    name="Title"
                    defaultValue={editCollaboration?.Title || ""}
                    required
                    className="w-full border p-2 rounded"
                  />
                </div>
                <div className="mb-3">
                  <label className="block">Expertise:</label>
                  <textarea
                    name="Expertise"
                    defaultValue={editCollaboration?.Expertise || ""}
                    required
                    className="w-full border p-2 rounded"
                  />
                </div>
                <div className="mb-3">
                  <label className="block">Role:</label>
                  <textarea
                    name="Role"
                    defaultValue={editCollaboration?.Role || ""}
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
                      className="h-20 w-20 rounded border"
                    />
                  </div>
                )}

                <div className="flex justify-end gap-2">
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
                    {editCollaboration ? "Update" : "Create"}
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

export default Collaboration;
