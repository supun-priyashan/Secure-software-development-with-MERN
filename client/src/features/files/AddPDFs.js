import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from "@fortawesome/free-solid-svg-icons"
import axios from "axios";

const AddPDFs = ({ users }) => {

    const navigate = useNavigate()
    const [fileName,setFileName] = useState("");

    const [pdfFile,setPDFFile] = useState();

    const onPDFFileChanged = e => {
        console.log(e)
        setPDFFile(e.target.files[0])
        setFileName(pdfFile.name)
    }


    const onSavePDFClicked = async (e) => {
        e.preventDefault()

        //const token = getState().auth.token


        const file = new FormData();
        file.append('file',pdfFile);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                //"Authorization" : `Bearer ${token}`
            }
        };


        axios.post("https://localhost:3500/files",file,config)
            .then((response,error) => {
                if (response.data.success) {
                    alert('File Successfully Uploaded')
                } else {
                    alert('Failed to upload')
                }
            }).catch((error) => {
            alert(error.message);
        });

        //await AddPDFFile({ user: userId, title, text })
    }


    const content = (
        <>

            <main className="loginn" style={{textAlign: 'center', paddingTop: '50px', paddingLeft: '300px', paddingRight: '100px'}}>

            <form className="formMsg" onSubmit={onSavePDFClicked}>
                <div className="form__title-row">
                    <h2>New File</h2>
                    <div className="form__action-buttons">
                        <button
                            className="icon-button"
                            title="Save"
                        >
                            <FontAwesomeIcon icon={faSave} />
                        </button>
                    </div>
                </div>
                <label className="form__label" htmlFor="title">
                    File:</label>
                <input
                    id="title"
                    name="title"
                    type="file"
                    autoComplete="off"
                     value={fileName}
                     onChange={onPDFFileChanged}
                    />
            </form>
        </main>
        </>
    )

    return content
}

export default AddPDFs
