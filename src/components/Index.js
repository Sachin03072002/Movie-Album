import React, { useEffect, useState } from 'react';
import UpdateForm from './UpdateForm';

const Index = () => {
    const [data, setData] = useState([]);

    const fetchAllAlbums = async () => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then((response) => response.json())
            .then((json) => {
                setData(json);
            });
    };

    useEffect(() => {
        fetchAllAlbums();
    }, []);

    const fetchUpdateAlbum = (albumData) => {
        fetch('https://jsonplaceholder.typicode.com/albums', {
            method: 'POST',
            body: JSON.stringify(albumData),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setData([json, ...data]);
            });
    };

    const addNewAlbum = () => {
        const albumData = {
            title: 'new data',
            userId: 1,
        };
        fetchUpdateAlbum(albumData);
    };

    const handleNewAlbumUpdate = () => {
        addNewAlbum();
    };

    const handleDeleteAlbumUpdate = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
            method: 'DELETE',
        }).then(() => {
            setData(data.filter((item) => item.id !== id));
        });
    };

    const updateAlbum = (albumId, albumData, item) => {
        // console.log('previous:', item);
        // console.log('updated:', albumData);
        console.log('id', albumId);
        fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`, {
            method: 'PUT',
            body: JSON.stringify(albumData),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((updatedAlbum) => {
                // Update the state with the updated album
                setData(data.map((album) => album.id === albumId ? updatedAlbum : album));
                console.log(updatedAlbum);
            })
            .catch((error) => {
                console.error('Error updating album:', error);
            });
    };


    return (
        <div>
            <ul>
                <button onClick={handleNewAlbumUpdate}>add</button>
                {data.map((item) => (
                    <div
                        className='card d-inline-flex p-2 m-4 shadow p-3 mb-5 bg-body-tertiary rounded bg-info-subtle'
                        style={{ width: '18rem' }}
                        key={item.id}
                    >
                        <img
                            src='https://www.filmmusicsite.com/images/covers/large/3130.jpg'
                            className='card-img-top'
                            alt='...'
                        />
                        <div className='card-body'>
                            <p className='card-text'>{item.title}</p>
                        </div>
                        <button onClick={() => handleDeleteAlbumUpdate(item.id)}>
                            <i className='fa-solid fa-trash fa-shake'></i>
                        </button>
                        <div key={item.id}>
                            <UpdateForm updateAlbum={updateAlbum} item={item} id={item.id} />
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Index;
