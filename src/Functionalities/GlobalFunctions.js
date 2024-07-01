export const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);

    // Định dạng ngày với các tùy chọn cụ thể
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    // Định dạng lại để thêm dấu phẩy
    const parts = formattedDate.split(' ');
    return `${parts[0]} ${parts[1]} ${parts[2].replace(',', '')}`;
}

export const calculateAge = (date) => {
    const birthDate = new Date(date);
    const today = new Date();

    // Tính toán sự khác biệt về năm và tháng
    const yearsDifference = today.getFullYear() - birthDate.getFullYear();
    const monthsDifference = today.getMonth() - birthDate.getMonth();

    // Tổng số tháng = sự khác biệt về năm chuyển đổi thành tháng + sự khác biệt về tháng
    const ageInMonths = (yearsDifference * 12) + monthsDifference;

    return ageInMonths;
}

export function dateAfter115Days(inputDate) {
    const date = new Date(inputDate);
    const futureDate = new Date(date);
    futureDate.setDate(date.getDate() + 115);

    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return futureDate.toLocaleDateString('en-US', options);
}

export function convertToDateTime(datetimeString) {
    // Split the date and time parts
    let [datePart, timePart] = datetimeString.split(' ');

    // Further split the date and time parts
    let [year, month, day] = datePart.split('-');
    let [hour, minute, second] = timePart.split(':');

    // Note: Month in JavaScript's Date constructor is 0-based (0 = January, 11 = December)
    // Create a new Date object
    let dateObject = new Date(year, month - 1, day, hour, minute, second);

    return dateObject;
}
export function isMoreThan100Days(date1, date2) {
    // Chuyển đổi ngày thành đối tượng Date
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    // Tính toán sự chênh lệch giữa hai ngày
    const timeDifference = Math.abs(d1 - d2);

    // Chuyển đổi sự chênh lệch thời gian từ milliseconds thành ngày
    const dayDifference = timeDifference / (1000 * 60 * 60 * 24);

    // Kiểm tra xem sự chênh lệch có lớn hơn 100 ngày hay không
    return dayDifference > 100;
}