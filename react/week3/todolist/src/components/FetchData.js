import React, {useState, useEffect} from "react";

function FetchData() {
    const [data, setData] = useState({});
    const [hasError, setErrors] = useState(false);

    useEffect(() => {
        ;(async () => {
            const data = await fetch("https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw")
                .then(res => res.json())
                .then(res => console.log(res))
                .catch(err => setErrors(err));
            setData(data);
        })()
    }, []);

    return data;
}

export default FetchData;