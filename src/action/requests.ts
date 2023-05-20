
export const withErrorHandle = async <T> (request: () => T) => {
    try {
        return await request()
    } catch (e: any) {
        console.log(e)
        return false
    }
}
