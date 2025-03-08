import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { motion } from "framer-motion";
import image_copy from "../../assets/image/image copy.png";
import image_copy_2 from "../../assets/image/image copy 2.png";
import image_copy_4 from "../../assets/image/image copy 4.png";


const Fabrication = () => {
  const data = [
    {
      instrument: "Mask Aligner",
      makeModel: "Make:  SUSS_Microtec\nModel: MJB4",
    },
    {
      instrument: "Thin film Spin Coater",
      makeModel: "POLOS",
    },
    {
      instrument: "Convection type Hot twin Chamber Oven",
      makeModel: "INSTRUMENTATION INDIA",
    },
    {
        instrument: "Digital Hot Plate",
        makeModel: "Make: Tarson\nModel: Hot Top Digital MC-02",
    }
  ];

  const data2 = [
    {
      instrument: "De ionised water Plant",
      makeModel: "MERK MILLIPORE",
    },
    {
      instrument: "Exhaust cum Laminar bench",
      makeModel: "Make:  KLENZ FLO\nModel: 1570-R-48-30-30",
    },
    {
      instrument: "Diamond wheel Saw",
      makeModel: "Make:  SOUTH BAY TECHNOLOGY\nModel:  650",
    },
    {
        instrument: "Polishing Machine",
        makeModel: "Make: ULTRA TEC\nModel: Ultrapol",
    }
  ];

  const columns = [
    {
      accessorKey: "instrument",
      header: "INSTRUMENT NAME",
    },
    {
      accessorKey: "makeModel",
      header: "MAKE and MODEL",
    },
  ];

 
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const table2 = useReactTable({
    data:data2,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="">
      {/* Table 1 */}
      <div className="md:w-10/12 w-11/12 mx-auto py-32 mt-10">
      <h1 className="sm:text-4xl sm:text-start text-center text-3xl font-semibold font-Josefin text-[#0f2444] mb-7">
      PHOTOLITHOGRAPHY LAB
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="p-4"
        >
          <div className="overflow-x-auto">
            <table className="table-auto w-full border border-gray-300">
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id} className="bg-gray-200">
                    {headerGroup.headers.map((header) => (
                      <motion.th
                        key={header.id}
                        className="px-4 py-2 text-left border-b border-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 * header.index }}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </motion.th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <motion.tr
                    key={row.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * row.index }}
                    className="hover:bg-gray-100"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="px-4 py-2 border-b border-gray-300 whitespace-pre-wrap"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
        <div className=" grid md:grid-cols-2 grid-cols-1 gap-10 mt-5">
            <img src={image_copy} alt="" className="h-[250px] w-11/12 mx-auto object-cover" />
            <img src={image_copy_2} alt="" className="h-[250px] w-11/12 mx-auto object-cover" />
            {/* <img src={image_copy_3} alt="" className="h-[250px] w-11/12 mx-auto object-cover" /> */}
            <img src={image_copy_4} alt="" className="h-[250px] w-11/12 mx-auto object-cover" />
        </div>
      </div>

       {/* Table 2 */}
       <div className="md:w-10/12 w-11/12 mx-auto py-10">
      <h1 className="sm:text-4xl sm:text-start text-center text-3xl font-semibold font-Josefin text-[#0f2444] mb-7">
      CHEMICAL HANDLING UNIT
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="p-4"
        >
          <div className="overflow-x-auto">
            <table className="table-auto w-full border border-gray-300">
              <thead>
                {table2.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id} className="bg-gray-200">
                    {headerGroup.headers.map((header) => (
                      <motion.th
                        key={header.id}
                        className="px-4 py-2 text-left border-b border-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 * header.index }}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </motion.th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table2.getRowModel().rows.map((row) => (
                  <motion.tr
                    key={row.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * row.index }}
                    className="hover:bg-gray-100"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="px-4 py-2 border-b border-gray-300 whitespace-pre-wrap"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Fabrication;