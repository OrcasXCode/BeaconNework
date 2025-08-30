import React from 'react'
import { Header } from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer/Footer'
import AssetPreloader from '../components/AssetPreloader'

export function Layout(props) {
    

    return (
        <>
            <AssetPreloader />
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}
