export const logActions = (store) => (next) => (actionInfo) => {
    console.log('dispacthing ', actionInfo)
    next(actionInfo)
}