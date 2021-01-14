import Link from 'next/link'

const MyApp = ({ Component, pageProps }) => {
    return (
    <>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link  href="/about">
            <a>About</a>
        </Link>    
        <Link href="/products">
            <a>Products</a>
        </Link>
        <Component {...pageProps} />
        <footer>Gordon Was Here</footer>
    </>
    )
}

export default MyApp