import { useGetNotesQuery } from "./notesApiSlice"
import Note from "./Note"
import useAuth from "../../hooks/useAuth"
import useTitle from "../../hooks/useTitle"
import PulseLoader from 'react-spinners/PulseLoader'

const NotesList = () => {
    useTitle('ABC company: Message List')

    const { username, isManager, isAdmin } = useAuth()

    const {
        data: notes,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetNotesQuery('notesList', {
        pollingInterval: 15000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })

    let content

    if (isLoading) content = <PulseLoader color={"#FFF"} />

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {
        const { ids, entities } = notes

        let filteredIds = [...ids]

        const tableContent = ids?.length && filteredIds.map(noteId => <Note key={noteId} noteId={noteId} />)

        content = (
            <table className="table table--notes" style={{margin: 'auto',border: '3px solid', width: '1000px'}}>
                <thead className="table__thead">
                    <tr>
                        <th scope="col" className="table__th note__created">Created</th>
                        <th scope="col" className="table__th note__updated">Updated</th>
                        <th scope="col" className="table__th note__title">Title</th>
                        <th scope="col" className="table__th note__username">Writer</th>
                        <th scope="col" className="table__th note__edit">Edit</th>
                    </tr>
                </thead>
                <tbody className="tbody" style={{textAlign: 'center'}}>
                    {tableContent}
                </tbody>
            </table>
        )
    }

    return content
}
export default NotesList