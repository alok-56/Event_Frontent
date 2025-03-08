import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { motion } from "framer-motion";

const Growth = () => {
  const data = [
    {
      instrument: "Laminar Flow Clean Work Station",
      makeModel: "Make: KLENZAIDS CONTAMINATION CONTROLS (P) LTD.\nModel: 1053",
    },
    {
      instrument: "Plasma Cleaner",
      makeModel: "Make: DINEAR PLASMA SURFACE TECHNOLOGY\nModel: ZEPTO",
    },
    {
      instrument: "Ultrasonic Cum Heating Unit",
      makeModel: "Make: TAKASHI\nModel: U3PH/H",
    },
    {
      instrument: "Dry Etching M/C (Reactive Ion Etching)",
      makeModel: "MILMAN",
    },
    {
      instrument: "Twin Chamber Sputtering Cum Thermal Evaporation Coating Unit",
      makeModel: "HIND HI VAC PVT. LTD.",
    },
  ];

  const data_2 = [
    {
      instrument2: "E-Beam evaporation system",
      makeModel2: "Make: VARIAN\nModel: VT114 uhv System",
    },
    {
      instrument2: "LPCVD",
      makeModel2: "Make: TEMPRESS SYSTEM \nModel: TS-6303",
    },
    {
      instrument2: "Nitrogen Generator",
      makeModel2: "Make: PreciGen\nModel: NG02M",
    },
    {
      instrument2: "3D Printer",
      makeModel2: "Make: 3D Cubic\nModel: CUB 5.5 DUO",
    },
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

  const columns2 = [
    {
      accessorKey: "instrument2",
      header: "INSTRUMENT NAME",
    },
    {
      accessorKey: "makeModel2",
      header: "MAKE and MODEL",
    },
  ];

  const data_3 = [
    {
      instrument3: "Single Stage Horizontal Furnace System (for LiNbO₃)",
      instrumentoem3: "Make: INOTHERM",
    },
    {
      instrument3: "3 Stack Oxidation Furnace",
      instrumentoem3: "Make: TEMPRESS LINDBERG",
    },
    {
      instrument3: "Laminar Flow Work Station",
      instrumentoem3: "MICROFLOW DEVICES INDIA PVT. LTD.",
    },
  ];
  const columns3 = [
    {
      accessorKey: "instrument3",
      header: "INSTRUMENT NAME",
    },
    {
      accessorKey: "instrumentoem3",
      header: "INSTRUMENTS OEM",
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const table2 = useReactTable({
    data: data_2,
    columns: columns2,
    getCoreRowModel: getCoreRowModel(),
  });

  const table3 = useReactTable({
    data: data_3,
    columns: columns3,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="py-32">
      {/* Table 1 */}
      <div className="md:w-10/12 w-11/12 mx-auto py-10">
        <h1 className="sm:text-4xl sm:text-start text-center text-3xl font-semibold font-Josefin text-[#0f2444] mb-7">
          THIN FILM DEPOSITION LAB -1
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
      </div>

      {/* Table 2 */}
      <div className="md:w-10/12 w-11/12 mx-auto py-10">
        <h1 className="sm:text-4xl sm:text-start text-center text-3xl font-semibold font-Josefin text-[#0f2444] mb-7">
          THIN FILM DEPOSITION LAB -2
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

      {/* Table 3 */}
      <div className="md:w-10/12 w-11/12 mx-auto py-10">
        <h1 className="sm:text-4xl sm:text-start text-center text-3xl font-semibold font-Josefin text-[#0f2444] mb-7">
        DIFFUSION AND OXIDATION LAB
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
                {table3.getHeaderGroups().map((headerGroup) => (
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
                {table3.getRowModel().rows.map((row) => (
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

export default Growth;
