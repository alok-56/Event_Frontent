import { ChangeEvent, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { CreateContactsApi } from "../../Api/Admin/Contacts";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [file, setFile] = useState<any>(null);
  const [terms, setTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setFile(files[0]);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Name", firstName + lastName);
    formData.append("Email", email);
    formData.append("Number", phone);
    formData.append("Title", subject);
    formData.append("Description", subject);

    if (file) {
      formData.append("file", file);
    }

    setLoading(true);
    let res = await CreateContactsApi(formData);
    if (res.status) {
      Swal.fire("SUCCESS!", "Send Successfully", "success");
      setEmail("");
      setFirstName("");
      setLastName("");
      setPhone("");
      setMessage("");
      setSubject("");
      setFile(null);
      setTerms(false);
      setLoading(false);
    } else {
      Swal.fire("Error!", res.message, "error");
      setLoading(false);
    }
  };
  return (
    <div className="w-full py-28 my-10">
      <div className=" lg:w-10/12 mx-4 lg:mx-auto lg:flex lg:justify-between">
        <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-5 py-4 w-full lg:w-[28%] mb-8 lg:mb-0 h-[220px] rounded-lg ">
          <div className="text-[#0f2444] text-xl font-bold font-Poppins">
            Chief Investigator :
          </div>
          <div className="text-gray-500 font-Roboto">Dr. Syamsundar De </div>
          <div className="text-gray-500 font-Roboto mb-3">
            Assistant Professor | Advanced Technology Development Centre
          </div>
          <div className="text-gray-500 font-Roboto mb-3">IIT Kharagpur</div>
          <a
            href="mailto: contact@pattern-project.eu"
            className=" text-lg font-semibold underline hover:no-underline"
          >
            syamsundarde@iitkgp.ac.in
          </a>
        </div>
        <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-5 py-4 w-full lg:w-[70%] rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className=" w-full lg:flex lg:justify-between mb-6">
              <div className="lg:w-[48%] w-full lg:mb-0 mb-6">
                <label htmlFor="firstName" className="text font-semibold ">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full mt-1 p-2 border-2 border-gray-200 outline-none rounded-md bg bg-slate-100"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="lg:w-[48%] w-full">
                <label htmlFor="lastName" className="text font-semibold mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full mt-1 p-2 border-2 border-gray-200 outline-none rounded-md bg bg-slate-100"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className=" w-full flex mb-6">
              <div className="w-[100%]">
                <label htmlFor="email" className="text font-semibold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-1 p-2 border-2 border-gray-200 outline-none rounded-md bg bg-slate-100"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className=" w-full flex mb-6">
              <div className="w-[100%]">
                <label htmlFor="phone" className="text font-semibold mb-1">
                  Phone Number
                </label>
                <input
                  type="number"
                  id="phone"
                  className="w-full mt-1 p-2 border-2 border-gray-200 outline-none rounded-md bg bg-slate-100"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className=" w-full flex mb-6">
              <div className="w-[100%]">
                <label htmlFor="subject" className="text font-semibold mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full mt-1 p-2 border-2 border-gray-200 outline-none rounded-md bg bg-slate-100"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className=" w-full flex mb-6">
              <div className="w-[100%]">
                <label htmlFor="message" className="text font-semibold mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full h-[250px] mt-1 p-2 border-2 border-gray-200 outline-none rounded-md bg bg-slate-100"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className=" w-full mb-6">
              <div className="w-[100%]">
                <label
                  htmlFor="file-input"
                  className="w-full mt-1 p-2 border-2 border-gray-200 outline-none rounded-md bg bg-slate-100 cursor-pointer flex items-center"
                >
                  <span className=" font-semibold mr-2 ">Upload a file</span>
                  <span className="mr-2 font-semibold hidden lg:block">|</span>
                  <span
                    className={`${
                      file ? "text-green-500" : "text-gray-600"
                    } hidden lg:block`}
                  >
                    {file
                      ? file?.name.length > 95
                        ? file?.name.slice(0, 95) + "..."
                        : file?.name
                      : "No file Attach"}
                  </span>

                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    // accept=".pdf,.doc,.docx"
                    onChange={handleFileInputChange}
                    className="sr-only"
                  />
                </label>
                <div>
                  <p
                    className={`${
                      file ? "text-green-500" : "text-gray-600"
                    } mt-2 lg:hidden text-sm`}
                  >
                    {file
                      ? file?.name.length > 33
                        ? file?.name.slice(0, 33) + "..."
                        : file?.name
                      : "No file Attach"}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex mb-6">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  className="mr-2 h-[15px] w-[15px] mt-[5px] cursor-pointer"
                  checked={terms}
                  onChange={(e) => setTerms(e.target.checked)}
                  required
                />
                <label htmlFor="terms" className="text ">
                  By submitting this form, I agree that information entered may
                  be used, exploited or processed to allow me to be contacted
                  again, as part of the commercial relationship resulting from
                  this request for information.
                </label>
              </div>
            </div>
            <div className=" w-full flex mb-3 ">
              {loading ? (
                <div className="flex justify-center items-center py-6">
                  <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              ) : (
                <button
                  type="submit"
                  className=" bg-[#0f2444] flex items-center text-white font-semibold py-2 px-5 rounded-md hover:bg-transparent border-2 border-[#0f2444] hover:text-[#0f2444]"
                >
                  Send <FaArrowRightLong className=" ml-8" />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
