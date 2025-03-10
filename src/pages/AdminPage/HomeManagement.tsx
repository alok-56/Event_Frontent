import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import DashBoardNavBar from "../../components/layout/DashBoardNavBar";
import {
  CreateHomeApi,
  GetHomeApi,
  UpdateHomeApi,
} from "../../Api/Admin/HomeApi";

interface Home {
  _id: string;
  SliderImage: string[];
  Mission: string[];
  Vission: string[];
  Objective: string[];
  Outcomes: string[];
  scopeImage: string;
  applicationImage: string;
  modalImage: string;
}

const HomeManagement: React.FC = () => {
  const [homeData, setHomeData] = useState<Home[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editHome, setEditHome] = useState<Home | null>(null);
  const [loading, setLoading] = useState(false);

  // Multi-value fields
  const [sliderImages, setSliderImages] = useState<File[]>([]);
  const [sliderImagePreviews, setSliderImagePreviews] = useState<string[]>([]); // For previews
  const [mission, setMission] = useState<string[]>([]);
  const [vission, setVission] = useState<string[]>([]);
  const [objective, setObjective] = useState<string[]>([]);
  const [outcomes, setOutcomes] = useState<string[]>([]);
  const [scopeImage, setScopeImage] = useState<File | null>(null);
  const [applicationImage, setApplicationImage] = useState<File | null>(null);
  const [modalImage, setModalImage] = useState<File | null>(null);

  useEffect(() => {
    fetchHomeData();
  }, []);

  const fetchHomeData = async () => {
    setLoading(true);
    try {
      const data = await GetHomeApi();
      if (data.status) {
        setHomeData(data.data);
      }
    } catch (error) {
      console.error("Error fetching home data:", error);
    }
    setLoading(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData();

    // Append slider images
    sliderImages.forEach((file) => {
      formData.append(`sliderImages`, file);
    });

    // Append other fields
    formData.append("Mission", event.currentTarget.mission.value);
    formData.append("Vission", event.currentTarget.vission.value);
    formData.append("Objective", event.currentTarget.objective.value);
    formData.append("Outcomes", event.currentTarget.outcome.value);

    if (scopeImage) formData.append("scopeImage", scopeImage);
    if (applicationImage) formData.append("applicationImage", applicationImage);
    if (modalImage) formData.append("modalImage", modalImage);

    try {
      let res;
      if (editHome) {
        res = await UpdateHomeApi(formData, editHome._id);
      } else {
        res = await CreateHomeApi(formData);
      }

      if (res.status) {
        Swal.fire(
          "SUCCESS!",
          editHome ? "Updated Successfully" : "Added Successfully",
          "success"
        );
        fetchHomeData();
        closeModal();
      } else {
        Swal.fire("Error!", res.message, "error");
      }
    } catch (error) {
      console.error("Error saving home data:", error);
    }
    setLoading(false);
  };

  const handleEdit = (home: Home) => {
    setEditHome(home);
    setMission(home.Mission);
    setVission(home.Vission);
    setObjective(home.Objective);
    setOutcomes(home.Outcomes);
    setScopeImage(null);
    setApplicationImage(null);
    setModalImage(null);
    setSliderImagePreviews(home.SliderImage); // Set previews for existing slider images
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditHome(null);
    setSliderImages([]);
    setSliderImagePreviews([]); // Clear slider image previews
    setMission([]);
    setVission([]);
    setObjective([]);
    setOutcomes([]);
    setScopeImage(null);
    setApplicationImage(null);
    setModalImage(null);
  };

  const handleSliderImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.target.files && e.target.files[0]) {
      const newSliderImages = [...sliderImages];
      const newSliderImagePreviews = [...sliderImagePreviews];

      const file = e.target.files[0];
      newSliderImages[index] = file;
      newSliderImagePreviews[index] = URL.createObjectURL(file); // Generate preview URL

      setSliderImages(newSliderImages);
      setSliderImagePreviews(newSliderImagePreviews);
    }
  };

  return (
    <>
      <DashBoardNavBar />
      <div className="p-4 mt-24">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Home Management</h2>
          {/* <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={() => setShowModal(true)}
          >
            + Add Entry
          </button> */}
        </div>

        {/* Home Data Table */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">Slider Images</th>
                <th className="px-6 py-3">Mission</th>
                <th className="px-6 py-3">Vission</th>
                <th className="px-6 py-3">Objective</th>
                <th className="px-6 py-3">Outcomes</th>
                <th className="px-6 py-3">Scope Image</th>
                <th className="px-6 py-3">Application Image</th>
                <th className="px-6 py-3">Modal Image</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {homeData.map((home) => (
                <tr key={home._id} className="border-b">
                  <td className="px-6 py-4">
                    {home.SliderImage.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Slider ${index + 1}`}
                        className="h-12 w-12 rounded inline-block mr-2"
                      />
                    ))}
                  </td>
                  <td className="px-6 py-4">{home.Mission.join(", ")}</td>
                  <td className="px-6 py-4">{home.Vission.join(", ")}</td>
                  <td className="px-6 py-4">{home.Objective.join(", ")}</td>
                  <td className="px-6 py-4">{home.Outcomes.join(", ")}</td>
                  <td className="px-6 py-4">
                    <img
                      src={home.scopeImage}
                      alt="Scope"
                      className="h-12 w-12 rounded"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <img
                      src={home.applicationImage}
                      alt="Application"
                      className="h-12 w-12 rounded"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <img
                      src={home.modalImage}
                      alt="Modal"
                      className="h-12 w-12 rounded"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleEdit(home)}
                      className="text-blue-600 mr-2"
                    >
                      Edit
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
                {editHome ? "Edit Home Entry" : "Add New Home Entry"}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Slider Images */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Slider Images
                  </label>
                  {sliderImagePreviews.map((preview, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 mb-2"
                    >
                      <img
                        src={preview}
                        alt={`Slider Preview ${index + 1}`}
                        className="h-12 w-12 rounded"
                      />
                      <input
                        type="file"
                        onChange={(e) => handleSliderImageChange(e, index)}
                        className="w-full border p-2 rounded"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const newSliderImages = sliderImages.filter(
                            (_, i) => i !== index
                          );
                          const newSliderImagePreviews =
                            sliderImagePreviews.filter((_, i) => i !== index);
                          setSliderImages(newSliderImages);
                          setSliderImagePreviews(newSliderImagePreviews);
                        }}
                        className="text-red-600"
                      >
                        X
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      setSliderImages([...sliderImages, new File([], "")]);
                      setSliderImagePreviews([...sliderImagePreviews, ""]);
                    }}
                    className="bg-gray-200 px-2 py-1 rounded mb-2"
                  >
                    + Add Slider Image
                  </button>
                </div>

                {/* Mission, Vission, Objective, Outcomes (unchanged) */}
                {/* ... */}

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Mission
                  </label>

                  <textarea
                    name="mission"
                    defaultValue={mission || ""}
                    className="w-full border p-2 rounded"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Vission
                  </label>

                  <textarea
                    name="vission"
                    defaultValue={vission || ""}
                    className="w-full border p-2 rounded"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Objective
                  </label>

                  <textarea
                    name="objective"
                    defaultValue={objective || ""}
                    className="w-full border p-2 rounded"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Outcomes
                  </label>

                  <textarea
                    name="outcome"
                    defaultValue={outcomes || ""}
                    className="w-full border p-2 rounded"
                  />
                </div>

                {/* Scope Image */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Scope Image
                  </label>
                  <input
                    type="file"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setScopeImage(e.target.files[0]);
                      }
                    }}
                    className="w-full border p-2 rounded"
                  />
                  {editHome?.scopeImage && !scopeImage && (
                    <img
                      src={editHome.scopeImage}
                      alt="Scope Preview"
                      className="h-12 w-12 rounded mt-2"
                    />
                  )}
                </div>

                {/* Application Image */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Application Image
                  </label>
                  <input
                    type="file"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setApplicationImage(e.target.files[0]);
                      }
                    }}
                    className="w-full border p-2 rounded"
                  />
                  {editHome?.applicationImage && !applicationImage && (
                    <img
                      src={editHome.applicationImage}
                      alt="Application Preview"
                      className="h-12 w-12 rounded mt-2"
                    />
                  )}
                </div>

                {/* Modal Image */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Modal Image
                  </label>
                  <input
                    type="file"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setModalImage(e.target.files[0]);
                      }
                    }}
                    className="w-full border p-2 rounded"
                  />
                  {editHome?.modalImage && !modalImage && (
                    <img
                      src={editHome.modalImage}
                      alt="Modal Preview"
                      className="h-12 w-12 rounded mt-2"
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

export default HomeManagement;
