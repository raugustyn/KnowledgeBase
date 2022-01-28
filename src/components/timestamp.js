export const composeTimestampLabel = (timestamp) => {
    if (timestamp) {
        const daysDiff = (Date.now() - timestamp)/(1000*3600*24)

        if (daysDiff < 1.0) {
            return 'at '
        }

        if (daysDiff > 30) {
            return 'on ' + (new Date(timestamp)).toDateString().split(' ').slice(1).join(' ')
        }

        return Math.floor(daysDiff) + ' days ago'
    }
}