import React from "react";
import { useLoaderData } from "react-router";

const DashBoardSubscribe = () => {
    const subscribers =useLoaderData()
  return (
    <div>
      <div className="overflow-x-auto p-4">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">
          Newsletter Subscribers
        </h2>
        <table className="table-auto w-full border border-gray-200 rounded-lg shadow">
          <thead className="bg-green-100">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border text-left">Email</th>
              <th className="px-4 py-2 border text-left">Subscribed At</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((subscriber, index) => (
              <tr key={subscriber._id} className="hover:bg-green-50">
                <td className="px-4 py-2 border text-center">{index + 1}</td>
                <td className="px-4 py-2 border">{subscriber.email}</td>
                <td className="px-4 py-2 border">
                  {new Date(subscriber.subscribedAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashBoardSubscribe;
