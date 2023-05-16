
export const withErrorHandle = async <T> (request: () => T) => {
    try {
        const result = await request()
    } catch (e: any) {
        console.log(e)
        return false
    }
}
