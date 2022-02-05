export function valueToMsg(value, label, pluralTail) {
    switch (value) {
        case 0:
            return ''
        case 1:
            return value + label
        default:
            return value + label + pluralTail
    }
}

export const composeTimestampLabel = (timestamp) => {
    if (timestamp) {
        const daysDiff = (Date.now() - timestamp)/(1000*3600*24)
        if (Math.floor(daysDiff*24*60) == 0) {
            return 'right now'
        }
        if (daysDiff < 1.0) {
            const hours = Math.floor(daysDiff*24)
            const minutes = Math.floor((daysDiff*24-hours)*60)
            return [valueToMsg(hours, ' hour', 's', true), valueToMsg(minutes, ' minute', 's', false), ' ago'].filter(value => value !== '').join(' ')
        }

        if (daysDiff > 30) {
            return 'on ' + (new Date(timestamp)).toDateString().split(' ').slice(1).join(' ')
        }

        return Math.floor(daysDiff) + ' days ago'
    }
}