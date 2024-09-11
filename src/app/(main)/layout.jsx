import Footer from "../components/footer/footer";
import Header from "../components/header/header";

export default function MainPageLayout({ children }) {
    return (
    <main>
        <Header></Header>
        { children }
        <Footer></Footer>
    </main>
    )
}