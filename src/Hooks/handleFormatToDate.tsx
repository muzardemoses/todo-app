import moment from 'moment';

export const handleFormatToDate = (date: moment.MomentInput) => {
    const today = moment().format('YYYY-MM-DD');
    const tomorrow = moment().add(1, 'day').format('YYYY-MM-DD');
    //const nextWeek = moment().add(7, 'days').format('YYYY-MM-DD');

    const formattedDate = moment(date).format('D MMMM');

    if (date === today) {
        return 'Today';
    } else if (date === tomorrow) {
        return 'Tomorrow';
        // } else if (moment(date).isAfter(nextWeek)) {
        //     return 'Next week';
    } else {
        return formattedDate;
    }
};