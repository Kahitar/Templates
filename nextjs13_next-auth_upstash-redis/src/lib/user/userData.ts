import axios from 'axios'

export const getUserData = async (userId: string): Promise<UserData> => {
    console.log(`GET /api/getUserdata`)

    const data = await axios.get(`/api/user/getUserdata`)
        .then((res) => {
            console.log("Fetched data: ", res.data);
            return res.data
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
            return {"username": "UNKNOWN_USER"}
        })
    return data
}

export const setUserData = async (userId: string, userData: UserData): Promise<UserData> => {
    console.log(`POST /api/setUserdata`)

    const data = await axios.post('/api/user/setUserdata', userData)
        .then((res) => {
            console.log("Data from post: ", res.data)
            return userData
        })
        .catch((error) => {
            console.error("Error saving username: ", error);
            return {"username": "UNKNOWN_USER"}
        });
    console.log("Returning data: ", data)
    return data
}