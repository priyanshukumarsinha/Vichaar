const authHandler = (): Object => {
    // check if localhost consists of any token
    // if yes, then check for user and return both

    if(localStorage.getItem("token")){
        
        const user = JSON.parse(localStorage.getItem("user") || "{}");

        if(user){
            return user;
        }
    }
    else {
        localStorage.clear();
        return {};
    }

    return {};

}

export default authHandler;