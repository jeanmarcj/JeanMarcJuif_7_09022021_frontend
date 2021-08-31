import axios from 'axios';

class UploadFileService {
    upload(file, onUploadProgress) {
        let formData = new FormData();

        formData.append("file", file);

        return axios.post("files/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Accept": "/",
            },
            onUploadProgress
        });
    }

    /**
     * This uri isn't created on server for now
     * Return uploaded files on server
     * @returns files
     */

    getFiles() {
        
        fetch('http://localhost:3000/files/files')
        // .then( async response => {
        //     const data = await response.json();
        //     console.log(data);
        // });
    }

            // return axios.get("http://localhost:3000/files/files/");
  
}

export default new UploadFileService();