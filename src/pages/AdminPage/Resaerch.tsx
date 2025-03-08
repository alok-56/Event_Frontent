import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import DashBoardNavBar from "../../components/layout/DashBoardNavBar";
import { CreateresearchApi, DeleteresearchApi, GetresearchApi, UpdateresearchApi } from "../../Api/Admin/ResearchAss";

interface Research {
  _id: string;
  Name: string;
  Title?: string;
  About?: string;
  Research?: string;
  Role?: string;
  Email: string;
  Education: string[];
  Experience: string[];
  Interest: string[];
  Awards: string[];
  Links: string[];
  Image: string;
}

const Resaerch: React.FC = () => {
  const [researches, setResearches] = useState<Research[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editResearch, setEditResearch] = useState<Research | null>(null);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);

  // Multi-value fields
  const [education, setEducation] = useState<string[]>([]);
  const [experience, setExperience] = useState<string[]>([]);
  const [interest, setInterest] = useState<string[]>([]);
  const [awards, setAwards] = useState<string[]>([]);
  const [links, setLinks] = useState<string[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    fetchResearches();
  }, []);

  const fetchResearches = async () => {
    setLoading(true);
    try {
      const data = await GetresearchApi();
      if (data.status) {
        setResearches(data.data);
      }
    } catch (error) {
      console.error("Error fetching researches:", error);
    }
    setLoading(false);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file)); // Preview image
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData();
    const form = event.currentTarget;

    formData.append("Name", form.Name.value);
    formData.append("Title", form.Title.value);
    formData.append("About", form.About.value);
    formData.append("Research", form.Research.value);
    formData.append("Role", form.Role.value);
    formData.append("Email", form.Email.value);

    // Append each item in the arrays
    education.forEach((edu, index) => {
      formData.append(`Education[${index}]`, edu);
    });
    experience.forEach((exp, index) => {
      formData.append(`Experience[${index}]`, exp);
    });
    interest.forEach((int, index) => {
      formData.append(`Interest[${index}]`, int);
    });
    awards.forEach((award, index) => {
      formData.append(`Awards[${index}]`, award);
    });
    links.forEach((link, index) => {
      formData.append(`Links[${index}]`, link);
    });

    if (selectedFile) {
      formData.append("file", selectedFile);
    }

    try {
      let res;
      if (editResearch) {
        res = await UpdateresearchApi(formData, editResearch._id);
      } else {
        res = await CreateresearchApi(formData);
      }

      if (res.status) {
        Swal.fire(
          "SUCCESS!",
          editResearch ? "Updated Successfully" : "Added Successfully",
          "success"
        );
        fetchResearches();
        closeModal();
      } else {
        Swal.fire("Error!", res.message, "error");
      }
    } catch (error) {
      console.error("Error saving research:", error);
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this research?"))
      return;
    setDeleting(id);
    try {
      const res = await DeleteresearchApi(id);
      if (res.status) {
        Swal.fire("SUCCESS!", "Deleted Successfully", "success");
        fetchResearches();
      } else {
        Swal.fire("Error!", res.message, "error");
      }
    } catch (error) {
      console.error("Error deleting research:", error);
    }
    setDeleting(null);
  };

  const handleEdit = (research: Research) => {
    setEditResearch(research);
    setEducation(research.Education);
    setExperience(research.Experience);
    setInterest(research.Interest);
    setAwards(research.Awards);
    setLinks(research.Links);
    setImagePreview(research.Image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditResearch(null);
    setEducation([]);
    setExperience([]);
    setInterest([]);
    setAwards([]);
    setLinks([]);
    setSelectedFile(null);
    setImagePreview(null);
  };

  return (
    <>
      <DashBoardNavBar />
      <div className="p-4 mt-24">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Research Dashboard</h2>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={() => setShowModal(true)}
          >
            + Add Research
          </button>
        </div>

        {/* Research Table */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Education</th>
                <th className="px-6 py-3">Experience</th>
                <th className="px-6 py-3">Links</th>
                <th className="px-6 py-3">Image</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {researches.map((research) => (
                <tr key={research._id} className="border-b">
                  <td className="px-6 py-4">{research.Name}</td>
                  <td className="px-6 py-4">{research.Email}</td>
                  <td className="px-6 py-4">{research.Education.join(", ")}</td>
                  <td className="px-6 py-4">{research.Experience.join(", ")}</td>
                  <td className="px-6 py-4">{research.Links.join(", ")}</td>
                  <td className="px-6 py-4">
                    <img
                      src={research.Image}
                      alt={research.Name}
                      className="h-12 w-12 rounded"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleEdit(research)}
                      className="text-blue-600 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(research._id)}
                      className="text-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add/Edit Modal */}
        {showModal && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 p-4 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full mx-4 my-8 max-h-[90vh] overflow-y-auto">
              <h2 className="text-lg font-semibold mb-4 text-center">
                {editResearch ? "Edit Research" : "Add New Research"}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Grid Layout: Two Inputs Per Row */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="Name"
                      defaultValue={editResearch?.Name || ""}
                      required
                      className="w-full border p-2 rounded"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="Email"
                      defaultValue={editResearch?.Email || ""}
                      required
                      className="w-full border p-2 rounded"
                    />
                  </div>

                  {/* Title */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Title
                    </label>
                    <input
                      type="text"
                      name="Title"
                      defaultValue={editResearch?.Title || ""}
                      className="w-full border p-2 rounded"
                    />
                  </div>

                  {/* Role */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Role
                    </label>
                    <input
                      type="text"
                      name="Role"
                      defaultValue={editResearch?.Role || ""}
                      className="w-full border p-2 rounded"
                    />
                  </div>
                </div>

                {/* Single Row Inputs */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    About
                  </label>
                  <textarea
                    name="About"
                    defaultValue={editResearch?.About || ""}
                    className="w-full border p-2 rounded"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Research
                  </label>
                  <textarea
                    name="Research"
                    defaultValue={editResearch?.Research || ""}
                    className="w-full border p-2 rounded"
                  ></textarea>
                </div>

                {/* Multi-Value Fields in Two Columns */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Education */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Education
                    </label>
                    {education.map((edu, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 mb-2"
                      >
                        <input
                          type="text"
                          value={edu}
                          onChange={(e) => {
                            const newEducation = [...education];
                            newEducation[index] = e.target.value;
                            setEducation(newEducation);
                          }}
                          className="w-full border p-2 rounded"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setEducation(
                              education.filter((_, i) => i !== index)
                            )
                          }
                          className="text-red-600"
                        >
                          X
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => setEducation([...education, ""])}
                      className="bg-gray-200 px-2 py-1 rounded mb-2"
                    >
                      + Add
                    </button>
                  </div>

                  {/* Experience */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Experience
                    </label>
                    {experience.map((exp, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 mb-2"
                      >
                        <input
                          type="text"
                          value={exp}
                          onChange={(e) => {
                            const newExperience = [...experience];
                            newExperience[index] = e.target.value;
                            setExperience(newExperience);
                          }}
                          className="w-full border p-2 rounded"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setExperience(
                              experience.filter((_, i) => i !== index)
                            )
                          }
                          className="text-red-600"
                        >
                          X
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => setExperience([...experience, ""])}
                      className="bg-gray-200 px-2 py-1 rounded mb-2"
                    >
                      + Add
                    </button>
                  </div>

                  {/* Interest */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Interest
                    </label>
                    {interest.map((int, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 mb-2"
                      >
                        <input
                          type="text"
                          value={int}
                          onChange={(e) => {
                            const newInterest = [...interest];
                            newInterest[index] = e.target.value;
                            setInterest(newInterest);
                          }}
                          className="w-full border p-2 rounded"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setInterest(interest.filter((_, i) => i !== index))
                          }
                          className="text-red-600"
                        >
                          X
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => setInterest([...interest, ""])}
                      className="bg-gray-200 px-2 py-1 rounded mb-2"
                    >
                      + Add
                    </button>
                  </div>

                  {/* Awards */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Awards
                    </label>
                    {awards.map((award, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 mb-2"
                      >
                        <input
                          type="text"
                          value={award}
                          onChange={(e) => {
                            const newAwards = [...awards];
                            newAwards[index] = e.target.value;
                            setAwards(newAwards);
                          }}
                          className="w-full border p-2 rounded"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setAwards(awards.filter((_, i) => i !== index))
                          }
                          className="text-red-600"
                        >
                          X
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => setAwards([...awards, ""])}
                      className="bg-gray-200 px-2 py-1 rounded mb-2"
                    >
                      + Add
                    </button>
                  </div>

                  {/* Links */}
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Links
                    </label>
                    {links.map((link, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 mb-2"
                      >
                        <input
                          type="text"
                          value={link}
                          onChange={(e) => {
                            const newLinks = [...links];
                            newLinks[index] = e.target.value;
                            setLinks(newLinks);
                          }}
                          className="w-full border p-2 rounded"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setLinks(links.filter((_, i) => i !== index))
                          }
                          className="text-red-600"
                        >
                          X
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => setLinks([...links, ""])}
                      className="bg-gray-200 px-2 py-1 rounded mb-2"
                    >
                      + Add
                    </button>
                  </div>
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="mb-2"
                  />
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-32 h-32 rounded mb-2"
                    />
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white p-2 mt-4 rounded"
                >
                  {loading ? "Saving..." : "Save"}
                </button>
              </form>

              {/* Close Modal */}
              <button
                onClick={closeModal}
                className="mt-4 w-full bg-gray-400 text-white p-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resaerch;