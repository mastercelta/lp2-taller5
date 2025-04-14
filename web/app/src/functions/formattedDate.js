const formattedDate = (date) => {
    const newDate = new Date(date).toLocaleDateString("es", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return newDate;
};
export default formattedDate