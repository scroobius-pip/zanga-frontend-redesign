export default (number: number, signStyle: boolean = false): string => {
    return new Intl.NumberFormat(signStyle ? 'en-NG' : 'en-US', { style: 'currency', currency: 'NGN' }).format(number)
}