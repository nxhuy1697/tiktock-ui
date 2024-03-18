import axiosClient from "./axiosClient";
 
const productApi = {
    getAll(params) {
        const url = '/details';
        return axiosClient.get(url, {params});
    },
    // get (id){
    //     const url = `/photos/${id}`;
    //     return axiosClient.get(url);
    // },
    // add(data){
    //     const url = '/photos';
    //     return axiosClient.add(url,data);
    // },
    // update(data){
    //     const url = `/photos/${data.id}`;
    //     return axiosClient.patch(url, data)
    // },
    // remove(id){
    //     const url = `/photos/${id}`;
    //     return axiosClient.delete(url, id);
    // }
}
export default productApi;