import React, { useState, useEffect } from 'react'

function UpdateForm(props) {
    const { item, updateAlbum, id } = props;
    const [newAlbumTitle, setNewAlbumTitle] = useState('');

    useEffect(() => {
        setNewAlbumTitle(item.title);
    }, [item]);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateAlbum(id, { title: newAlbumTitle }, item);
    };

    const handleInputChange = (e) => {
        setNewAlbumTitle(e.target.value);
    };
    return (
        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <i className="fa-solid fa-pen-nib"></i>
            </button>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit Album</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="title" value={newAlbumTitle} onChange={handleInputChange} required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" className="btn btn-primary">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default UpdateForm;
