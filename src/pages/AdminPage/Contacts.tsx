import React, { useState, useEffect } from "react";
import { GetContactsApi } from "../../Api/Admin/Contacts";
import DashBoardNavBar from "../../components/layout/DashBoardNavBar";

const Contacts: React.FC = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCollaborations = async () => {
    setLoading(true);
    try {
      const data = await GetContactsApi();
      if (data.status) {
        setContacts(data.data);
      }
    } catch (error) {
      console.error("Error fetching collaborations:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCollaborations();
  }, []);

  return (

    <>
    <DashBoardNavBar></DashBoardNavBar>
    <div className="p-4 mt-24">
      <h2 className="text-xl font-semibold mb-4">Contacts Dashboard</h2>
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
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Number</th>
                <th className="px-6 py-3">Subject</th>
                <th className="px-6 py-3">Message</th>
                <th className="px-6 py-3">Image</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((collab: any) => (
                <tr key={collab._id} className="border-b">
                  <td className="px-6 py-4">{collab.Name}</td>
                  <td className="px-6 py-4">{collab.Email}</td>
                  <td className="px-6 py-4">{collab.Number}</td>
                  <td className="px-6 py-4">{collab.Title}</td>
                  <td className="px-6 py-4">{collab.Description}</td>
                  <td className="px-6 py-4">
                    <img
                      src={collab.Image}
                      alt={collab.Title}
                      className="h-12 w-12 rounded"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    </>
    
  );
};

export default Contacts;
