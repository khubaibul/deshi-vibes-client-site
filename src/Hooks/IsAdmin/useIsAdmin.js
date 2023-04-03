import { useEffect, useState } from "react"

const useIsAdmin = (email, user) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`${process.env.REACT_APP_API_URL}/user/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsAdmin(data.isAdmin)
                    setIsAdminLoading(false);
                })
        }
    }, [email, user?.email]);

    return [isAdmin, setIsAdmin, isAdminLoading];
}

export default useIsAdmin;