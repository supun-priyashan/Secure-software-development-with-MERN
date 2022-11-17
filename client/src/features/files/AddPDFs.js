import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from "@fortawesome/free-solid-svg-icons"

const AddPDFs = ({ users }) => {

    const navigate = useNavigate()

    const [pdfFile,setPDFFile] = useState();

    const onPDFFileChanged = e => setPDFFile(e.target.value)

    const onSavePDFClicked = async (e) => {
        e.preventDefault()

        //await AddPDFFile({ user: userId, title, text })
    }


    const content = (
        <>

            <main className="loginn" style={{textAlign: 'center', paddingTop: '50px', paddingLeft: '300px', paddingRight: '100px'}}>

            <form className="formMsg" onSubmit={() =>{}}>
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
                    // value={}
                    // onChange={}
                    />
            </form>
        </main>
        </>
    )

    return content
}

export default AddPDFs
