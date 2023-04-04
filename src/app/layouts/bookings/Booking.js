// all bookings
import { useState, useEffect } from "react";
import Footer from "../../partials/footer/Footer";
import { PlusIcon } from "../../icons/Icons";
import { allPopulatedBookings } from "../../../api/get";
import BookingList from "./components/BookingList";
import Toolbar from "../../components/toolbar/Toolbar";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Table from "../../components/Tables/Table1/Table";
import TableHead from "../../components/Tables/Table1/components/tableHead/TableHead";
import { Link } from "react-router-dom";

export default function Bookings() {
  const [isLoading, setIsLoading] = useState(true);
  const [bookings, setBookings] = useState([]);
  const [countUpdate, setCountUpdate] = useState(0);

  useEffect(() => {
    async function getBookings() {
      const bookingArr = await (await allPopulatedBookings()).data;

      setBookings(bookingArr.data);

      setIsLoading(false);
    }

    getBookings();
  }, [countUpdate]);

  return (
    <main className="content">
      <Toolbar />

      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb />
          <h2 className="h4">All Reservations</h2>
          <p className="mb-0">View all reservations here.</p>
        </div>
        <div className="btn-toolbar mb-2 mb-md-0 d-none">
          <div>
            <Link to={"/reservations/add"} className="btn btn-sm btn-gray-800">
              <PlusIcon className="icon icon-xs me-2" />
              New Reservation
            </Link>
          </div>
          <div className="btn-group d-none ms-2 ms-lg-3">
            <button type="button" className="btn btn-sm btn-outline-gray-600">
              Share
            </button>
            <button type="button" className="btn btn-sm btn-outline-gray-600">
              Export
            </button>
          </div>
        </div>
      </div>

      <Table
        head={[
          <TableHead title="#" key={0} />,
          <TableHead title="User" key={1} />,
          <TableHead title="Room" key={2} />,
          <TableHead title="Payed" key={3} />,
          <TableHead title="Adult" key={4} />,
          <TableHead title="Children" key={5} />,
          <TableHead title="Start" key={6} />,
          <TableHead title="End" key={7} />,
          <TableHead title="Actions" key={8} />
        ]}
      >
        {isLoading ? (
          <tr>
            <td>Loading...</td>
          </tr>
        ) : (
          bookings.map((book, index) => (
            <BookingList
              index={index}
              key={book._id}
              setCountUpdate={setCountUpdate}
              id={book._id}
              user={book.user}
              room={book.room}
              payed={book.payed}
              adult={book.noOfAdults}
              children={book.noOfChildren}
              start={book.start}
              end={book.end}
            />
          ))
        )}
      </Table>
      <Footer />
    </main>
  );
}
