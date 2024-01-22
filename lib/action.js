

export  const uploadImage = async (imagePath) => {
    try {
        const res = await fetch(`/api/upload`, {
            method: "POST",
            body: JSON.stringify({
                path: imagePath,
            }),
        });
        
        return res.json()
        
    } catch (err) {
        throw err;
    }
};