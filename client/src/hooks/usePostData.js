import axios from 'axios'

const usePostData = (url) => {

    axios.post(url).then((response) => {
        console.log(response.data, "postedProperly")
    }).catch((err) => {
        console.log(err)
    })
}

export default usePostData
