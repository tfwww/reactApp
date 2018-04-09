export default function doubleDigit(value) {
    if (!value) {
        value = 0
    }
	return parseFloat(value).toFixed(2)
}