import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import DashBoardNavBar from "../../components/layout/DashBoardNavBar";
import {
  CreatestudentsApi,
  DeleteStudentsApi,
  GetstudentsApi,
  UpdatestudentsApi,
} from "../../Api/Admin/Students";

interface Student {
  _id: string;
  Name: string;
  LastDate?: string;
  About?: string;
  Research?: string;
  Role?: string;
  Email: string;
  Education: string[];
  Experience: string[];
  Links: string[];
  Image: string;
}

const Students: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editStudent, setEditStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);

  // Multi-value fields
  const [education, setEducation] = useState<string[]>([]);
  const [experience, setExperience] = useState<string[]>([]);
  const [links, setLinks] = useState<string[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const data = await GetstudentsApi();
      if (data.status) {
        setStudents(data.data);
      }
    } catch (error) {
      console.error("Error fetching students:", error);
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
    console.log(JSON.stringify(education));

    formData.append("Name", form.Name.value);
    formData.append("LastDate", form.LastDate.value);
    formData.append("About", form.About.value);
    formData.append("Research", form.Research.value);
    formData.append("Role", form.Role.value);
    formData.append("Email", form.Email.value);

    // Append each item in the Education array
    education.forEach((edu, index) => {
      formData.append(`Education[${index}]`, edu);
    });

    // Append each item in the Experience array
    experience.forEach((exp, index) => {
      formData.append(`Experience[${index}]`, exp);
    });

    // Append each item in the Links array
    links.forEach((link, index) => {
      formData.append(`Links[${index}]`, link);
    });

    if (selectedFile) {
      formData.append("file", selectedFile);
    }

    try {
      let res;
      if (editStudent) {
        res = await UpdatestudentsApi(formData, editStudent._id);
      } else {
        res = await CreatestudentsApi(formData);
      }

      if (res.status) {
        Swal.fire(
          "SUCCESS!",
          editStudent ? "Updated Successfully" : "Added Successfully",
          "success"
        );
        fetchStudents();
        closeModal();
      } else {
        Swal.fire("Error!", res.message, "error");
      }
    } catch (error) {
      console.error("Error saving student:", error);
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this student?"))
      return;
    setDeleting(id);
    try {
      const res = await DeleteStudentsApi(id);
      if (res.status) {
        Swal.fire("SUCCESS!", "Deleted Successfully", "success");
        fetchStudents();
      } else {
        Swal.fire("Error!", res.message, "error");
      }
    } catch (error) {
      console.error("Error deleting student:", error);
    }
    setDeleting(null);
  };

  const handleEdit = (student: Student) => {
    setEditStudent(student);
    setEducation(student.Education);
    setExperience(student.Experience);
    setLinks(student.Links);
    setImagePreview(student.Image); // Set image preview
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditStudent(null);
    setEducation([]);
    setExperience([]);
    setLinks([]);
    setSelectedFile(null);
    setImagePreview(null);
  };

  return (
    <>
      <DashBoardNavBar />
      <div className="p-4 mt-24">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Students Dashboard</h2>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={() => setShowModal(true)}
          >
            + Add Student
          </button>
        </div>

        {/* Student Table */}
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
              {students.map((student) => (
                <tr key={student._id} className="border-b">
                  <td className="px-6 py-4">{student.Name}</td>
                  <td className="px-6 py-4">{student.Email}</td>
                  <td className="px-6 py-4">{student.Education.join(", ")}</td>
                  <td className="px-6 py-4">{student.Experience.join(", ")}</td>
                  <td className="px-6 py-4">{student.Links.join(", ")}</td>
                  <td className="px-6 py-4">
                    <img
                      src={student.Image}
                      alt={student.Name}
                      className="h-12 w-12 rounded"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleEdit(student)}
                      className="text-blue-600 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(student._id)}
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
              {/* Modal Header */}
              <h2 className="text-lg font-semibold mb-4 text-center">
                {editStudent ? "Edit Student" : "Add New Student"}
              </h2>

              {/* Modal Form */}
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
                      defaultValue={editStudent?.Name || ""}
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
                      defaultValue={editStudent?.Email || ""}
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
                      defaultValue={editStudent?.LastDate || ""}
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
                      defaultValue={editStudent?.Role || ""}
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
                    defaultValue={editStudent?.About || ""}
                    className="w-full border p-2 rounded"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Research
                  </label>
                  <textarea
                    name="Research"
                    defaultValue={editStudent?.Research || ""}
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

export default Students;
