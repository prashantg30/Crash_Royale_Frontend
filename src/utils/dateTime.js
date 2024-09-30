export const formatDate = (dateString) => {
  const parsedDate = new Date(dateString);
  const year = parsedDate.getFullYear();
  const day = String(parsedDate.getDate()).padStart(2, '0');
  const month = parsedDate.toLocaleString('en-US', { month: 'short' });

  return `${year} ${month} ${day}`;
}



export const formateTime = (dateString) => {
  const parsedDate = new Date(dateString);
  return parsedDate.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit"
  })

}
