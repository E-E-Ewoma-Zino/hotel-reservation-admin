// This component return a list of rooms
import { FireIcon } from "../../../icons/Icons";
import { deleteBooking } from "../../../../api/delete";
import DropDownBtn from "../../../components/dropDownBtn/DropDownBtn";
import DropDownItem from "../../../components/dropDownBtn/components/DropDownItems";
import TableRow from "../../../components/Tables/Table1/components/tableRow/TableRow";
import TableColumn from "../../../components/Tables/Table1/components/tableColumn/TableColumn";
import { useEffect, useState } from "react";

export default function BookingList({
  id,
  setCountUpdate,
  index,
  user,
  room,
  payed,
  adult,
  children,
  start,
  end
}) {
  async function handleDeleteRoom(id) {
    try {
      const deletedRoom = await deleteBooking(id);
      console.log("deleted Room", deletedRoom.data);

      setCountUpdate((pre) => pre + 1);
      window.swalWithBootstrapButtons.fire({
        icon: "success",
        title: "Deleted Reservation",
        text: "Successfully deleted reservation",
        showConfirmButton: true,
        timer: 1000
      });
    } catch (err) {
      window.swalWithBootstrapButtons.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#x">Why do I have this issue?</a>'
      });
      console.error("Error from create room:", err);
    }
  }

  return (
    <TableRow id={id}>
      <TableColumn className="p-0">
        {/* <img src={ host + room?.images[0]?.path } className="img-fluid rounded-circle" alt={room?.name} /> */}
        <span className="fw-normal px-4">{index + 1}</span>
      </TableColumn>
      <TableColumn>
        <span className="fw-normal">{user?.firstname}</span>
      </TableColumn>
      <TableColumn>
        <span className="fw-normal">{room?.name}</span>
      </TableColumn>
      <TableColumn>
        <span className="fw-bold">${payed}</span>
      </TableColumn>
      <TableColumn>
        <span className="fw-bold">{adult}</span>
      </TableColumn>
      <TableColumn>
        <span className="fw-bold">{children}</span>
      </TableColumn>
      <TableColumn>
        <span className="fw-bold">{start?.toString().substring(0, 10)}</span>
      </TableColumn>
      <TableColumn>
        <span className="fw-bold">{end?.toString().substring(0, 10)}</span>
      </TableColumn>
      <TableColumn>
        <DropDownBtn
          name="Actions"
          buttonClass="btn btn-sm btn-link d-inline-flex align-items-center dropdown-toggle"
        >
          {/* <DropDownItem name="View" icon={<WidgetIcon className="dropdown-icon text-gray-400 me-2" />} />
					<DropDownItem name="Edit" icon={<UserAddIcon className="dropdown-icon text-gray-400 me-2" />} /> */}
          <DropDownItem
            name="Cancel"
            icon={<FireIcon className="dropdown-icon text-danger me-2" />}
            click={() => handleDeleteRoom(id)}
          />
        </DropDownBtn>
      </TableColumn>
    </TableRow>
  );
}
