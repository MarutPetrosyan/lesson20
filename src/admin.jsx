import React, { useState } from "react";
import axios from 'axios'

function Admin() {
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [descripton, setDescription] = useState('')

    const openAdmin = () => setOpen(!open)

    const crate = () => {
        fetch('https://fakestoreapi.com/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: title, price: price, descripton: descripton })
        }).then((res) => res.json())
            .then((res) => console.log(res))
    }

    const remove = (id) => {
        fetch(`https://fakestoreapi.com/products/${id}`,{
            method: "DELETE",
            headers: {
                'COntent-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((res) => console.log(res))

        setProducts(products.filter((elem) => elem.id !== id))
    }

    return (
        <>
            <div className="main">
                <button onClick={openAdmin}>openAdmin</button>
                {
                    open && <div>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="title" />
                        <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="price" />
                        <input value={descripton} onChange={(e) => setDescription(e.target.value)} placeholder="descripton" />
                        <button onClick={crate}>Create Product</button>
                    </div>
                }
            </div>
        </>
    )
}

export default Admin