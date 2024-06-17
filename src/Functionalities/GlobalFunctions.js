export const formatDate = (dateString) => {
    const date = new Date(dateString);

    // Định dạng ngày với các tùy chọn cụ thể
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    // Định dạng lại để thêm dấu phẩy
    const parts = formattedDate.split(' ');
    return `${parts[0]} ${parts[1]} ${parts[2].replace(',', '')}`;
}