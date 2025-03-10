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
  const [sliderImages, setSliderImages] = useState<string[]>([]);
  const [mission, setMission] = useState<string[]>([]);
  const [vission, setVission] = useState<string[]>([]);
  const [objective, setObjective] = useState<string[]>([]);
  const [outcomes, setOutcomes] = useState<string[]>([]);
  const [scopeImage, setScopeImage] = useState<string>("");
  const [applicationImage, setApplicationImage] = useState<string>("");
  const [modalImage, setModalImage] = useState<string>("");

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
    formData.append("SliderImage", JSON.stringify(sliderImages));
    formData.append("Mission", JSON.stringify(mission));
    formData.append("Vission", JSON.stringify(vission));
    formData.append("Objective", JSON.stringify(objective));
    formData.append("Outcomes", JSON.stringify(outcomes));
    formData.append("scopeImage", scopeImage);
    formData.append("applicationImage", applicationImage);
    formData.append("modalImage", modalImage);

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
    setSliderImages(home.SliderImage);
    setMission(home.Mission);
    setVission(home.Vission);
    setObjective(home.Objective);
    setOutcomes(home.Outcomes);
    setScopeImage(home.scopeImage);
    setApplicationImage(home.applicationImage);
    setModalImage(home.modalImage);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditHome(null);
    setSliderImages([]);
    setMission([]);
    setVission([]);
    setObjective([]);
    setOutcomes([]);
    setScopeImage("");
    setApplicationImage("");
    setModalImage("");
  };

  return (
    <>
      <DashBoardNavBar />
      <div className="p-4 mt-24">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Home Management</h2>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={() => setShowModal(true)}
          >
            + Add Entry
          </button>
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
                  {sliderImages.map((img, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 mb-2"
                    >
                      <input
                        type="text"
                        value={img}
                        onChange={(e) => {
                          const newSliderImages = [...sliderImages];
                          newSliderImages[index] = e.target.value;
                          setSliderImages(newSliderImages);
                        }}
                        className="w-full border p-2 rounded"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setSliderImages(
                            sliderImages.filter((_, i) => i !== index)
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
                    onClick={() => setSliderImages([...sliderImages, ""])}
                    className="bg-gray-200 px-2 py-1 rounded mb-2"
                  >
                    + Add Slider Image
                  </button>
                </div>

                {/* Mission */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Mission
                  </label>
                  {mission.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 mb-2"
                    >
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => {
                          const newMission = [...mission];
                          newMission[index] = e.target.value;
                          setMission(newMission);
                        }}
                        className="w-full border p-2 rounded"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setMission(mission.filter((_, i) => i !== index))
                        }
                        className="text-red-600"
                      >
                        X
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => setMission([...mission, ""])}
                    className="bg-gray-200 px-2 py-1 rounded mb-2"
                  >
                    + Add Mission
                  </button>
                </div>

                {/* Vission */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Vission
                  </label>
                  {vission.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 mb-2"
                    >
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => {
                          const newVission = [...vission];
                          newVission[index] = e.target.value;
                          setVission(newVission);
                        }}
                        className="w-full border p-2 rounded"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setVission(vission.filter((_, i) => i !== index))
                        }
                        className="text-red-600"
                      >
                        X
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => setVission([...vission, ""])}
                    className="bg-gray-200 px-2 py-1 rounded mb-2"
                  >
                    + Add Vission
                  </button>
                </div>

                {/* Objective */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Objective
                  </label>
                  {objective.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 mb-2"
                    >
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => {
                          const newObjective = [...objective];
                          newObjective[index] = e.target.value;
                          setObjective(newObjective);
                        }}
                        className="w-full border p-2 rounded"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setObjective(objective.filter((_, i) => i !== index))
                        }
                        className="text-red-600"
                      >
                        X
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => setObjective([...objective, ""])}
                    className="bg-gray-200 px-2 py-1 rounded mb-2"
                  >
                    + Add Objective
                  </button>
                </div>

                {/* Outcomes */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Outcomes
                  </label>
                  {outcomes.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 mb-2"
                    >
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => {
                          const newOutcomes = [...outcomes];
                          newOutcomes[index] = e.target.value;
                          setOutcomes(newOutcomes);
                        }}
                        className="w-full border p-2 rounded"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setOutcomes(outcomes.filter((_, i) => i !== index))
                        }
                        className="text-red-600"
                      >
                        X
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => setOutcomes([...outcomes, ""])}
                    className="bg-gray-200 px-2 py-1 rounded mb-2"
                  >
                    + Add Outcome
                  </button>
                </div>

                {/* Scope Image */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Scope Image URL
                  </label>
                  <input
                    type="text"
                    value={scopeImage}
                    onChange={(e) => setScopeImage(e.target.value)}
                    className="w-full border p-2 rounded"
                  />
                </div>

                {/* Application Image */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Application Image URL
                  </label>
                  <input
                    type="text"
                    value={applicationImage}
                    onChange={(e) => setApplicationImage(e.target.value)}
                    className="w-full border p-2 rounded"
                  />
                </div>

                {/* Modal Image */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Modal Image URL
                  </label>
                  <input
                    type="text"
                    value={modalImage}
                    onChange={(e) => setModalImage(e.target.value)}
                    className="w-full border p-2 rounded"
                  />
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
