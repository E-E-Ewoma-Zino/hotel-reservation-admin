// dashboard
import moment from "moment";
import { useEffect, useState } from "react";
import { allUpcomingReservations } from "../../../api/get";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import SalesChat from "../../components/chats/SalesChat";
import Col from "../../components/col/Col";
import DropDownItem from "../../components/dropDownBtn/components/DropDownItems";
import DropDownBtn from "../../components/dropDownBtn/DropDownBtn";
import Row from "../../components/row/Row";
import Table from "../../components/Tables/Table2/table";
import Toolbar from "../../components/toolbar/Toolbar";
import {
  UserAddIcon,
  FireIcon,
  PlusIcon,
  SheldIcon,
  UploadCloudIcon,
  WidgetIcon
} from "../../icons/Icons";
import Footer from "../../partials/footer/Footer";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    async function getBookings() {
      const allReservations = await (await allUpcomingReservations())?.data;
      setReservations(allReservations?.data);

      setIsLoading(false);
    }

    getBookings();
  }, [reservations.length]);

  return (
    <main className="content">
      <Toolbar />
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb />
          <h2 className="h4">Dashboard</h2>
          <p className="mb-0">See all your activities here.</p>
        </div>
      </div>

      <div className="py-4 d-none">
        <DropDownBtn
          name="New Task"
          buttonClassName="btn btn-sm btn-gray-800 d-inline-flex align-items-center dropdown-toggle"
          icon={<PlusIcon className="icon icon-xs me-2" />}
        >
          <DropDownItem
            name="Add Room"
            icon={<UserAddIcon className="dropdown-icon text-gray-400 me-2" />}
          />
          <DropDownItem
            name="Add Widget"
            icon={<WidgetIcon className="dropdown-icon text-gray-400 me-2" />}
          />
          <DropDownItem
            name="Upload Files"
            icon={
              <UploadCloudIcon className="dropdown-icon text-gray-400 me-2" />
            }
          />
          <DropDownItem
            name="Preview Security"
            icon={<SheldIcon className="dropdown-icon text-gray-400 me-2" />}
          />
          <div role="separator" className="dropdown-divider my-1"></div>
          <DropDownItem
            name="Upgrade to Pro"
            icon={<FireIcon className="dropdown-icon text-danger me-2" />}
          />
        </DropDownBtn>
      </div>

      <Row>
        <Col size="col-12 mb-4">
          <SalesChat />
        </Col>
        {/* <Col size="col-12 col-sm-6 col-xl-4 mb-4">
					<DetailsCard name="Customer" type="danger" amount="345,123" timePeriod="Fri 3 - Apr 1" previousTime={{ text: "Since Last Month", amount: 22 }} icon={<UserGroupIcon className="icon" />} />
				</Col>
				<Col size="col-12 col-sm-6 col-xl-4 mb-4">
					<DetailsCard name="Customer" type="secondary" amount="345,123" timePeriod="Fri 3 - Apr 1" previousTime={{ text: "Since Last Month", amount: 22 }} icon={<RevenueIcon className="icon" />} />
				</Col>
				<Col size="col-12 col-sm-6 col-xl-4 mb-4">
					<DetailsCard name="Customer" type="tertiary" amount="345,123" timePeriod="Fri 3 - Apr 1" previousTime={{ text: "Since Last Month", amount: 22 }} icon={<ChartUpIcon className="icon" />} />
				</Col> */}
      </Row>
      <Row>
        <Col size="col-12 mb-4">
          <Table
            title="Upcoming Reservations"
            link={{ to: "/reservations", text: "See All" }}
            head={[
              "User",
              "Room",
              "Arrival",
              "Departure",
              "Reserved On",
              "Actions"
            ]}
          >
            {isLoading
              ? "Loading..."
              : reservations.map((reserve, index) => (
                  <tr key={index}>
                    <th className="text-gray-900" scope="row">
                      {reserve.user?.firstname}
                    </th>
                    <td className="fw-bolder text-gray-500">
                      {reserve.room?.type}
                    </td>
                    <td className="fw-bolder text-gray-500">
                      {moment(reserve.start).startOf("day").fromNow()}
                    </td>
                    <td className="fw-bolder text-gray-500">
                      {moment(reserve.end).format("LL")}
                    </td>
                    <td className="fw-bolder text-gray-500">
                      {moment(reserve.createdAt).startOf("seconds").fromNow()}
                    </td>
                    <td className="fw-bolder text-gray-500">
                      <DropDownBtn
                        name="Actions"
                        buttonClass="btn btn-sm btn-primary text-light d-inline-flex align-items-center dropdown-toggle"
                      >
                        <DropDownItem
                          name="View"
                          link={`/reservations#${reserve._id}?id=${reserve._id}`}
                          icon={
                            <WidgetIcon className="dropdown-icon text-gray-400 me-2" />
                          }
                        />
                        <DropDownItem
                          name="Edit"
                          link={""}
                          icon={
                            <UserAddIcon className="dropdown-icon text-gray-400 me-2" />
                          }
                        />
                        <DropDownItem
                          name="Cancel"
                          icon={
                            <FireIcon
                              className="dropdown-icon text-danger me-2"
                              click=""
                            />
                          }
                        />
                      </DropDownBtn>
                    </td>
                  </tr>
                ))}
          </Table>
        </Col>
      </Row>
      <Footer />
    </main>
  );
}
