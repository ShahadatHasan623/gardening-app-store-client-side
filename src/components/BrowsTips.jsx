import React from "react";

const BrowsTips = () => {
  return (
    <div class="overflow-x-auto min-h-[calc(100vh-117px)] py-8 max-w-6xl mx-auto">
      <table class="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr class="bg-green-600 text-white text-left">
            <th class="py-3 px-4">No</th>
            <th class="py-3 px-4">image</th>
            <th class="py-3 px-4">image</th>
            <th class="py-3 px-4">Details</th>
          </tr>
        </thead>
        <tbody class="text-gray-700">
          <tr class="hover:bg-green-50">
            <td class="py-3 px-4">Rose</td>
            <td class="py-3 px-4">Flowering Plant</td>
            <td class="py-3 px-4">Decoration, Fragrance</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BrowsTips;
