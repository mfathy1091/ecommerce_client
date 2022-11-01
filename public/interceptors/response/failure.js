// import MySwal from "@/utils/MySwal"

export default function (error) {
    switch (error.response.status) {
        // case 401:
        //     localStorage.removeItem('jwt.token')

        //     router.push({
        //         name: 'Login'
        //     })
        //     break
        case 500:
            // MySwal.error('Server Error', error.response.status);
            break
    }

    return Promise.reject(error)
}
