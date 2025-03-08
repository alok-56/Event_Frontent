import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import DashBoardNavBar from "../../components/layout/DashBoardNavBar";
import { CreatestaffApi, DeletestaffApi, GetstaffApi, UpdatestaffApi } from "../../Api/Admin/Staff";

interface Staff {
  _id: string;
  Name: string;
  LastDate?: string;
  Title?: string;
  About?: string;
  Research?: string;
  Role?: string;
  Email: string;
  Education: string[];
  Experience: string[];
  Skills: string[];
  Interest: string[];
  Awards: string[];
  Links: string[];
  Patents: string[];
  Image: string;
}

const Staff: React.FC = () => {
  const [staff, setStaff] = useState<Staff[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editStaff, setEditStaff] = useState<Staff | null>(null);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);
  console.log(deleting)

  // Multi-value fields
  const [education, setEducation] = useState<string[]>([]);
  const [experience, setExperience] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [interest, setInterest] = useState<string[]>([]);
  const [awards, setAwards] = useState<string[]>([]);
  const [links, setLinks] = useState<string[]>([]);
  const [patents, setPatents] = useState<string[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    fetchStaff();
  }, []);

  const fetchStaff = async () => {
    setLoading(true);
    try {
      const data = await GetstaffApi();
      if (data.status) {
        setStaff(data.data);
      }
    } catch (error) {
      console.error("Error fetching staff:", error);
    }
    setLoading(false);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData();
    const form = event.currentTarget;

    formData.append("Name", form.Name.value);
    formData.append("LastDate", form.LastDate.value);
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
    skills.forEach((skill, index) => {
      formData.append(`Skills[${index}]`, skill);
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
    patents.forEach((patent, index) => {
      formData.append(`Patents[${index}]`, patent);
    });

    if (selectedFile) {
      formData.append("file", selectedFile);
    }

    try {
      let res;
      if (editStaff) {
        res = await UpdatestaffApi(formData, editStaff._id);
      } else {
        res = await CreatestaffApi(formData);
      }

      if (res.status) {
        Swal.fire(
          "SUCCESS!",
          editStaff ? "Updated Successfully" : "Added Successfully",
          "success"
        );
        fetchStaff();
        closeModal();
      } else {
        Swal.fire("Error!", res.message, "error");
      }
    } catch (error) {
      console.error("Error saving staff:", error);
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this staff member?"))
      return;
    setDeleting(id);
    try {
      const res = await DeletestaffApi(id);
      if (res.status) {
        Swal.fire("SUCCESS!", "Deleted Successfully", "success");
        fetchStaff();
      } else {
        Swal.fire("Error!", res.message, "error");
      }
    } catch (error) {
      console.error("Error deleting staff:", error);
    }
    setDeleting(null);
  };

  const handleEdit = (staff: Staff) => {
    setEditStaff(staff);
    setEducation(staff.Education);
    setExperience(staff.Experience);
    setSkills(staff.Skills);
    setInterest(staff.Interest);
    setAwards(staff.Awards);
    setLinks(staff.Links);
    setPatents(staff.Patents);
    setImagePreview(staff.Image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditStaff(null);
    setEducation([]);
    setExperience([]);
    setSkills([]);
    setInterest([]);
    setAwards([]);
    setLinks([]);
    setPatents([]);
    setSelectedFile(null);
    setImagePreview(null);
  };

  return (
    <>
      <DashBoardNavBar />
      <div className="p-4 mt-24">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Staff Dashboard</h2>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={() => setShowModal(true)}
          >
            + Add Staff
          </button>
        </div>

        {/* Staff Table */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Education</th>
                <th className="px-6 py-3">Experience</th>
                <th className="px-6 py-3">Skills</th>
                <th className="px-6 py-3">Links</th>
                <th className="px-6 py-3">Image</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {staff.map((staff) => (
                <tr key={staff._id} className="border-b">
                  <td className="px-6 py-4">{staff.Name}</td>
                  <td className="px-6 py-4">{staff.Email}</td>
                  <td className="px-6 py-4">{staff?.Education?.join(", ")}</td>
                  <td className="px-6 py-4">{staff?.Experience?.join(", ")}</td>
                  <td className="px-6 py-4">{staff?.Skills?.join(", ")}</td>
                  <td className="px-6 py-4">{staff?.Links?.join(", ")}</td>
                  <td className="px-6 py-4">
                    <img
                      src={staff.Image}
                      alt={staff.Name}
                      className="h-12 w-12 rounded"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleEdit(staff)}
                      className="text-blue-600 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(staff._id)}
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
                {editStaff ? "Edit Staff" : "Add New Staff"}
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
                      defaultValue={editStaff?.Name || ""}
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
                      defaultValue={editStaff?.Email || ""}
                      required
                      className="w-full border p-2 rounded"
                    />
                  </div>

                  {/* Last Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Last Date
                    </label>
                    <input
                      type="date"
                      name="LastDate"
                      defaultValue={editStaff?.LastDate || ""}
                      className="w-full border p-2 rounded"
                    />
                  </div>

                  {/* Title */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Designation
                    </label>
                    <input
                      type="text"
                      name="Title"
                      defaultValue={editStaff?.Title || ""}
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
                      defaultValue={editStaff?.Role || ""}
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
                    defaultValue={editStaff?.About || ""}
                    className="w-full border p-2 rounded"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Research
                  </label>
                  <textarea
                    name="Research"
                    defaultValue={editStaff?.Research || ""}
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

                  {/* Skills */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Skills
                    </label>
                    {skills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 mb-2"
                      >
                        <input
                          type="text"
                          value={skill}
                          onChange={(e) => {
                            const newSkills = [...skills];
                            newSkills[index] = e.target.value;
                            setSkills(newSkills);
                          }}
                          className="w-full border p-2 rounded"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setSkills(skills.filter((_, i) => i !== index))
                          }
                          className="text-red-600"
                        >
                          X
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => setSkills([...skills, ""])}
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
                  <div>
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

                  {/* Patents */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Patents
                    </label>
                    {patents.map((patent, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 mb-2"
                      >
                        <input
                          type="text"
                          value={patent}
                          onChange={(e) => {
                            const newPatents = [...patents];
                            newPatents[index] = e.target.value;
                            setPatents(newPatents);
                          }}
                          className="w-full border p-2 rounded"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setPatents(patents.filter((_, i) => i !== index))
                          }
                          className="text-red-600"
                        >
                          X
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => setPatents([...patents, ""])}
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

export default Staff;