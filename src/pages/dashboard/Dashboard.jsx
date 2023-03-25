import React from "react";
import { useSanity } from "../../hooks/useSanity";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useTitle } from "../../hooks/useTitle";

import moment from "moment";

import Wrapper from "../../componets/ui/Wrapper";
import Loader from "../../componets/ui/Loader";
import Error from "../../componets/ui/Error";
import DashboardProduct from "./components/DashboardProduct";

import "./Dashboard.scss";

const Dashboard = () => {
  const { user } = useAuthContext();
  const { data, isLoading, error } =
    useSanity(`*[_type == 'order' && orderedBy._ref == '${user[0]._id}'] {
      _id,
      _createdAt,
      "products": products[]->{
        _id,
        name,
        price,
        image
      }
    }`);

  useTitle("dashboard");

  if (isLoading) return <Loader />;
  if (error) return <Error error={error} />;

  if (data.length == 0) return;

  return (
    <main className="dashboard">
      <Wrapper>
        <h1 className="dashboard__heading">your orders</h1>
        <div className="dashboard__container">
          <ul className="dashboard__list">
            {data.map((order) => (
              <li key={order._id}>
                <h3 className="dashboard__order-date">{`Ordered: ${moment(
                  order._createdAt
                ).format("LLLL")}`}</h3>
                {order.products.map((product) => (
                  <DashboardProduct key={product._id} product={product} />
                ))}
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </main>
  );
};

export default Dashboard;
