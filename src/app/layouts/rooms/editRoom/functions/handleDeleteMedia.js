import { deleteRoomMedia } from "../../../../../api/delete";

async function handleDeleteMedia(
  roomId,
  cloud,
  mediaPath,
  mediaType,
  setUpdateCount
) {
  console.log("delete", roomId, mediaPath, mediaType);

  const data = { roomId, cloud, mediaPath, mediaType };

  try {
    const deletedMedia = await (await deleteRoomMedia(data)).data;

    if (deletedMedia.data)
      window.swalWithBootstrapButtons.fire({
        icon: "success",
        title: "Deleted " + mediaType,
        text: "The" + mediaType + " has been deleted",
        timer: 1000
      });
  } catch (err) {
    window.swalWithBootstrapButtons.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: "<a href>Why do I have this issue?</a>"
    });
    console.error("Error from create room:", err.response.data);
  }

  setUpdateCount((val) => val + 1);
}

export default handleDeleteMedia;
