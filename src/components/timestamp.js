export function valueToMsg(value, label, tail, allowEmpty) {
    console.log(value, label, tail, allowEmpty, value + label + tail)
    if (value > 0) {
        console.log(value)
        return (value == 1 ? value + label : value + label + tail)
    }
    return (allowEmpty ? '' : 'right now')
}

export const composeTimestampLabel = (timestamp) => {
    if (timestamp) {
        const daysDiff = (Date.now() - timestamp)/(1000*3600*24)

        if (Math.floor(daysDiff*24*60)) {
            return 'right now'
        }
        if (daysDiff < 1.0) {
            const hours = Math.floor(daysDiff*24)
            const minutes = Math.floor((daysDiff*24-hours)*60)
            return [valueToMsg(hours, ' hour', 's', true), valueToMsg(minutes, ' minut', 'es', false), ' ago'].filter(value => value !== '').join(' ')
        }

        if (daysDiff > 30) {
            return 'on ' + (new Date(timestamp)).toDateString().split(' ').slice(1).join(' ')
        }

        return Math.floor(daysDiff) + ' days ago'
    }
}