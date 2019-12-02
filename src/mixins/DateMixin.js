import moment from 'moment'

export const dateMix = {
    filters: {
        formatDate(str, outputFormat = 'YYYY-MM-DD HH:mm:ss') {
            return moment(str).format(outputFormat)
        },
        diffForHumans(str) {
            let now = moment()
            return now.diff(str, 'minutes')
        }
    }
} 