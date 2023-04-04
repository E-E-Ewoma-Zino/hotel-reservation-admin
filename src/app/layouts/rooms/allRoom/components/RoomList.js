// This component return a list of rooms
import { useContext } from "react";
import { FireIcon, UserAddIcon } from "../../../../icons/Icons";
import { deleteRoom } from "../../../../../api/delete";
import { setRoomChangeContext } from "../../../../context/allContext";
import TableRow from "../../../../components/Tables/Table1/components/tableRow/TableRow";
import TableColumn from "../../../../components/Tables/Table1/components/tableColumn/TableColumn";
import DropDownBtn from "../../../../components/dropDownBtn/DropDownBtn";
import DropDownItem from "../../../../components/dropDownBtn/components/DropDownItems";

export default function RoomList({
  id,
  name,
  price,
  imgSrc,
  isAvaliable,
  type
}) {
  const UseSetRoomChangeContext = useContext(setRoomChangeContext);

  async function handleDeleteRoom(id, name) {
    try {
      const deletedRoom = await deleteRoom(id);
      console.log("deleted Room", deletedRoom.data);

      window.swalWithBootstrapButtons.fire({
        icon: "success",
        title: "Deleted Room",
        text: "Successfully deleted room " + name,
        showConfirmButton: true,
        timer: 1000
      });
    } catch (err) {
      window.swalWithBootstrapButtons.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "<a href>Why do I have this issue?</a>"
      });
      console.error("Error from create room:", err);
    }

    // use this context to trigger an update to the room page
    UseSetRoomChangeContext((prev) => prev + 1);
  }

  return (
    <TableRow>
      <TableColumn className="d-none d-md-block">
        <a href="#x" className="fw-bold">
          <img
            src={imgSrc}
            className="rounded-2"
            alt={name + " image"}
            width="50em"
            height="80em"
            style={{ objectFit: "cover", width: "100%" }}
          />
        </a>
      </TableColumn>
      <TableColumn>
        <span className="fw-normal">{name}</span>
      </TableColumn>
      <TableColumn>
        <span className="fw-normal">{type}</span>
      </TableColumn>
      <TableColumn>
        <span className="fw-bold">${price}</span>
      </TableColumn>
      {/* <TableColumn>
				<span className={isAvaliable ? "fw-bold text-success" : "fw-bold text-danger"}>{isAvaliable.toString()}</span>
			</TableColumn> */}
      <TableColumn>
        <DropDownBtn
          name="Actions"
          buttonClass="btn btn-sm btn-link d-inline-flex align-items-center dropdown-toggle"
        >
          {/* <DropDownItem name="View" icon={<WidgetIcon className="dropdown-icon text-gray-400 me-2" />} /> */}
          <DropDownItem
            name="Edit"
            link={"/rooms/edit?id=" + id}
            icon={<UserAddIcon className="dropdown-icon text-gray-400 me-2" />}
          />
          <DropDownItem
            name="Delete"
            icon={<FireIcon className="dropdown-icon text-danger me-2" />}
            click={() => handleDeleteRoom(id, name)}
          />
        </DropDownBtn>
      </TableColumn>
    </TableRow>
  );
}
